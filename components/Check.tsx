import React from "react";

const Check = () => {
  return (
    <div className="min-h-screen relative bg-white overflow-hidden">
      {/* Blurry Triangle Cloud */}
      <div className="absolute top-0 left-0 w-full h-[480px] z-0 pointer-events-none">
        <div
          className="w-[150%] h-full blur-[100px] opacity-50"
          style={{
            background: "linear-gradient(135deg, #CCFF02, #59FFCD)",
            clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
            transform: "translateX(-25%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-screen">
        <h1 className="text-7xl font-bold text-gray-800">
          Hello Jobair Al Sarkar!
        </h1>
      </div>
    </div>
  );
};

export default Check;
