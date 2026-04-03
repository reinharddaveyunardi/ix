import { cn } from "../../utils/cn";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  className,
}: {
  items: {
    img: string;
    name: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const t = useTranslations("Carousel");

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse",
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative max-w-7xl sm:max-w-full overflow-hidden bg-[var(--background)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-12 py-12 w-max flex-nowrap",
          start && "animate-scroll",
        )}
      >
        {items.map((item, idx) => (
          <li
            key={item.name + idx}
            className="h-[400px] w-[400px] relative flex-shrink-0 border-2 border-[var(--brass)]/10 p-6 bg-[var(--surface)] shadow-2xl transition-all duration-700 hover:border-[var(--brass)]/40 hover:-translate-y-2 group flex flex-col"
          >
            <div className="absolute top-0 right-0 w-8 h-8 opacity-20 pointer-events-none">
              <div className="absolute top-0 right-0 w-full h-full bg-[var(--brass)]/10 -rotate-45 translate-x-1/2 -translate-y-1/2" />
            </div>

            <div className="relative flex-1 mb-6 overflow-hidden bg-black/20 ring-[var(--brass)]/5 min-w-[250px]">
              <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-1000 ease-in-out scale-[1.05] group-hover:scale-100 will-change-transform"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.3)] pointer-events-none" />
            </div>
            <div className="text-center relative h-12 flex flex-col justify-center">
              <span className="block text-[var(--brass)]/40 text-[10px] uppercase tracking-[0.4em] mb-1 font-bold caslon italic">
                {t("entry")} No.{idx + 1}
              </span>
              <h3 className="text-[var(--parchment)] caslon text-xl italic tracking-tight group-hover:text-[var(--brass)] transition-colors duration-500 line-clamp-1">
                {item.name}
              </h3>
            </div>

            {/* Corner Markers */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[var(--brass)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[var(--brass)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </li>
        ))}
      </ul>
    </div>
  );
};
