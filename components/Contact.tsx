import React from "react";
import NavigationButton from "./NavigationButton";
import CustomText from "./CustomText";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { FiMail, FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="px-2">
      <div className="w-full h-auto flex items-center lg:items-start justify-center lg:justify-between flex-col lg:flex-row gap-8 px-4 md:px-10 py-8 bg-transparent rounded-3xl">
        <div>
          <div className="mb-5 md:mt-3 md:mr-auto z-10 flex items-center justify-center md:justify-start">
            <NavigationButton
              label="Contact"
              targetId="footer"
              borderColor="border-black"
              textColor="text-black"
            />
          </div>
          <div className="w-full flex flex-col justify-center lg:justify-start gap-4">
            <CustomText
              text="Interested in work &nbsp; together?"
              breakAfter={2}
              highlight="work"
              position="text-start"
            />
            <p className="text-lg">
              We start every new client interaction with an in-depth discovery{" "}
              <br />
              call where we get to know each other
            </p>
          </div>
          <div className="w-full flex justify-center md:justify-start">
            <button className="mt-6 py-1.5 flex border items-center rounded-full">
              <FaPhoneAlt className="w-8 h-8 border border-black py-1.5 rounded-full" />
              <p className="px-3">Schedule a Call</p>
            </button>
          </div>
        </div>

        <form className="px-8 py-7 sm:w-[420px] md:w-[520px] bg-black text-white rounded-3xl space-y-4">
          <div className="relative border-b-2 border-gray-500 focus-within:border-[#C5FF41]">
            <input
              type="text"
              id="name"
              required
              className="peer bg-transparent w-full pt-8 pb-1 focus:outline-none"
            />
            <label
              htmlFor="name"
              className="absolute left-0 top-1/2 text-gray-400 peer-focus:top-1 text-base peer-focus:text-base transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base"
            >
              Enter your name
            </label>
          </div>

          <div className="relative border-b-2 border-gray-500 focus-within:border-[#C5FF41]">
            <input
              type="email"
              id="email"
              required
              className="peer bg-transparent w-full pt-8 pb-1 focus:outline-none"
            />
            <label
              htmlFor="email"
              className="absolute left-0 top-1/2 text-gray-400 peer-focus:top-1 text-base peer-focus:text-base transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base"
            >
              Your email address
            </label>
          </div>

          <div className="relative border-b-2 border-gray-500 focus-within:border-[#C5FF41]">
            <input
              type="text"
              id="project"
              required
              className="peer bg-transparent w-full pt-8 pb-1 focus:outline-none"
            />
            <label
              htmlFor="project"
              className="absolute left-0 top-1/2 text-gray-400 peer-focus:top-1 text-base peer-focus:text-base transition-all"
            >
              Describe your project
            </label>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-start gap-4 mt-8">
            <button className="py-1.5 flex items-center border rounded-full">
              <FiSend className="w-8 h-8 border py-1.5 rounded-full" />
              <p className="px-3">Send</p>
            </button>

            <span className="text-center text-gray-500">or</span>

            <button className="py-1.5 flex items-center border rounded-full">
              <FiMail className="w-8 h-8 border py-1.5 rounded-full" />
              <p className="px-3">Contact me</p>
            </button>
          </div>

          <div className="mt-10 pt-4 flex items-center gap-4">
            <span className="text-base text-gray-500">@williamrey</span>

            <div className="h-px w-8 bg-gray-600" />

            <div className="flex gap-4 text-xl">
              <FaFacebook className="hover:text-blue-500 cursor-pointer" />
              <FaInstagram className="hover:text-pink-500 cursor-pointer" />
              <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
