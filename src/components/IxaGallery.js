"use client";
import React, { useState, useEffect } from "react";
import { ixaImg } from "./ixaItems";
import "./style.css";
import { Dumps } from "./ui/Dumps";

function IxaGallery() {
  return (
    <div className="flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <Dumps items={info} direction="right" speed="slow" />
    </div>
  );
}

const info = [
  {
    img: "https://i.ibb.co.com/Bj3j0tk/Whats-App-Image-2024-05-29-at-18-30-40.jpg",
    name: "IXA Photo 1",
  },
  {
    img: "https://i.ibb.co.com/0BFfdd4/Whats-App-Image-2024-05-29-at-18-30-38.jpg",
    name: "IXA Photo 2",
  },
  {
    img: "https://i.ibb.co.com/ggRBTv8/Whats-App-Image-2024-05-29-at-18-32-09.jpg",
    name: "IXA Photo 3",
  },
  {
    img: "https://i.ibb.co.com/18W0ywm/Whats-App-Image-2024-05-29-at-18-33-25.jpg",
    name: "IXA Photo 4",
  },
  {
    img: "https://i.ibb.co.com/YR30RSv/Whats-App-Image-2024-05-29-at-18-32-07.jpg",
    name: "IXA Photo 5",
  },
];

export default IxaGallery;
