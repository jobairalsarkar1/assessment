"use client";
import React, { useState } from "react";
import NavigationButton from "./NavigationButton";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import { skills } from "@/lib/constants";

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView =
    typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerView >= skills.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? skills.length - itemsPerView : prevIndex - 1
    );
  };

  const visibleSkills = [];
  for (let i = 0; i < itemsPerView; i++) {
    const skillIndex = (currentIndex + i) % skills.length;
    visibleSkills.push(skills[skillIndex]);
  }

  return (
    <div className="px-2">
      <div className="w-full h-auto px-4 md:px-10 py-8 bg-[#000000] rounded-3xl">
        <div className="mb-5 md:mt-3 md:mr-auto z-10 flex items-center justify-center md:justify-start">
          <NavigationButton label="Why Choose me" targetId="about" />
        </div>
        <div className="flex items-center flex-col md:flex-row justify-between pt-2">
          <h1 className="text-4xl lg:text-5xl font-semibold text-white leading-tight mb-4 md:mb-0">
            My Extensive <br /> List of Skills
          </h1>
          <div className="text-white">
            <p className="text-center md:text-end">
              Building the worlds best marketing Your <br /> trusted partner for
              strategy, design, and dev.
            </p>
            <div className="w-full h-0.5 mt-3 bg-[#B2B2B2] rounded-full" />
          </div>
        </div>
        <div className="mt-4 md:mt-0 text-white flex items-center justify-center md:justify-end gap-2">
          <button
            type="button"
            onClick={prevSlide}
            className="p-2 rounded-full border-2 hover:bg-gray-700 transition-colors"
          >
            <FaArrowLeftLong className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="p-2 rounded-full border-2 hover:bg-gray-700 transition-colors"
          >
            <FaArrowRightLong className="w-5 h-5" />
          </button>
        </div>

        <div className="relative overflow-hidden py-12">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {skills.map((skill, index) => (
              <div
                key={skill.id}
                className={`flex-shrink-0 w-full ${
                  itemsPerView === 3 ? "md:w-1/3" : "md:w-full"
                } px-4 transition-all duration-300 ${
                  index < currentIndex || index >= currentIndex + itemsPerView
                    ? "opacity-30 blur-sm"
                    : "opacity-100 blur-0"
                }`}
              >
                <div className="group rounded-3xl p-8 bg-[#141414] hover:rotate-6 transition-all duration-300 h-full">
                  <div className="flex flex-col gap-6">
                    <Image
                      src={skill.icon}
                      alt={skill.title}
                      width={50}
                      height={50}
                    />
                    <span className="text-lg font-semibold text-white">
                      {skill.title}
                    </span>
                  </div>
                  <p className="mt-2 text-base leading-relaxed text-[#B2B2B2]">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
