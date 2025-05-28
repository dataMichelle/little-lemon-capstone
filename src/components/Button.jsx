import React from "react";

const Button = ({
  label,
  children,
  onClick,
  className = "",
  type = "button",
  bgColor, // background color
  labelColor, // text color
  style = {},
  ...props
}) => {
  const customStyle = {
    ...(bgColor && { background: bgColor }),
    ...(labelColor && { color: labelColor }),
    ...style,
  };

  return (
    <button
      type={type}
      className={`lemon-button ${className}`}
      onClick={onClick}
      style={customStyle}
      {...props}
    >
      {label ? label : children}
    </button>
  );
};

export default Button;
