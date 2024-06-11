"use client";
import React from "react";

export default function ImageSelector({ groups, setSelectedGroup }) {
  return (
    <div className="absolute flex justify-center w-full bottom-0 mb-12">
      {Object.keys(groups).map((groupKey) => (
        <div
          key={groupKey}
          onClick={() => setSelectedGroup(groups[groupKey])}
          className="cursor-pointer flex justify-center mx-4"
        >
          <img
            src={groups[groupKey].photo}
            alt={groupKey}
            className="rounded-lg border-2 border-white shadow-lg"
            width={120}
          />
        </div>
      ))}
    </div>
  );
}
