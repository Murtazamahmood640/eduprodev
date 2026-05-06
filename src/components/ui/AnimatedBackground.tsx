"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-white">
      {/* Mesh Gradient Base */}
      <div className="absolute inset-0 opacity-30 mesh-bg" />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[50rem] h-[50rem] bg-edu-indigo-100/40 rounded-full blur-[140px]"
        animate={{
          x: [0, 150, 0],
          y: [0, 80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-[20%] right-[-15%] w-[45rem] h-[45rem] bg-edu-accent/10 rounded-full blur-[120px]"
        animate={{
          x: [0, -120, 0],
          y: [0, 150, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[-15%] left-[15%] w-[55rem] h-[55rem] bg-edu-gold/5 rounded-full blur-[160px]"
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -100, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle Noise Texture for Premium Feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
