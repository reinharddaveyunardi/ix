"use client";
import "../../../styles/globals.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Props = {
  logo: string;
  title: string;
  homeroom: string;
  hof: string;
  vice: string;
};

export default function HouseCard({ logo, title, homeroom, hof, vice }: Props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [logo, title, homeroom, hof, vice]);

  const skeletonVariants = {
    initial: { opacity: 0.3 },
    animate: {
      opacity: 0.6,
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative rounded-sm w-full max-w-md mx-auto h-full bg-[var(--surface)] border-2 border-[var(--brass)]/20 p-8 text-[var(--parchment)] transition-all duration-700 hover:border-[var(--brass)]/60 hover:shadow-[0_0_50px_rgba(197,160,89,0.1)] shadow-2xl relative overflow-hidden"
    >
      {/* Ornate Corner Accents */}
      <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-[var(--brass)]/30 opacity-50" />
      <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-[var(--brass)]/30 opacity-50" />
      <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-[var(--brass)]/30 opacity-50" />
      <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-[var(--brass)]/30 opacity-50" />

      <div className="flex flex-col justify-center items-center mb-8 overflow-hidden rounded-sm border border-[var(--brass)]/10 bg-black/20 relative">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="skeleton"
              variants={skeletonVariants}
              initial="initial"
              animate="animate"
              className="w-full aspect-[4/3] bg-[var(--surface-light)]"
            />
          ) : (
            <motion.div
              key="image"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="w-full h-auto relative"
            >
              <Image
                src={logo}
                width={600}
                height={600}
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-100 group-hover:scale-105"
                alt={title}
              />
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.3)] pointer-events-none" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center mb-8 relative">
        <div className="absolute left-0 right-0 h-px bg-[var(--brass)]/20" />
        <h2 className="relative bg-[var(--surface)] px-6 text-center text-3xl font-bold caslon italic tracking-tighter brass-text">
          {title}
        </h2>
      </div>

      <div className="space-y-4 text-center caslon italic text-xl text-[var(--text-secondary)] group-hover:text-[var(--parchment)] transition-colors duration-500">
        {loading ? (
          <div className="space-y-3">
            <motion.div
              variants={skeletonVariants}
              initial="initial"
              animate="animate"
              className="h-4 bg-[var(--surface-light)] w-3/4 mx-auto rounded-full"
            />
            <motion.div
              variants={skeletonVariants}
              initial="initial"
              animate="animate"
              className="h-4 bg-[var(--surface-light)] w-1/2 mx-auto rounded-full"
            />
          </div>
        ) : (
          <>
            <p className="border-b border-[var(--brass)]/10 pb-3 hover:text-[var(--brass)] transition-colors cursor-default">
              {homeroom}
            </p>
            <p className="border-b border-[var(--brass)]/10 pb-3 hover:text-[var(--brass)] transition-colors cursor-default">
              {hof}
            </p>
            <p className="hover:text-[var(--brass)] transition-colors cursor-default">
              {vice}
            </p>
          </>
        )}
      </div>

      {/* Decorative center diamond */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[var(--surface)] border border-[var(--brass)]/30 rotate-45" />
    </motion.div>
  );
}
