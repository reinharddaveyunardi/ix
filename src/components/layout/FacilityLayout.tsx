import React from "react";
import { useTranslations } from "next-intl";

function FacilityLayout() {
  const f = useTranslations("school");

  return (
    <section className="min-h-screen w-full bg-[var(--background)] py-32 px-8 relative overflow-hidden">
      {/* Decorative vertical line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[var(--brass)]/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-20">
          <h3 className="text-[var(--brass)] caslon italic text-sm tracking-[0.5em] uppercase mb-4 opacity-60">The Grounds</h3>
          <h1 className="text-5xl md:text-7xl font-bold text-[var(--parchment)] caslon italic leading-tight brass-text">
            {f("Facility.title")}
          </h1>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[var(--brass)]/30 to-transparent mx-auto mt-8" />
        </div>
        
        {/* Placeholder for future archival facility cards or content */}
        <div className="w-full flex justify-center opacity-40">
          <div className="p-12 border border-[var(--brass)]/20 caslon italic text-[var(--brass)]/60 text-lg tracking-widest uppercase">
            Archival Floor Plans & Records
          </div>
        </div>
      </div>
    </section>
  );
}

export default FacilityLayout;
