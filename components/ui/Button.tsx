import { cn } from "@/lib/constants";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const styles = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary:
      "border border-gray-300 text-gray-900 hover:bg-gray-100",
    light:
      "bg-white text-indigo-600 hover:bg-gray-100",
  };

  return (
    <button
      className={cn(
        "rounded-md px-6 py-3 text-sm font-medium transition",
        styles[variant]
      )}
    >
      {children}
    </button>
  );
}
