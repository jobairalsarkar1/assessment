"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "./Button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "#blog" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent backdrop-blur-md"
      } border-b border-white/10`}
    >
      <div className="mx-auto px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "#home")}
          className="text-black text-2xl md:text-3xl font-bold font-['Bw_Gradual_DEMO']"
        >
          DEVELOP.ME
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-black focus:outline-none z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <FaTimes className="w-6 h-6 transition-transform duration-300" />
          ) : (
            <FaBars className="w-6 h-6 transition-transform duration-300" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-14">
          <div className="flex items-center gap-6 font-['Sporting_Grotesque']">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-black text-lg hover:text-blue-500 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          <Button onClick={(e: any) => handleScroll(e, "#contact")} />
        </nav>
      </div>

      {/* Mobile Sidebar (built into Navbar) */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Sidebar Content */}
        <div className="absolute top-0 right-0 min-h-screen w-80 bg-white flex flex-col shadow-[4px_0_15px_-3px_rgba(0,0,0,0.1)]">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <a
              href="#home"
              onClick={(e) => {
                handleScroll(e, "#home");
                setIsOpen(false);
              }}
              className="text-black text-xl font-bold font-['Bw_Gradual_DEMO']"
            >
              DEVELOP.ME
            </a>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-black transition-colors"
            >
              <FaTimes className="w-5 h-5" />
              {""}
            </button>
          </div>

          <nav className="flex-1 flex flex-col p-6 gap-2 font-['Sporting_Grotesque']">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="px-4 py-3 text-lg text-gray-700 hover:text-blue-500 hover:bg-gray-50 rounded-lg transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="p-6 border-t border-gray-100">
            <Button
              text="Start Project"
              href="#contact"
              onClick={(e: any) => {
                handleScroll(e, "#contact");
                setIsOpen(false);
              }}
              className="w-full bg-black text-white hover:bg-gray-800"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
