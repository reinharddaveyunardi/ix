import React from "react";
import "../../../styles/paper.css";
import { useTranslations } from "next-intl";
import "../../../styles/globals.css";

function WelcomeLetter() {
  const t = useTranslations("Letter");
  return (
    <div className="bg-[var(--background)] flex justify-center items-center py-20 px-6 Letter overflow-hidden relative">
      {/* Decorative vertical line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-[var(--brass)]/40 to-transparent" />

      <div className="letter caslon italic text-[var(--walnut)] relative">
        {/* Subtle Paper Texture Overlay on the letter itself */}
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/old-map.png')]" />

        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-10 brass-text">{t("dear")}</h1>

          <div className="space-y-6 text-xl leading-relaxed opacity-90 serif">
            <p>{t("message.paragraphOne")}</p>
            <p>{t("message.paragraphTwo")}</p>
            <p>{t("message.paragraphThree")}</p>
            <p>{t("message.paragraphFour")}</p>
            <p>{t("message.paragraphFive")}</p>
          </div>

          <div className="mt-16 pt-10 border-t border-[var(--brass)]/10 space-y-2 text-lg">
            <p className="mb-4 opacity-70">With gratitude,</p>
            <p className="font-bold text-2xl">{t("close.name")}</p>
            <p className="tracking-widest uppercase text-xs font-semibold opacity-60 italic">
              {t("close.role")}
            </p>
            <p className="text-sm opacity-50">{t("close.school")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeLetter;
