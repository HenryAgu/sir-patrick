const CommentSection = () => {
  return (
    <section className="flex flex-col gap-y-10">
      <div className="flex flex-col gap-y-5 border-t border-t-brand-gray-800/30 py-14 ">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-[25px]">Henry Agu</p>
          <p className="font-source-serif text-secondary-600/50 text-xl font-normal">
            April 24th, 2025 / 6:23PM
          </p>
        </div>
        <div className="pl-5">
          <p className="text-xl font-normal text-secondary-600">
            Sir Patrick, please when is the right time to start submiting my
            details for the PPA, the guy that i’m using is saying this is not
            the right time and i’ve already paid him o. Please can you advise me
            on what to do?
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommentSection;
