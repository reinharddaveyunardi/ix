"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const TEACHER_GROUPS = [
  {
    id: 1,
    img: "/gallery/teacher1.JPG",
    people: [
      {
        id: 101,
        name: "Ms. Maria",
        quote: "Do whatever you want, as long it's positive",
        x: 25,
        y: 40,
      },
      {
        id: 102,
        name: "Ms. Tyas",
        quote: "Life science is an investment for the future",
        x: 50,
        y: 30,
      },
      {
        id: 103,
        name: "Ms. Brigitta",
        quote:
          "Everyone you meet is fighting a battle you know nothing about. Be kind. Always.",
        x: 75,
        y: 40,
      },
    ],
  },
  {
    id: 2,
    img: "/gallery/teacher2.JPG",
    people: [
      {
        id: 201,
        name: "Ms. Sumini",
        quote: "Sulit untuk mengalahkan orang yang tidak pernah menyerah",
        x: 30,
        y: 35,
      },
      {
        id: 202,
        name: "Ms. Mita",
        quote: "Urip iku urup",
        x: 50,
        y: 35,
      },
      {
        id: 203,
        name: "Ms. Candida",
        quote:
          "Melangkahlah ke depan dengan penuh kepastian untuk menggapai impian, berbekal pengetahuan dan keterampilan, serta berbalut dan kepribadian",
        x: 70,
        y: 35,
      },
    ],
  },
  {
    id: 3,
    img: "/gallery/teacher3.JPG",
    people: [
      {
        id: 301,
        name: "Ms. Fitri",
        quote: "Selamat untuk kelulusannya dan jangan lupa berbahagia ^_^",
        x: 20,
        y: 40,
      },
      {
        id: 302,
        name: "Ms. Jojo",
        quote: "Big dream, bright light, you're a shining STAR, take flight!",
        x: 50,
        y: 32,
      },
      {
        id: 303,
        name: "Mr. Silvester",
        quote:
          "Usaha terbaikmu akan memberikan hasil terbaik yang membuatmu bersukacita",
        x: 50,
        y: 55,
      },
      {
        id: 304,
        name: "Ms. Gita",
        quote:
          "Tidak ada kata gagal dalam hidup ini, kecuali saat kamu menyerah menghadapi cobaan",
        x: 75,
        y: 40,
      },
    ],
  },
  {
    id: 5,
    img: "/gallery/teacher5.JPG",
    people: [
      {
        id: 501,
        name: "Mr. Tri",
        quote: "Optimalkan potensimu tuk meraih impianmu",
        x: 25,
        y: 28,
      },
      {
        id: 502,
        name: "Ms. Ela",
        quote:
          "Kita tidak dapat mengubah masa lalu. Tetapi kita dapat merubah arah masa depan dengan cara memanfaatkan waktu sekarang",
        x: 50,
        y: 40,
      },
      {
        id: 503,
        name: "Ms. Rachma",
        quote:
          "Bersiaplah dalam kesunyian dan biarkan kesuksessanmu membawa kebisingan dunia",
        x: 70,
        y: 52,
      },
      {
        id: 504,
        name: "Ms. Maya",
        quote:
          "Whatever we may be walking into, God has already stepped into it and prepared a way for you",
        x: 82,
        y: 36,
      },
    ],
  },
  {
    id: 6,
    img: "/gallery/teacher6.JPG",
    people: [
      {
        id: 601,
        name: "Ms. Martha",
        quote:
          "Kerjakan yang terbaik, selebihnya biarkan Tuhan yang menyempurnakan",
        x: 15,
        y: 40,
      },
      {
        id: 602,
        name: "Ms. Gadis",
        quote:
          "Education is not the filling of a pot but the lighting of a fire. Be the light kiddos~",
        x: 50,
        y: 40,
      },
      {
        id: 603,
        name: "Ms. Catharina",
        quote:
          "Et ipsa science potestas est(The knowledge, itself, is the power)",
        x: 70,
        y: 55,
      },
      {
        id: 604,
        name: "Ms. Richa",
        quote:
          "Bermimpilah setinggi langit, jikalau pun engkau jatuh. Engkau akan jatuh di antara bintang-bintang. - Ir. Soekarno",
        x: 85,
        y: 42,
      },
    ],
  },
  {
    id: 7,
    img: "/gallery/teacher7.JPG",
    people: [
      {
        id: 701,
        name: "Ms. Chika",
        quote: "Let the little fairy in you fly and reach your dreams!",
        x: 20,
        y: 40,
      },
      {
        id: 702,
        name: "Ms. Yoan",
        quote:
          "Ketika kamu merasa lelah, ingatlah mengapa kamu memulai. Itulah yang akan membuatmu terus bergerak",
        x: 50,
        y: 40,
      },
      {
        id: 703,
        name: "Ms. Ira",
        quote: "Bawalah kejujuran kemanapun anda pergi",
        x: 75,
        y: 40,
      },
    ],
  },
];

