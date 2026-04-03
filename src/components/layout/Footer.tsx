"use client";

import { useTranslations } from "next-intl";
import { IxLogo } from "../ui/Logo";
import "../../styles/globals.css";

export default function Footer() {
  const f = useTranslations("MainFooter");

  return (
    <footer className="bg-[var(--background)] border-t border-[var(--brass)]/10 pt-24 pb-16 px-6 sm:px-12 relative overflow-hidden">
      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 w-px h-12 bg-gradient-to-b from-[var(--brass)]/40 to-transparent -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          {/* Brand/Logo Section */}
          <div className="col-span-1 md:col-span-1">
            <a href="/" className="inline-block group mb-8">
              <IxLogo className="w-24 h-24 text-[var(--brass)]/80 group-hover:text-[var(--brass)] group-hover:scale-105 transition-all duration-700 ease-in-out" />
            </a>
            <p className="text-[var(--text-secondary)] caslon italic text-sm max-w-xs leading-relaxed serif underline-offset-4 decoration-[var(--brass)]/10 decoration-1">
              Preserving the digital chronicles of Class IX. A legacy captured in pixels and parchment.
            </p>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-2 md:grid-cols-3 col-span-1 md:col-span-3 gap-12">
            <div>
              <h3 className="text-[var(--brass)] font-bold caslon italic text-lg mb-8 tracking-widest uppercase text-xs opacity-80">
                {f("Info.title")}
              </h3>
              <ul className="space-y-5 text-sm text-[var(--text-secondary)]">
                {[
                  { key: "Elearn", title: f("Info.Elearn.title"), link: f("Info.Elearn.link") },
                  { key: "Cis", title: f("Info.Cis.title"), link: f("Info.Cis.link") },
                  { key: "SCB", title: f("Info.SCB.title"), link: f("Info.SCB.link") },
                  { key: "SCBJ", title: f("Info.SCBJ.title"), link: f("Info.SCBJ.link") }
                ].map(item => (
                  <li key={item.key}>
                    <a href={item.link} className="hover:text-[var(--parchment)] transition-all duration-300 border-b border-transparent hover:border-[var(--brass)]/40 pb-1">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[var(--brass)] font-bold caslon italic text-lg mb-8 tracking-widest uppercase text-xs opacity-80">
                {f("Sosmed.title")}
              </h3>
              <ul className="space-y-5 text-sm text-[var(--text-secondary)]">
                {[
                  { key: "Facebook", title: f("Sosmed.Facebook.title"), link: f("Sosmed.Facebook.link") },
                  { key: "Instagram", title: f("Sosmed.Instagram.title"), link: f("Sosmed.Instagram.link") },
                  { key: "Tiktok", title: f("Sosmed.Tiktok.title"), link: f("Sosmed.Tiktok.link") }
                ].map(item => (
                  <li key={item.key}>
                    <a href={item.link} className="hover:text-[var(--parchment)] transition-all duration-300 border-b border-transparent hover:border-[var(--brass)]/40 pb-1">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h3 className="text-[var(--brass)] font-bold caslon italic text-lg mb-8 tracking-widest uppercase text-xs opacity-80">
                {f("Other.title")}
              </h3>
              <ul className="space-y-5 text-sm text-[var(--text-secondary)]">
                {[
                  { key: "NextJs", title: f("Other.NextJs.title"), link: f("Other.NextJs.link") },
                  { key: "Tailwind", title: f("Other.Tailwind.title"), link: f("Other.Tailwind.link") }
                ].map(item => (
                  <li key={item.key}>
                    <a href={item.link} className="hover:text-[var(--parchment)] transition-all duration-300 border-b border-transparent hover:border-[var(--brass)]/40 pb-1">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[var(--brass)]/5 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] sm:text-xs text-[var(--text-secondary)]/30 uppercase tracking-[0.3em] space-y-6 md:space-y-0">
          <p className="caslon italic">{f("Copy.copy")}</p>
          <div className="flex items-center gap-6">
            <span className="w-1 h-1 rounded-full bg-[var(--brass)]/20" />
            <p className="caslon italic">{f("Info.Loc.title")}</p>
            <span className="w-1 h-1 rounded-full bg-[var(--brass)]/20" />
          </div>
        </div>
      </div>
    </footer>
  );
}
