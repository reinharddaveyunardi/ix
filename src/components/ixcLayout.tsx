"use client";
import { ReactNode, useState } from "react";
import "../app/styles.css";
import dynamic from "next/dynamic";

const CarouselMobileSchool = dynamic(() => import("./CarouselMobileSchool"));
const HeroTitle = dynamic(() => import("./HeroTitle"));
const HeroTitleMobile = dynamic(() => import("./HeroTitleMobile"));

type Props = {
  children: ReactNode;
  title: string;
};

const Mslides = [
  {
    id: "1",
    url: "/Mimg1.jpg",
  },
  {
    id: "2",
    url: "/Mimg2.jpg",
  },
  {
    id: "3",
    url: "/Mimg3.jpg",
  },
];

export default function IXC({ children, title }: Props) {
  return (
    <div className="flex flex-col bg-[#2e281b91] top-0">
      <div className="hidden sm:block">
        <div className="flex">
          <video
            autoPlay
            loop
            className="h-screen w-full object-cover object-center"
          >
            <source src="/ix.mp4" type="video/mp4" />
          </video>
          <HeroTitle title={title} children={children} />
        </div>
      </div>
      <div className="block sm:hidden">
        <div className="h-screen flex flex-col items-center">
          <div className="max-h-lg w-full flex justify-center">
            <CarouselMobileSchool Mslides={Mslides} />
            <HeroTitleMobile title={title} children={children} />
          </div>
        </div>
      </div>
    </div>
  );
}
