"use client";
import { ReactNode, useState } from "react";
import "../app/styles.css";
import dynamic from "next/dynamic";
import "animate.css";
import FlipWord from "./FlipWords";

const PopupModal = dynamic(() => import("./PopupModal"));

type Props = {
  children: ReactNode;
  title: string;
  welcome: string;
  content: string;
};

export default function MainLayout({ children, title, welcome, content }: Props) {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  return (
    <div className="flex flex-col bg-[#2e281b91] top-0 h-screen w-full">
      <div className="hidden sm:block">
        <div className="flex">
          <div className="flex h-screen bg">
            <img
              src="/ix.JPG"
              alt="ix"
              className="bg-center bg-no-repeat object-cover bg-cover w-full items-center flex"
            />
          </div>
          <div className="absolute z-10 w-full h-full flex justify-center items-start">
            <div className="px-32">
              <div className="xl:text-6xl md:text-4xl text-[#ffffff] drop-shadow-xl font-bold animate__animated animate__slideInDown">
                <h1><FlipWord title={title}/></h1>
              </div>
            </div>
          </div>
          <div className="absolute z-10 w-full flex justify-center items-end h-screen -mt-48">
            <div className="px-32">
              <div className="text-2xl font-normal text-white animate__animated animate__slideInUp">
                <h1>{children}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block sm:hidden">
        <div className="h-screen flex items-center">
          <div className="bgM object-cover flex items-center h-screen justify-center">
            <video
              autoPlay
              loop
              muted
              className="h-screen w-full object-fit top-0 items-center flex"
            >
              <source src="/ixM.mp4" />
            </video>
          </div>
          <div className="absolute z-10 w-full h-full flex justify-center items-start mt-[100%]">
            <div className="flex justify-center w-[94%]">
              <div className="text-2xl text-[#ffffff] text-center drop-shadow-xl font-bold animate__animated animate__slideInDown">
                <h1>{title}</h1>
              </div>
            </div>
          </div>
          <div className="absolute z-10 w-full h-full flex justify-center items-start mt-[250%]">
            <div>
              <div className="text-xl font-normal text-white animate__animated animate__slideInUp">
                <h1>{children}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isPopupOpen && <PopupModal welcome={welcome} content={content}/>}
    </div>
  );
}
