import supabase from "@/lib/supabase-client";
import { Comment } from "@/type/type";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

interface CommentSectionProps {
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
}

const CommentForm = ({ setComments }: CommentSectionProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    message: "",
    name: "",
    email: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // submit comments
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { message, name, email } = formData;
    if (!message.trim() || !name.trim() || !email.trim()) return;

    setLoading(true); 

    const newComment = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from("CommentList")
      .insert([newComment])
      .select()
      .single();

    if (error) {
      console.error("There is an error", error);
      toast.error("Failed to add comment");
    } else if (data) {
      setComments((prev) => [...prev, data]);
      setFormData({ message: "", name: "", email: "" });
      toast.success("Comment added!");
    }
    setLoading(false);
  };

  return (
    <form
      className="my-8 flex flex-col gap-y-[9px] lg:gap-y-4.5"
      onSubmit={handleSubmit}
    >
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        id=""
        className="resize-none h-[140px] lg:h-[309px] bg-white rounded-[10px] px-2.5 py-4.5 lg:px-5 lg:py-10 text-secondary-600 text-sm lg:text-xl lg:leading-8 font-normal border-[0.45px] border-brand-gray-100"
        placeholder="Type here"
        required
      />
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="bg-white rounded-[10px] px-2.5 py-4.5 lg:px-5 lg:py-10 text-secondary-600 text-sm lg:text-xl lg:leading-8 font-normal border-[0.45px] border-brand-gray-100"
        placeholder="Name*"
        required
      />
      <input
        type="email"
        name="email"
        className="bg-white rounded-[10px] px-2.5 py-4.5 lg:px-5 lg:py-10 text-secondary-600 text-sm lg:text-xl lg:leading-8 font-normal border-[0.45px] border-brand-gray-100"
        placeholder="Email*"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <div className="flex items-center gap-x-2 lg:gap-x-4 mb-5 lg:mb-10">
        <input
          type="checkbox"
          className="lg:w-[18px] lg:h-[18px] w-[10px] h-[10px] border border-black rounded-sm bg-white checked:border-transparent focus:outline-none"
        />
        <span className="text-secondary-600 text-xs lg:text-xl leading-8 font-normal">
          Notify me of any response
        </span>
      </div>
      <button
      disabled={loading}
        type="submit"
        className="bg-brand-green-900 w-fit py-3.5 lg:py-5 px-5 lg:px-11 rounded-[6px] lg:rounded-[12px] text-center text-white text-sm lg:text-[31px] font-normal cursor-pointer transition duration-200 ease-in hover:opacity-50"
      >
        {loading ? "Submitting..." : "Post comment"}
      </button>
    </form>
  );
};

export default CommentForm;
