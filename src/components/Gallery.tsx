import { useTranslations } from "next-intl";
import React from "react";
import MultiFilters from "./MultiFilter";

function Gallery() {
  const t = useTranslations("Gallery");

  return (
    <div className="bg-[#352b1d] h-auto w-full m-auto px-4 py-16 relative overflow-hidden">
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-2 text-white">
          <div className="sm:w-40 w-20 h-[1.5px] bg-white" />
          <p>✧ |⁠</p>
        </div>
        <h1 className="text-center sm:text-2xl text-sm font-bold px-4 text-white">
          {t("title")}
        </h1>
        <div className="flex items-center gap-2 text-white">
          <p>| ✧⁠</p>
          <div className="sm:w-40 w-20 h-[1.5px] bg-white" />
        </div>
      </div>
      <div>
        <p className="text-sm text-center font-semibold text-white">Filter</p>
      </div>
      <MultiFilters />
    </div>
  );
}

export default Gallery;
