// components/Button.js
const Button = ({ children, variant = "black", ...props }) => {
  const baseStyles =
    "px-10 py-3 md:px-16 md:py-4 md:text-xl flex items-center gap-2 rounded-full font-medium transition-colors duration-300";
  const variantStyles = {
    black: "bg-black text-white hover:bg-gray-800",
    emerald: "bg-emerald-200 text-black hover:bg-emerald-300",
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
