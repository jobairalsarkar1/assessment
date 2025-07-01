"use client";

import { FaArrowRightLong } from "react-icons/fa6";

interface ButtonProps {
  text?: string;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  text = "Start Project",
  onClick,
  className = "",
  href,
  type = "button",
}: ButtonProps) => {
  const buttonClass = `group py-1.5 flex items-center justify-center gap-2 border border-black rounded-full font-['Sporting_Grotesque'] hover:bg-black hover:text-white transition-all duration-300 ${className}`;

  const content = (
    <>
      <FaArrowRightLong className="w-8 h-8 border border-black py-1.5 rounded-full group-hover:translate-x-1 transition-transform duration-300" />
      <span className="text-lg mr-4">{text}</span>
    </>
  );

  return href ? (
    <a href={href} className={buttonClass}>
      {content}
    </a>
  ) : (
    <button type={type} onClick={onClick} className={buttonClass}>
      {content}
    </button>
  );
};
