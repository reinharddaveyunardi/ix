import React from "react";
import { useTranslations } from "next-intl";

function FacilityLayout() {
  const f = useTranslations("school");

  return (
    <div className="h-screen w-full">
      <div className="flex justify-center my-16">
        <h1 className="text-4xl font-bold text-white">{f("Facility.title")}</h1>
      </div>
    </div>
  );
}

export default FacilityLayout;
