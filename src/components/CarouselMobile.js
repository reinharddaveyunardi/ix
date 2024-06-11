"use client";
import React from "react";
import Carousel from "./CarouselPopup";

const Mslides = [
  {
    id: "1",
    url: "/Mimg1.jpg"
  },
  {
    id: "2",
    url: "/Mimg2.jpg"
  },
  {
    id: "3",
    url: "/Mimg3.jpg"
  },
];

function CarouselMobile() {
  return (
    <>
      <Carousel autoSlideInterval={5000}>
        {Mslides.map((e) => (
          <img
            src={e.url} key={e.id}
            className="bg-cover w-full h-screen bg-no-repeat bg-center flex relative"
          />
        ))}
      </Carousel>
    </>
  );
}

export default CarouselMobile;
