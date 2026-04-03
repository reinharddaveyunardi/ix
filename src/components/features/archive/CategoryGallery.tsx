"use client";

import { useTranslations } from "next-intl";
import React from "react";
import ArchiveGallery from "./ArchiveGallery";

export default function CategoryGallery() {
  const t = useTranslations("Gallery");

  return (
    <section className="bg-[var(--background)] py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative vertical line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-[var(--brass)]/40 to-transparent" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="mb-24 text-center">
          <h3 className="text-[var(--brass)] caslon italic text-sm tracking-[0.5em] uppercase mb-4 opacity-60">
            {t("capturing")}
          </h3>
          <h2 className="text-[var(--parchment)] py-2 caslon italic text-5xl md:text-6xl tracking-tight leading-tight brass-text">
            {t("chronicles")}
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[var(--brass)]/30 to-transparent mx-auto mt-8 mb-10" />
          <p className="text-[var(--text-secondary)] caslon italic text-lg opacity-80 serif max-w-2xl mx-auto">
            {t("title")}
          </p>
        </div>

        <div className="w-full">
          <ArchiveGallery />
        </div>
      </div>
    </section>
  );
}
