"use client";
import React from "react";
import Carousel from "./CarouselPopup";

function CarouselMobileSchool({Mslides}) {
  return (
    <>
      <Carousel autoSlideInterval={5000}>
        {Mslides.map((e) => (
          <img
            src={e.url}
            key={e.id}
            className="bg-cover w-full h-screen bg-no-repeat bg-center flex relative"
          />
        ))}
      </Carousel>
    </>
  );
}

export default CarouselMobileSchool;
