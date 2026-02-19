interface SpinnerProps {
  size?: "sm" | "md" | "lg" | "xl"; // optional sizes
}

const Spinner = ({ size = "md" }: SpinnerProps) => {
  // Map size prop to Tailwind classes
  const sizeClasses: Record<string, string> = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-4",
    lg: "w-12 h-12 border-4",
    xl: "w-16 h-16 border-8",
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className={`${sizeClasses[size]} border-t-green-900 border-b-green-900 border-l-transparent border-r-transparent rounded-full animate-spin`}
      ></div>
    </div>
  );
};

export default Spinner;
