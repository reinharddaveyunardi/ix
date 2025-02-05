"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["-100%", "450%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <motion.h1
        style={{ y: textY }}
        className="font-bold text-white text-7xl md:text-9xl relative z-10"
      >
        <p className="drop-shadow-2xl">IXC</p>
      </motion.h1>

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/dumps/ixc/horizontal.JPG)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      {/* <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `url(/dumps/ixc/h-r.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      /> */}
    </div>
  );
}
