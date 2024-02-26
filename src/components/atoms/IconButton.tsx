import React, { ReactNode } from "react";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  text: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  text,
  className,
  ...rest
}) => {
  return (
    <button
      className={`flex items-center bg-[#EDF2F7] p-2 rounded-md ${className}`}
      style={{ borderRadius: "6px" }}
      {...rest}
    >
      <span className="mr-2">{icon}</span>
      {text}
    </button>
  );
};

export default IconButton;
