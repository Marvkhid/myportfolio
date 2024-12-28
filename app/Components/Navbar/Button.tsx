import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ className, children, ...rest }) => {
  return (
    <button
      className={`bg-transparent text-neutral-800 hover:text-green-500 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
