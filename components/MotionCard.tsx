"use client";

import dynamic from "next/dynamic";

const MotionDiv = dynamic(
  async () => {
    const { motion } = await import("framer-motion");
    return motion.div;
  },
  { ssr: false }
);

export default MotionDiv;
