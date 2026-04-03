"use client";

import clsx from "clsx";
import { useParams } from "next/navigation";
import { useTransition, useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "../../navigation";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  defaultValue: string;
  label: string;
  items: { value: string; label: string }[];
};

export default function LocaleSwitcherSelect({
  defaultValue,
  label,
  items,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const [locale, setLocale] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale");
    if (savedLocale) {
      setLocale(savedLocale);
    } else {
      const userLanguage = navigator.language.split("-")[0] || "id";
      setLocale(userLanguage);
      localStorage.setItem("locale", userLanguage);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function onSelectChange(nextLocale: string) {
    if (nextLocale === locale) {
      setIsOpen(false);
      return;
    }
    localStorage.setItem("locale", nextLocale);
    setLocale(nextLocale);
    setIsOpen(false);
    startTransition(() => {
      router.replace(
        // @ts-expect-error
        { pathname, params },
        { locale: nextLocale },
      );
    });
  }

  const currentLabel =
    items.find((item) => item.value === locale)?.label || locale;

  return (
    <div
      className={clsx(
        "relative inline-block text-left",
        isPending && "opacity-30 pointer-events-none",
      )}
      ref={dropdownRef}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className="flex items-center gap-2 bg-transparent text-[var(--brass)] caslon italic text-sm tracking-widest uppercase py-2 px-4 hover:border-[var(--brass)]/40 transition-colors outline-none"
        aria-expanded={isOpen}
        aria-label={label}
      >
        <span>{currentLabel}</span>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[var(--brass)]/50 transition-colors"
        >
          <path d="m6 9 6 6 6-6" />
        </motion.svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 min-w-full w-max origin-top-right bg-[#151515] text-[var(--brass)] shadow-[0_10px_40px_rgba(0,0,0,0.6)] backdrop-blur-md z-50 overflow-hidden"
          >
            {/* Paper Texture Overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/old-map.png')]" />

            <ul className="relative z-10 py-1">
              {items.map((item) => (
                <li key={item.value}>
                  <button
                    onClick={() => onSelectChange(item.value)}
                    className={clsx(
                      "w-full text-left px-4 py-2 text-sm caslon italic tracking-widest uppercase transition-colors hover:bg-[var(--brass)]/10 text-[var(--brass)]",
                      locale === item.value && "bg-[var(--brass)]/5",
                    )}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
