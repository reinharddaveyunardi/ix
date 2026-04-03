"use client";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { motion, AnimatePresence } from "framer-motion";
import PopupContent from "./PopupContent";

type Props = {
  welcome: string;
  content: string;
};

export default function PopupModal({ welcome, content }: Props) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const popupShown = localStorage.getItem("popupShown");
    if (!popupShown) {
      const timer = setTimeout(() => setIsPopupOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleClose() {
    localStorage.setItem("popupShown", "true");
    setIsPopupOpen(false);
  }

  return (
    <Modal
      closeTimeoutMS={300}
      isOpen={isPopupOpen}
      onRequestClose={handleClose}
      className="fixed inset-0 flex items-center justify-center p-4 z-[1000] focus:outline-none"
      overlayClassName="fixed inset-0 bg-black/80 backdrop-blur-md z-[1000]"
      ariaHideApp={false}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -1 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        exit={{ opacity: 0, scale: 0.9, rotate: 1 }}
        className="relative w-full max-w-lg bg-[#fdfaf1] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-x-[16px] border-[#3a2f24]"
      >
        {/* Decorative corner accent */}
        <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#3a2f24]/10" />
        <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#3a2f24]/10" />

        <div className="relative z-10">
          <div className="mb-8">
            <PopupContent welcome={welcome} content={content} />
          </div>
          
          <div className="flex flex-col items-center gap-6 mt-8">
            <button
              onClick={handleClose}
              className="px-10 py-3 bg-[#3a2f24] text-[#d4c3a1] font-bold caslon italic tracking-wider transition-all hover:bg-[#2a2419] active:scale-95 shadow-lg"
            >
              Enter Archives
            </button>
            <span className="text-[10px] uppercase tracking-widest text-[#3a2f24]/40 font-sans">
              Class of 2024 • IX Digital Ledger
            </span>
          </div>
        </div>

        {/* Mascot / Decoration */}
        <div className="absolute -top-16 -right-12 hidden md:block">
          <motion.img 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="w-32 drop-shadow-2xl grayscale brightness-110" 
            src="/cat.webp" 
            alt="Welcome" 
          />
        </div>
      </motion.div>
    </Modal>
  );
}
