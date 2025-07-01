import React from "react";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative px-2 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        {/* Soft dark gradient overlay to improve text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/0 to-white/10" />
      </div>

      {/* Foreground */}
      <div className="relative z-10 px-4 md:px-16 py-10 md:py-28">
        <div className="w-full text-start flex flex-col justify-start gap-4 pb-8">
          <h1 className="text-black text-4xl md:text-7xl font-semibold leading-normal">
            Trusted&nbsp;
            <span className="bg-black text-white px-2 py-1.5 rounded-md">
              Partner
            </span>
            &nbsp;for <br className="hidden md:block" /> Your Website&nbsp;
            <span className="bg-black text-white px-2 py-1.5 rounded-md">
              Develop.
            </span>
            &nbsp;
          </h1>

          <div className="mt-8 flex flex-col md:flex-row md:items-center gap-8">
            <div className="md:w-[25%] relative">
              {/* Desktop: Vertical socials */}
              <div className="hidden md:flex absolute -top-4 bottom-1 flex-col gap-4 -rotate-90">
                <h1 className="text-base text-gray-500">@williamrey</h1>
                <div className="flex items-center gap-2">
                  <div className="h-px w-8 bg-gray-600" />
                  <div className="flex gap-4 text-xl">
                    <FaFacebook className="hover:text-blue-500 cursor-pointer" />
                    <FaInstagram className="hover:text-pink-500 cursor-pointer" />
                    <FaTwitter className="hover:text-blue-400 cursor-pointer" />
                  </div>
                </div>
              </div>

              {/* Mobile: Horizontal socials */}
              <div className="flex md:hidden flex-col gap-2">
                <h1 className="text-base text-gray-500">@williamrey</h1>
                <div className="flex items-center gap-4 text-xl">
                  <FaFacebook className="hover:text-blue-500 cursor-pointer" />
                  <FaInstagram className="hover:text-pink-500 cursor-pointer" />
                  <FaTwitter className="hover:text-blue-400 cursor-pointer" />
                </div>
              </div>
            </div>

            <div>
              <p className="text-base md:text-lg text-black">
                Building the world’s best marketing websites for over a decade.{" "}
                <br className="hidden md:block" />
                Your trusted partner for strategy, design, and dev.
              </p>

              <div className="w-full flex justify-center md:justify-start">
                <button className="mt-6 py-1.5 flex border items-center rounded-full">
                  <FaPhoneAlt className="w-6 h-6 md:w-8 md:h-8 border border-black p-1 rounded-full" />
                  <p className="px-3 text-sm md:text-base">Schedule a Call</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
