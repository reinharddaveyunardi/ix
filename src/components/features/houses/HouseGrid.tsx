import { useTranslations } from "next-intl";
import { ReactNode } from "react";
import HouseCard from "./HouseCard";
import "../../../styles/globals.css";

type Props = {
  children?: ReactNode;
};

export default function HouseGrid({ children }: Props) {
  const t = useTranslations("ClassInfo");

  return (
    <section className="bg-[var(--background)] py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative center line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-[var(--brass)]/40 to-transparent" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="mb-24 text-center">
          <h3 className="text-[var(--brass)] caslon italic text-sm tracking-[0.5em] uppercase mb-4 opacity-60">
            {t("houses")}
          </h3>
          <h2 className="text-[var(--parchment)] caslon italic text-5xl md:text-6xl tracking-tight brass-text py-2 leading-tight">
            {t("communities")}
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[var(--brass)]/30 to-transparent mx-auto mt-8" />
        </div>

        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16 xl:gap-20 items-stretch">
            <HouseCard
              logo={t("ix.ixa.logo")}
              hof={t("ix.ixa.hof")}
              homeroom={t("ix.ixa.homeroom")}
              title={t("ix.ixa.title")}
              vice={t("ix.ixa.vice")}
            />
            <HouseCard
              logo={t("ix.ixb.logo")}
              hof={t("ix.ixb.hof")}
              homeroom={t("ix.ixb.homeroom")}
              title={t("ix.ixb.title")}
              vice={t("ix.ixb.vice")}
            />
            <HouseCard
              logo={t("ix.ixc.logo")}
              hof={t("ix.ixc.hof")}
              homeroom={t("ix.ixc.homeroom")}
              title={t("ix.ixc.title")}
              vice={t("ix.ixc.vice")}
            />
          </div>
        </div>

        {children && (
          <div className="mt-20 text-[var(--text-secondary)] caslon italic text-xl opacity-60 serif border-t border-[var(--brass)]/10 pt-8">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
