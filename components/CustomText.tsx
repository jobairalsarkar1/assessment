"use client";
import React from "react";

interface CustomTextProps {
  text: string;
  breakAfter?: number;
  highlight?: string;
  position?: "text-start" | "text-center" | "text-end";
}

const CustomText: React.FC<CustomTextProps> = ({
  text,
  breakAfter = 0,
  highlight = "",
  position,
}) => {
  if (!text) return null;

  const words = text.split(" ");
  const firstLine = words.slice(0, breakAfter);
  const secondLine = words.slice(breakAfter);

  const renderWords = (wordArray: string[]) =>
    wordArray.map((word, idx) => {
      const cleanWord = word.replace(/[.,!?]/g, "");
      const isHighlighted =
        highlight && cleanWord.toLowerCase() === highlight.toLowerCase();

      return (
        <span
          key={idx}
          className={isHighlighted ? "bg-black text-white px-2 rounded-md" : ""}
        >
          {word}
        </span>
      );
    });

  return (
    <div
      className={`text-black text-5xl md:text-7xl font-semibold ${position}`}
    >
      <div className="flex flex-wrap gap-x-2 mb-2">
        {renderWords(firstLine)}
      </div>
      <div className="flex flex-wrap gap-x-2 mt-2">
        {renderWords(secondLine)}
      </div>
    </div>
  );
};

export default CustomText;
