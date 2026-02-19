import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useQueryClient } from "@tanstack/react-query";

interface CommentSectionProps {
  slug: string;
}

const CommentForm = ({ slug }: CommentSectionProps) => {

  return (
    <form
      className="my-8 flex flex-col gap-y-[9px] lg:gap-y-4.5"
    >
<p>Test</p>
    </form>
  );
};

export default CommentForm;