const FACULTY_GROUP_IMG = "/gallery/teacher8.JPG";

export default function TeacherGallery() {
  const [hoveredPersonId, setHoveredPersonId] = useState<number | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-12 py-24 relative z-10 font-serif">
      <div className="text-center mb-16">
        <span className="text-[var(--brass)] caslon italic text-sm tracking-[0.4em] uppercase mb-4 block">
          Faculty & Mentors
        </span>
        <h2 className="text-4xl md:text-5xl text-[var(--parchment)] caslon italic tracking-tighter">
          The Guiding Light
        </h2>
        <div className="w-16 h-px mx-auto mt-6" />
      </div>

      {/* Featured Full-Width Faculty Photo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full aspect-video md:h-[500px] mb-12 relative overflow-hidden shadow-2xl group"
      >
        <Image
          src={FACULTY_GROUP_IMG}
          alt="Full Faculty"
          fill
          priority
          className="object-contain grayscale brightness-75 group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center pointer-events-none">
          <p className="text-[var(--brass)] caslon italic tracking-[0.5em] uppercase text-xs opacity-80">
            The Class IX Faculty
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
        {TEACHER_GROUPS.map((group, idx) => (
          <motion.div
            key={group.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            viewport={{ once: true, margin: "-10%" }}
            className={`group relative w-full aspect-[4/5] md:h-[600px] shadow-2xl transition-all duration-300 ${hoveredPersonId ? "z-40" : "z-20"}`}
          >
            {/* The Image Wrapper (constrained) */}
            <div className="absolute inset-0 overflow-hidden z-0">
              <Image
                src={group.img}
                alt={`Teachers Group ${group.id}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain grayscale brightness-75 group-hover:brightness-90 transition-all duration-1000 ease-in-out"
              />
            </div>

            {/* Individual Floating Boxes */}
            {group.people.map((person) => (
              <div
                key={person.id}
                style={{
                  left: `${person.x}%`,
                  top: `${person.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                className="absolute z-30"
                onMouseEnter={() => setHoveredPersonId(person.id)}
                onMouseLeave={() => setHoveredPersonId(null)}
              >
                {/* Visual Marker (Head/Body Target) */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-4 h-4 rounded-full border-2 border-[var(--brass)] backdrop-blur-sm cursor-help relative group/marker"
                >
                  {/* Pulsing effect */}
                  <div className="absolute inset-0 rounded-full border border-[var(--brass)] animate-ping opacity-40" />
                </motion.div>

                {/* The Floating Box */}
                <AnimatePresence>
                  {hoveredPersonId === person.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute left-1/2 -translate-x-1/2 mt-4 w-[20vw] min-w-[140px] md:w-64 p-4 bg-[#151515]/95 backdrop-blur-xl border border-[var(--brass)]/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-40 pointer-events-none origin-top"
                    >
                      {/* Corner Accents */}
                      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--brass)]/60" />
                      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[var(--brass)]/60" />
                      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[var(--brass)]/60" />
                      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--brass)]/60" />

                      <h3 className="text-[var(--parchment)] text-base md:text-lg nothing-you-could-do-regular italic mb-1 tracking-wide font-medium leading-tight">
                        {person.name}
                      </h3>
                      <p className="text-[var(--text-secondary)] text-[10px] md:text-xs nothing-you-could-do-regular italic opacity-80">
                        &ldquo;{person.quote}&rdquo;
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
