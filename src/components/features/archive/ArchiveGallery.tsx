"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Masonry from "react-masonry-css";

interface GalleryItem {
  url: string;
  category: string;
  name: string;
}

const categories = [
  { name: "IXA", pic: 8 },
  { name: "IXB", pic: 8 },
  { name: "IXC", pic: 8 },
  { name: "Teacher", pic: 7 },
];

const allItems: GalleryItem[] = (() => {
  const items: GalleryItem[] = [];
  categories.forEach(({ name, pic }) => {
    for (let i = 1; i <= pic; i++) {
      items.push({
        url: `/gallery/${name.toLowerCase()}${i}.JPG`,
        category: name,
        name: `${name} Image ${i}`,
      });
    }
  });
  return items.sort(() => Math.random() - 0.5);
})();

const breakpointColumns = {
  default: 4,
  1280: 4,
  1024: 3,
  640: 2,
  400: 1,
};

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

export default function ArchiveGallery() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>(allItems);
  const [loading, setLoading] = useState(true);
  const t = useTranslations("MultiFilter");

  const filterOptions = ["IXA", "IXB", "IXC", "Teacher"];

  const handleFilterToggle = (category: string) => {
    setSelectedFilters((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  useEffect(() => {
    setFilteredItems(
      selectedFilters.length > 0
        ? allItems.filter((item) => selectedFilters.includes(item.category))
        : allItems,
    );
    setLoading(false);
  }, [selectedFilters]);

  return (
    <div className="w-full">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-6 mb-20">
        {filterOptions.map((category) => (
          <button
            key={category}
            onClick={() => handleFilterToggle(category)}
            className={`group relative px-10 py-3 transition-all duration-500 caslon italic text-xl
              ${
                selectedFilters.includes(category)
                  ? "text-[var(--walnut)] shadow-2xl"
                  : "text-[var(--text-secondary)] hover:text-[var(--parchment)]"
              }`}
          >
            <span
              className={`absolute inset-0 transition-transform duration-500 
              ${
                selectedFilters.includes(category)
                  ? "bg-[var(--parchment)] scale-100 -rotate-1 shadow-lg"
                  : "bg-[var(--parchment)]/5 scale-90 rotate-0 opacity-0 group-hover:opacity-100 group-hover:scale-100"
              }`}
            />
            <span className="relative z-10">{category}</span>
          </button>
        ))}
      </div>

      {/* Gallery */}
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="skeleton"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Masonry
              breakpointCols={breakpointColumns}
              className="flex gap-8"
              columnClassName="flex flex-col gap-8"
            >
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={`skeleton-${i}`}
                  variants={skeletonVariants}
                  initial="initial"
                  animate="animate"
                  className="bg-[var(--surface)] aspect-[4/3] rounded-sm border border-[var(--brass)]/10"
                />
              ))}
            </Masonry>
          </motion.div>
        ) : (
          <motion.div
            key="gallery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Masonry
              breakpointCols={breakpointColumns}
              className="flex gap-8"
              columnClassName="flex flex-col gap-8"
            >
              {filteredItems.map((item, idx) => (
                <motion.div
                  key={item.url}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: (idx % 8) * 0.05,
                  }}
                >
                  {/* group di div biasa, bukan di motion.div */}
                  <div className="group cursor-pointer">
                    <div
                      className="paper-card p-4 transition-all duration-700
                      group-hover:shadow-[0_0_50px_rgba(197,160,89,0.15)]
                      group-hover:scale-[1.02]"
                    >
                      <div className="relative overflow-hidden border border-black/5">
                        <Image
                          src={item.url}
                          alt={item.name}
                          width={800}
                          height={600}
                          className="w-full h-auto grayscale group-hover:grayscale-0
                            transition-all duration-1000 ease-in-out
                            brightness-95 group-hover:brightness-105"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Masonry>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
