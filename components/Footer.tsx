import React from "react";

const Footer = () => {
  return (
    <div className="px-2">
      <footer className="w-full h-auto px-10 py-8 bg-black rounded-3xl">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-4">
          {/* Logo Container - top-left */}
          <div className="w-full lg:w-2/5">
            <h2 className="lg:pt-3 text-lime-400 text-2xl font-bold tracking-wider mb-4 lg:mb-8">
              DEVLOP.ME
            </h2>
          </div>

          {/* Menu Container - top-right */}
          <div className="w-full lg:w-3/5 flex flex-col gap-8">
            <h1 className="mb-3 lg:mb-10 text-4xl md:text-5xl lg:text-5xl font-semibold text-white leading-tight">
              As you can
            </h1>

            <div className="flex flex-wrap gap-24">
              <div className="space-y-8">
                <div>
                  <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-4">
                    Say hello
                  </h3>
                  <div className="space-y-2">
                    <p className="text-white text-sm">HELLO@DEVLOP.ME.COM</p>
                    <p className="text-white text-sm">MAHBUBUL@ME.COM</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-4">
                    Call
                  </h3>
                  <div className="space-y-1">
                    <p className="text-[#E4E4E4] text-sm">+784549 4981 00</p>
                    <p className="text-[#E4E4E4] text-sm">+8845 0100 911</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-4">
                  Menu
                </h3>
                <nav className="space-y-2">
                  {["HOME", "ABOUT", "PORTFOLIO", "BLOG"].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block text-[#E4E4E4] text-sm hover:text-lime-400 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  ))}
                </nav>
              </div>

              <div>
                <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-4">
                  Social
                </h3>
                <nav className="space-y-2">
                  {[
                    "TWITTER",
                    "INSTAGRAM",
                    "FACEBOOK",
                    "BEHANCE",
                    "DRIBBBLE",
                  ].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block text-[#E4E4E4] text-sm hover:text-lime-400 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center pt-14">
          <div className="mb-4 md:mb-0 w-full sm:w-2/5">
            <h3 className="text-white text-lg font-bold tracking-wider">
              BESNIK
            </h3>
          </div>
          <div className="sm:w-3/5 flex justify-between items-center flex-col sm:flex-row">
            <div className="mb-2 md:mb-0">
              <p className="text-gray-500 text-sm pl-0 w-xl:pl-2">
                © devlop.me 2022
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <a
                href="#"
                className="text-gray-500 text-sm hover:text-white transition-colors duration-200"
              >
                PRIVACY
              </a>
              <span className="text-gray-500 text-sm">-</span>
              <a
                href="#"
                className="text-gray-500 text-sm hover:text-white transition-colors duration-200"
              >
                TERMS
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
