import { processes } from "@/lib/constants";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import NavigationButton from "./NavigationButton";

const WorkProcess = () => {
  return (
    <div className="px-2">
      <div className="w-full h-auto px-4 md:px-10 py-8 bg-[#141414] rounded-3xl">
        <div className="relative flex flex-col md:flex-row items-center md:items-start mb-12">
          <div className="mb-4 sm:mb-0 md:mb-0 md:mt-3 md:mr-auto z-10">
            <NavigationButton label="Work Process" targetId="contact" />
          </div>

          <h1 className="absolute left-1/2 -translate-x-1/2 text-center text-4xl lg:text-5xl py-14 md:py-0 font-semibold text-white leading-tight">
            My Work Process
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12 md:py-0">
          {/* For animation I used rotate on hover */}
          {processes.map((process) => (
            <div
              key={process.id}
              className="group rounded-3xl p-8 bg-black hover:bg-[#C5FF41] hover:rotate-3 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="inline-block px-6 py-1.5 rounded-full text-sm font-medium bg-[#C5FFEE] text-gray-900 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300">
                  {process.title}
                </span>
                <div className="flex items-center gap-2">
                  <FaArrowRight className="w-4 h-4 text-white group-hover:text-black transition-all" />
                  <button className="text-sm font-medium underline hover:no-underline text-white group-hover:text-black transition-all">
                    Read More
                  </button>
                </div>
              </div>

              <p className="text-base leading-relaxed text-[#B2B2B2] group-hover:text-black transition-all duration-300">
                {process.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
