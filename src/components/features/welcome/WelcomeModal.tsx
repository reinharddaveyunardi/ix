"use client";
import Modal from "react-modal";
import React, { useState, useEffect } from "react";
import { IoIosMail, IoIosMailOpen } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import WelcomeBody from "./WelcomeBody";

type Props = {
  dear: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  p5: string;
};

export default function WelcomeModal({ dear, p1, p2, p3, p4, p5 }: Props) {
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [isMailOpen, setIsMailOpen] = useState(false);

  useEffect(() => {
    const mailOpened = localStorage.getItem("isMailOpen");
    if (mailOpened) {
      setIsMailOpen(true);
    }
  }, []);

  function handleOpen() {
    setIsLetterOpen(true);
    setIsMailOpen(true);
    localStorage.setItem("isMailOpen", "true");
  }

  return (
    <>
      <div className="fixed bottom-8 right-8 z-[99]">
        <motion.button
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleOpen}
          className="relative w-16 h-16 flex items-center justify-center rounded-none bg-[var(--surface)] text-[var(--brass)] shadow-[0_10px_40px_rgba(0,0,0,0.6)] overflow-hidden group"
        >
          {/* Paper Texture Overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/old-map.png')]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />

          <AnimatePresence mode="wait">
            {isMailOpen ? (
              <motion.div
                key="open"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <IoIosMailOpen className="text-3xl" />
              </motion.div>
            ) : (
              <motion.div
                key="closed"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <IoIosMail className="text-3xl" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-900 rounded-full border border-[var(--brass)]/30 shadow-lg animate-pulse" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <Modal
        closeTimeoutMS={500}
        isOpen={isLetterOpen}
        onRequestClose={() => setIsLetterOpen(false)}
        className="fixed inset-0 flex items-center justify-center p-4 z-[1000] focus:outline-none"
        overlayClassName="fixed inset-0 bg-[var(--background)]/90 backdrop-blur-md z-[1000]"
        ariaHideApp={false}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30, rotate: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-transparent"
        >
          <div className="relative z-10">
            <WelcomeBody dear={dear} p1={p1} p2={p2} p3={p3} p4={p4} p5={p5} />
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2">
              <button
                onClick={() => setIsLetterOpen(false)}
                className="group relative px-12 py-3 bg-[var(--parchment)] text-[var(--walnut)] font-bold caslon italic shadow-2xl transition-all duration-500 hover:scale-105 active:scale-95"
              >
                <span className="absolute inset-0 border border-[var(--walnut)]/10 m-1" />
                <span className="relative z-10 text-lg">Close Archives</span>
              </button>
            </div>
          </div>
        </motion.div>
      </Modal>
    </>
  );
}
