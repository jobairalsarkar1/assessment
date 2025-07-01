"use client";
import React from "react";
import { FaArrowDown } from "react-icons/fa";

const NavigationButton = ({
  label = "Scroll",
  targetId = "",
  borderColor = "border-white",
  textColor = "text-white",
}) => {
  const handleClick = () => {
    if (!targetId) return;
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`flex items-center ${textColor}`}
    >
      <span className={`p-[8px] rounded-full border-2 ${borderColor}`}>
        <FaArrowDown className="w-4 h-4" />
      </span>
      <span
        className={`ml-[-2px] px-2 py-[5px] border-2 rounded-full ${borderColor}`}
      >
        {label}
      </span>
    </button>
  );
};

export default NavigationButton;
