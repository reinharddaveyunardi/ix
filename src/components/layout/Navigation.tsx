"use client";

import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IxLogo } from "../ui/Logo";
import "../../styles/globals.css";

export default function Navigation() {
  const t = useTranslations("Navigation");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Scroll Spy logic using robust IntersectionObserver API
  useEffect(() => {
    const sections = ["preface", "teachers", "houses", "superlatives", "archive"];

    // Observer checks if any section crosses the middle of the screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-20% 0px -40% 0px", // triggers when element is roughly in middle of viewport
        threshold: 0,
      },
    );

    // Observe all sections
    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) observer.observe(el);
    });

    // Also force active state on manual link click
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (sections.includes(hash)) {
        setActiveSection(hash);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    // Check initial hash
    if (window.location.hash) handleHashChange();

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const getLinkClasses = (section: string) => {
    const isActive = activeSection === section;
    return {
      tl: `absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[var(--brass)]/80 transition-all duration-300 ${isActive ? "opacity-100 -translate-x-1 -translate-y-1" : "opacity-0 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"}`,
      tr: `absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-[var(--brass)]/80 transition-all duration-300 ${isActive ? "opacity-100 translate-x-1 -translate-y-1" : "opacity-0 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"}`,
      bl: `absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-[var(--brass)]/80 transition-all duration-300 ${isActive ? "opacity-100 -translate-x-1 translate-y-1" : "opacity-0 group-hover:-translate-x-1 group-hover:translate-y-1 group-hover:opacity-100"}`,
      br: `absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[var(--brass)]/80 transition-all duration-300 ${isActive ? "opacity-100 translate-x-1 translate-y-1" : "opacity-0 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:opacity-100"}`,
      text: `caslon italic text-xl md:tracking-widest transition-transform duration-300 ${isActive ? "text-[var(--parchment)] scale-105" : "text-[var(--brass)] group-hover:text-[var(--parchment)]"}`,
    };
  };

  const getMobileLinkClasses = (section: string) => {
    const isActive = activeSection === section;
    return `caslon italic text-2xl tracking-widest transition-transform duration-300 ${isActive ? "text-[var(--brass)] translate-x-2" : "text-[var(--parchment)] group-hover:translate-x-2 group-hover:text-[var(--brass)]"}`;
  };

  // Close mobile menu if window resizes to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Removed manual scroll locking to prevent the iOS teleportation bug.

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#151515]/95 backdrop-blur-md border-b border-[var(--brass)]/20 px-4 py-3 sm:px-12 md:py-6 transition-all duration-500 font-serif">
      {/* Top thin line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-[var(--brass)]/30" />

      <div className="max-w-7xl mx-auto flex justify-between items-center md:h-12">
        {/* Left Decorative Section */}
        <div className="flex flex-row items-center text-[var(--brass)]/80 gap-3">
          <a href="#preface" className="group flex items-center">
            <IxLogo className="w-8 h-8 md:w-10 md:h-10 text-[var(--brass)] group-hover:scale-110 group-hover:text-[var(--parchment)] transition-all duration-500" />
          </a>
          <div className="h-px w-4 md:w-12 bg-gradient-to-r from-[var(--brass)]/40 to-transparent" />
        </div>

        {/* Center: Desktop Table of Contents Links */}
        <div className="hidden md:flex flex-row items-center gap-8 lg:gap-12 justify-center">
          <a
            href="#preface"
            className="group relative flex items-center justify-center p-2 transition-all duration-300"
          >
            {/* Corner Markers */}
            <div className={getLinkClasses("preface").tl} />
            <div className={getLinkClasses("preface").tr} />
            <div className={getLinkClasses("preface").bl} />
            <div className={getLinkClasses("preface").br} />
            <span className={getLinkClasses("preface").text}>
              {t("preface")}
            </span>
          </a>

          <span className="text-[var(--brass)]/30 text-xs">♦</span>

          <a
            href="#teachers"
            className="group relative flex items-center justify-center p-2 transition-all duration-300"
          >
            {/* Corner Markers */}
            <div className={getLinkClasses("teachers").tl} />
            <div className={getLinkClasses("teachers").tr} />
            <div className={getLinkClasses("teachers").bl} />
            <div className={getLinkClasses("teachers").br} />
            <span className={getLinkClasses("teachers").text}>
              {t("teachers")}
            </span>
          </a>

          <span className="text-[var(--brass)]/30 text-xs">♦</span>

          <a
            href="#houses"
            className="group relative flex items-center justify-center p-2 transition-all duration-300"
          >
            {/* Corner Markers */}
            <div className={getLinkClasses("houses").tl} />
            <div className={getLinkClasses("houses").tr} />
            <div className={getLinkClasses("houses").bl} />
            <div className={getLinkClasses("houses").br} />
            <span className={getLinkClasses("houses").text}>{t("houses")}</span>
          </a>

          <span className="text-[var(--brass)]/30 text-xs">♦</span>

          <a
            href="#superlatives"
            className="group relative flex items-center justify-center p-2 transition-all duration-300"
          >
            {/* Corner Markers */}
            <div className={getLinkClasses("superlatives").tl} />
            <div className={getLinkClasses("superlatives").tr} />
            <div className={getLinkClasses("superlatives").bl} />
            <div className={getLinkClasses("superlatives").br} />
            <span className={getLinkClasses("superlatives").text}>
              {t("superlatives")}
            </span>
          </a>

          <span className="text-[var(--brass)]/30 text-xs">♦</span>

          <a
            href="#archive"
            className="group relative flex items-center justify-center p-2 transition-all duration-300"
          >
            {/* Corner Markers */}
            <div className={getLinkClasses("archive").tl} />
            <div className={getLinkClasses("archive").tr} />
            <div className={getLinkClasses("archive").bl} />
            <div className={getLinkClasses("archive").br} />
            <span className={getLinkClasses("archive").text}>
              {t("archive")}
            </span>
          </a>
        </div>

        {/* Right Section: Locale switcher & Desktop Book Index */}
        <div className="flex items-center gap-4 md:gap-6">
          <div className="z-50 relative">
            <LocaleSwitcher />
          </div>

          <div className="hidden lg:flex items-center text-[var(--brass)]/50 gap-3 ml-2">
            <div className="h-px w-12 bg-[var(--brass)]/30" />
            <div className="text-[10px] uppercase tracking-[0.5em] font-bold caslon italic">
              YEARBOOK
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            title="Menu"
            name="Menu"
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-50 text-[var(--brass)] focus:outline-none"
          >
            <span
              className={`bg-current h-px w-6 transition-all duration-300 ease-out ${
                isMobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
              }`}
            />
            <span
              className={`bg-current h-px w-6 transition-all duration-300 ease-out my-1 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`bg-current h-px w-6 transition-all duration-300 ease-out ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 h-[100dvh] w-full bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={closeMenu}
          >
            {/* The Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-[100dvh] w-[75vw] max-w-[320px] bg-[var(--background)] shadow-2xl border-l border-[var(--brass)]/20 p-8 pt-24"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/old-map.png')]" />

              <div className="relative z-10 flex flex-col gap-8">
                <a
                  href="#preface"
                  onClick={closeMenu}
                  className="group relative flex items-center"
                >
                  <span className={getMobileLinkClasses("preface")}>
                    {t("preface")}
                  </span>
                </a>

                <div className="h-px w-12 bg-[var(--brass)]/20" />

                <a
                  href="#teachers"
                  onClick={closeMenu}
                  className="group relative flex items-center"
                >
                  <span className={getMobileLinkClasses("teachers")}>
                    {t("teachers")}
                  </span>
                </a>

                <div className="h-px w-12 bg-[var(--brass)]/20" />

                <a
                  href="#houses"
                  onClick={closeMenu}
                  className="group relative flex items-center"
                >
                  <span className={getMobileLinkClasses("houses")}>
                    {t("houses")}
                  </span>
                </a>

                <div className="h-px w-12 bg-[var(--brass)]/20" />

                <a
                  href="#superlatives"
                  onClick={closeMenu}
                  className="group relative flex items-center"
                >
                  <span className={getMobileLinkClasses("superlatives")}>
                    {t("superlatives")}
                  </span>
                </a>

                <div className="h-px w-12 bg-[var(--brass)]/20" />

                <a
                  href="#archive"
                  onClick={closeMenu}
                  className="group relative flex items-center"
                >
                  <span className={getMobileLinkClasses("archive")}>
                    {t("archive")}
                  </span>
                </a>

                <div className="mt-8 text-[12px] uppercase text-[var(--brass)]/60 tracking-[0.4em] font-bold caslon italic">
                  YEARBOOK
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom border texture */}
      <div className="absolute bottom-0 left-0 w-full h-[6px] bg-[url('https://www.transparenttextures.com/patterns/old-map.png')] opacity-10 pointer-events-none" />
    </nav>
  );
}
