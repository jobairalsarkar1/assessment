"use client";

import React, { useEffect, useState } from "react";

interface Brick {
  id: number;
  label: string;
  left: string;
  rotate: number;
}

const brickLabels = [
  "awwwards.",
  "CSS WINNER",
  "facebook",
  "/thoughtworks",
  "AUTODESK",
  "CSSDesignAwards",
];

const MAX_BRICKS = 10;

const FallingBricks: React.FC = () => {
  const [bricks, setBricks] = useState<Brick[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newBrick: Brick = {
        id: Date.now(),
        label: brickLabels[Math.floor(Math.random() * brickLabels.length)],
        left: `${Math.random() * 75}%`,
        rotate: Math.floor(Math.random() * 30 - 15),
      };

      setBricks((prev) => [...prev, newBrick].slice(-MAX_BRICKS));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full">
      {bricks.map((brick) => (
        <span
          key={brick.id}
          className="absolute px-8 py-3.5 border-2 border-black bg-white rounded-full hover:bg-black hover:text-white animate-fall"
          style={{
            left: brick.left,
            transform: `rotate(${brick.rotate}deg)`,
            animationDuration: "0.2s",
          }}
        >
          {brick.label}
        </span>
      ))}
    </div>
  );
};

export default FallingBricks;
