"use client";
import React, { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import "./style.css";

export const items = (function () {
  function shuffleImage(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const categories = [
    { name: "IXA", pic: 8 },
    { name: "IXB", pic: 8 },
    { name: "IXC", pic: 8 },
    { name: "Teacher", pic: 7 },
  ];

  const items = [];

  categories.forEach(({ name, pic }) => {
    const categoryItems = [];
    for (let i = 1; i <= pic; i++) {
      categoryItems.push({
        url: `/gallery/${name.toLowerCase()}${i}.JPG`,
        category: name,
        name: `${name} ${i}`,
      });
    }
    items.push(...shuffleImage(categoryItems));
  });

  return items;
})();

export default function MultiFilters() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);
  const [loading, setLoading] = useState(true);

  const filters = ["IXA", "IXB", "IXC", "Teacher"];

  const handleFilterButtonClick = (selectedCategory) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(selectedCategory)
        ? prevFilters.filter((el) => el !== selectedCategory)
        : [...prevFilters, selectedCategory]
    );
  };

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      if (selectedFilters.length > 0) {
        setFilteredItems(
          items.filter((item) => selectedFilters.includes(item.category))
        );
      } else {
        setFilteredItems(items);
      }
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [selectedFilters]);

  return (
    <div>
      <div className="buttons-container mb-4">
        {filters.map((category, idx) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            className={`button ${
              selectedFilters.includes(category) ? "active" : ""
            }`}
            key={`filters-${idx}`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="flex justify-center pt-16">
        <div className="gallery">
          {loading
            ? Array.from({ length: 9 }).map((_, idx) => (
                <div key={`skeleton-${idx}`} className="pics">
                  <Skeleton variant="rectangular" width={210} height={118} />
                </div>
              ))
            : filteredItems.map((item, idx) => (
                <div key={`items-${idx}`} className="pics">
                  <img
                    src={item.url}
                    style={{ width: "100%" }}
                    alt={`item-${idx}`}
                    title={item.name}
                  />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
