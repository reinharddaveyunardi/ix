"use client";
import React from "react";
import Carousel from "./CarouselPopup";



function CarouselParentSchool({Dslides}) {
  return (
    <div className="top-0">
      <Carousel autoSlideInterval={5000}>
        {Dslides.map((e) => (
          <img
            src={e.url}
            key={e.id}
            className="w-full bg-cover bg-center bg-no-repeat"
          />
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselParentSchool;
