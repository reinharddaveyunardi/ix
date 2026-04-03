"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type QuoteProps = {
  children: ReactNode;
  align?: "left" | "right" | "center";
};

export default function FadeInQuote({
  children,
  align = "center",
}: QuoteProps) {
  const alignmentClasses = {
    left: "md:ml-24 md:mr-auto text-left",
    right: "md:mr-24 md:ml-auto text-right",
    center: "mx-auto text-center",
  };

  const initialX = align === "left" ? -20 : align === "right" ? 20 : 0;
  const initialY = align === "center" ? 20 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX, y: initialY }}
      whileInView={{ opacity: 0.6, x: 0, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className={`max-w-xl md:max-w-2xl px-6 py-12 ${alignmentClasses[align]}`}
    >
      <p className="nothing-you-could-do-regular text-xl md:text-2xl text-[var(--brass)] italic leading-relaxed">
        {children}
      </p>
    </motion.div>
  );
}
