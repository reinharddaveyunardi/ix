'use client'
import React, { useEffect, useState } from "react";
import Skeleton from '@mui/material/Skeleton';
import { items } from "./items";
import "./style.css";

export default function MultiFilters() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);
  const [loading, setLoading] = useState(true);

  let filters = ["IXA", "IXB", "IXC", "Teacher"];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    setLoading(true);
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = items.filter((item) => item.category === selectedCategory);
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...items]);
    }
    setLoading(false);
  };

  return (
    <div>
      <div className="buttons-container mb-4">
        {filters.map((category, idx) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            className={`button ${
              selectedFilters?.includes(category) ? "active" : ""
            }`}
            key={`filters-${idx}`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="flex justify-center pt-16">
        <div className="gallery">
          {loading ? (
            Array.from({ length: 9 }).map((_, idx) => (
              <div key={`skeleton-${idx}`} className="pics">
                <Skeleton variant="rectangular" width={210} height={118}/>
              </div>
            ))
          ) : (
            filteredItems.map((item, idx) => (
              <div key={`items-${idx}`} className="pics">
                <img src={item.url} style={{ width: '100%' }} alt={`item-${idx}`} title={item.name}/>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
