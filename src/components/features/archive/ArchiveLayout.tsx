"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ix } from "data/ix";
import { TbMathFunction } from "react-icons/tb";
import { MdScience } from "react-icons/md";
import { FaPaintBrush, FaRunning, FaInfo } from "react-icons/fa";
import { IoIosMusicalNotes } from "react-icons/io";
import { FaBookOpen, FaQuoteLeft } from "react-icons/fa6";
import { ImQuill } from "react-icons/im";
import { IoCodeSlashOutline } from "react-icons/io5";
import { GiTeacher } from "react-icons/gi";
import { Student } from "types";

const filters = [
  "Math",
  "Science",
  "IT",
  "Arts",
  "Sports",
  "Music",
  "History",
  "Sastra",
  "IXA",
  "IXB",
  "IXC",
];

const getSubjectIcon = (subject: string) => {
  switch (subject) {
    case "Math":
      return <TbMathFunction />;
    case "Science":
      return <MdScience />;
    case "IT":
      return <IoCodeSlashOutline />;
    case "Arts":
      return <FaPaintBrush />;
    case "Sports":
      return <FaRunning />;
    case "Music":
      return <IoIosMusicalNotes />;
    case "History":
      return <FaBookOpen />;
    case "Sastra":
      return <ImQuill />;
    case "Homeroom":
      return <GiTeacher />;
    default:
      return <FaInfo />;
  }
};

interface ArchiveLayoutProps {
  defaultFilter?: string;
}

export default function ArchiveLayout({ defaultFilter }: ArchiveLayoutProps) {
  const t = useTranslations("Gallery");
  const [selectedFilters, setSelectedFilters] = useState<string[]>(
    defaultFilter ? [defaultFilter] : [],
  );
  const [filteredStudents, setFilteredStudents] = useState<Student[]>(
    ix as Student[],
  );
  const [loading, setLoading] = useState(true);

  const handleFilterButtonClick = (filter: string) => {
    setSelectedFilters((prev: string[]) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter],
    );
  };

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      if (selectedFilters.length > 0) {
        setFilteredStudents(
          (ix as Student[]).filter(
            (s) =>
              selectedFilters.includes(s.subject) ||
              selectedFilters.includes(s.student_class),
          ),
        );
      } else {
        setFilteredStudents(ix as Student[]);
      }
      setLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [selectedFilters]);

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
    <section className="min-h-screen bg-[var(--background)] py-32 px-6 sm:px-12 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--brass)]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--walnut)]/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-[var(--brass)] caslon italic text-sm tracking-[0.4em] uppercase opacity-60">
              {t("title")}
            </span>
          </motion.div>
          <h2 className="text-5xl py-2 md:text-7xl text-[var(--parchment)] mb-12 caslon italic brass-text leading-tight">
            {t("description")}
          </h2>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterButtonClick(filter)}
                className={`group relative px-8 py-3 transition-all duration-500 caslon italic text-lg
                  ${
                    selectedFilters.includes(filter)
                      ? "text-[var(--walnut)] shadow-2xl"
                      : "text-[var(--text-secondary)] hover:text-[var(--parchment)]"
                  }`}
              >
                {/* Vintage Label Effect */}
                <span
                  className={`absolute inset-0 transition-transform duration-500 
                  ${selectedFilters.includes(filter) ? "bg-[var(--parchment)] scale-100 rotate-1 shadow-lg" : "bg-[var(--parchment)]/5 scale-90 rotate-0 opacity-0 group-hover:opacity-100 group-hover:scale-95"}`}
                />
                <span className="relative z-10">{filter}</span>
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-16">
          <AnimatePresence mode="popLayout">
            {loading
              ? Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={`skeleton-${i}`}
                    variants={skeletonVariants}
                    initial="initial"
                    animate="animate"
                    className="bg-[var(--surface)] aspect-[3/4] rounded-sm p-4 border border-[var(--brass)]/10"
                  >
                    <div className="w-full h-2/3 bg-[var(--surface-light)] mb-4" />
                    <div className="w-2/3 h-4 bg-[var(--surface-light)] mb-2" />
                    <div className="w-full h-8 bg-[var(--surface-light)] opacity-50" />
                  </motion.div>
                ))
              : filteredStudents.map((student: Student, idx: number) => (
                  <motion.div
                    key={student.student_id + "-" + student.name}
                    layout
                    initial={{
                      opacity: 0,
                      y: 30,
                      rotate: idx % 2 === 0 ? -1 : 1,
                    }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      transition: { duration: 0.2 },
                    }}
                    transition={{
                      duration: 0.7,
                      delay: (idx % 8) * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group"
                  >
                    {/* Polaroid Yearbook Card */}
                    <div className="paper-card p-4 pb-14 transition-all duration-500 group-hover:-translate-y-4 group-hover:rotate-0 relative">
                      {/* Taped Effect */}
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-10 bg-[var(--parchment)]/40 backdrop-blur-[2px] -rotate-2 z-20 border border-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-sm" />

                      {/* Image Container */}
                      <div className="relative aspect-[4/5] overflow-hidden bg-[#e5e1d8] mb-6 shadow-inner ring-1 ring-black/5">
                        <Image
                          src={student.img}
                          alt={student.name}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out scale-105 group-hover:scale-100"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                        {/* Vignette effect */}
                        <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.1)] pointer-events-none" />

                        {/* Subject Badge */}
                        <div className="absolute top-3 right-3 p-2 bg-[var(--walnut)] text-[var(--parchment)] rounded-full text-sm shadow-xl border border-[var(--brass)]/20 z-10 scale-90 group-hover:scale-100 transition-transform duration-500">
                          {getSubjectIcon(student.subject)}
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="text-center px-2">
                        <h3 className="text-xl font-bold text-[var(--walnut)] caslon mb-3 leading-tight tracking-tight px-1 italic">
                          {student.name}
                        </h3>
                        <div className="relative pt-2">
                          <FaQuoteLeft className="absolute -top-1 left-0 text-[var(--walnut)]/20 text-xs" />
                          <p className="text-[13px] text-[var(--walnut)]/70 italic leading-relaxed line-clamp-3 pl-4 serif font-medium border-l border-[var(--walnut)]/10">
                            {student.quotes}
                          </p>
                        </div>
                      </div>

                      {/* Class Tag - Handwritten style */}
                      <div className="absolute bottom-4 right-6 opacity-30 caslon text-xs font-bold text-[var(--walnut)] uppercase tracking-widest italic scale-90">
                        Ent. {student.student_class}
                      </div>
                    </div>
                  </motion.div>
                ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
