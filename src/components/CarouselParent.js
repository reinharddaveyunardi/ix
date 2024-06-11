"use client";
import React from "react";
import Carousel from "./CarouselPopup";

const Dslides = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1472173148041-00294f0814a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1555440186-7f0a5a6a5537?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1502700807168-484a3e7889d0?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
];

function CarouselParent() {
  return (
    <div className="top-0">
      <Carousel autoSlideInterval={5000}>
        {Dslides.map((e) => (
          <img key={e.id} src={e.url} className="w-full bg-cover bg-center bg-no-repeat" />
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselParent;
