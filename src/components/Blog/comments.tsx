import CommentForm from "./commentForm"

const Comments = () => {
  return (
    <section className="mx-auto container w-full font-roboto bg-brand-green-100 pt-20 pb-24 lg:px-60 px-3.5">
    <div className="flex flex-col gap-y-2">
      <p className="text-secondary-800 text-[31px] font-semibold leading-7">Join the Conversation and Ask your Questions</p>
      <span className="text-secondary-600 text-xl leading-8 font-normal">Your email and other personal details is not made visible.</span>
    </div>
      <CommentForm/>
    </section>
  )
}

export default Comments