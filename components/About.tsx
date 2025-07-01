import React from "react";
import NavigationButton from "./NavigationButton";
import FallingBricks from "./FallingBricks";

const About = () => {
  return (
    <div className="px-2">
      <div className="px-16 pt-14">
        <div className="md:px-24 mb-5 md:mt-3 md:mr-auto z-10 flex justify-center md:justify-end">
          <NavigationButton
            label="About"
            targetId="myWorkProcess"
            borderColor="border-black"
            textColor="text-black"
          />
        </div>
        <div className="w-full text-center flex flex-col justify-center gap-4">
          <div>
            <h1 className="text-black text-5xl md:text-7xl font-semibold leading-normal">
              I’ve been&nbsp;
              <span className="bg-black text-white px-2 py-1.5 rounded-md">
                Developing
              </span>
              &nbsp;
              <br /> Websites since&nbsp;
              <span className="bg-black text-white px-2 rounded-md">2013</span>
              &nbsp;
            </h1>
          </div>
          <p className="text-lg">
            We start every new client interaction with an in-depth discovery{" "}
            <br />
            call where we get to know each other
          </p>
        </div>

        <div className="relative w-full min-h-[200px] mt-10 hidden md:block overflow-hidden">
          <div className="absolute left-0 bottom-8 w-1/4">
            <h1 className="font-semibold text-lg leading-tight">
              PREVIOUSLY <br /> WORKED ON
            </h1>
          </div>
          <div className="absolute left-1/4 top-0 w-3/4 h-full">
            <FallingBricks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
