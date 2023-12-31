import React from "react";
import { renderClasses } from "../../utils/renderClasses";

interface ButtonProps {
  children?: React.ReactNode;
  type?: "button" | "submit" | undefined;
  isDisabled?: boolean;
  onClick: () => void;
  className?: string[];
}

const Button = ({
  children,
  type = "button",
  isDisabled = false,
  onClick,
  className: customClassname = [],
}: ButtonProps) => {

  return (
    <button
      className={renderClasses(['button ', ...customClassname])}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
