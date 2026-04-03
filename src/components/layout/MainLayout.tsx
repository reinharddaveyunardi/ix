"use client";
import { ReactNode, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../styles/globals.css";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { IxLogo } from "../ui/Logo";

const PopupModal = dynamic(() => import("../ui/PopupModal"));

type Props = {
  children: ReactNode;
  title: string;
  welcome: string;
  content: string;
};

export default function MainLayout({
  children,
  title,
  welcome,
  content,
}: Props) {
  const t = useTranslations("MainLayout");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Failsafe in case the image loads instantaneously from cache or fails
    const fallbackTimer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(fallbackTimer);
  }, []);

  return (
    <>
      {/* Preloader Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--background)] pointer-events-auto"
          >
            <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/old-map.png')]" />
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-[var(--brass)] caslon italic text-xl md:text-3xl tracking-[0.3em] flex flex-col items-center w-full"
            >
              <IxLogo className="w-16 h-16 md:w-24 md:h-24 mb-8 mx-auto" />
              <span className="uppercase text-sm tracking-[0.5em] opacity-80">
                Loading Archive
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative min-h-screen w-full bg-[var(--background)] overflow-hidden">
        {/* Hero Background with Texture Overlay */}
        <div className="absolute inset-0 z-0 bg-[#0d0d0d]">
          <Image
            src="/ix.JPG"
            alt="Main Background"
            fill
            priority
            sizes="100vw"
            className="object-cover grayscale contrast-125 brightness-50"
            onLoad={() => setIsLoading(false)}
          />
          <div className="absolute inset-0 bg-black/20 z-10" />
          {/* Subtle Paper Texture Overlay */}
          <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/old-map.png')] z-20" />
        </div>

        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <span className="block text-[var(--brass)] caslon italic text-sm tracking-[0.4em] uppercase mb-6 opacity-60">
              {t("established")}
            </span>
            <h1 className="text-4xl md:text-8xl py-2 text-[var(--parchment)] nothing-you-could-do-regular italic leading-[0.9] tracking-tighter brass-text">
              {title}
            </h1>
            <div>
              <span className="nothing-you-could-do-regular text-[var(--parchment)] text-2xl">
                In Case You Miss It
              </span>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-[var(--brass)] to-transparent mx-auto opacity-30" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div className="text-xl md:text-3xl text-[var(--text-secondary)] caslon italic font-light leading-relaxed serif underline-offset-8 decoration-[var(--brass)]/20 decoration-1">
              {children}
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-16 -translate-x-1/2 flex flex-col items-center gap-4"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--brass)] font-medium">
              {t("discover")}
            </span>
            <div className="w-px h-16 bg-gradient-to-b from-[var(--brass)] to-transparent opacity-40" />
          </motion.div>
        </div>

        <PopupModal welcome={welcome} content={content} />
      </div>
    </>
  );
}
