import React, { HTMLProps, useState } from "react";

interface TooltipProps extends HTMLProps<HTMLDivElement> {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children, ...rest }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="group relative flex items-center" {...rest}>
      {children}
      {isHovered && (
        <div
          data-test="tooltip-content"
          className="absolute top-full mt-2 px-2 py-1 bg-black text-white text-sm rounded-md z-10 max-w-max whitespace-nowrap left-1/2 transform -translate-x-1/2"
        >
          <p>{text}</p>
          <div className="absolute border-b-black top-[-14px] left-1/2 -translate-x-1/2 w-0 h-0 border border-solid border-y-8 border-x-8 border-l-transparent border-r-transparent border-t-transparent"></div>
        </div>
      )}
      <span
        className="flex absolute inset-0 items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      ></span>
    </div>
  );
};

export default Tooltip;
