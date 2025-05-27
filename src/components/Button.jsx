const Button = ({
  label,
  children,
  onClick,
  className = "",
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`lemon-button ${className}`}
      onClick={onClick}
      {...props}
    >
      {label ? label : children}
    </button>
  );
};

export default Button;
