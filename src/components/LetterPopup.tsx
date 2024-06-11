"use client";
import Modal from "react-modal";
import React, { useState, useEffect } from "react";
import { IoIosMail, IoIosMailOpen } from "react-icons/io";
import LetterContent from "./LetterContent";

type Props = {
  dear: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  p5: string;
};

function LetterPopup({ dear, p1, p2, p3, p4, p5 }: Props) {
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [isMailOpen, setIsMailOpen] = useState(false);

  useEffect(() => {
    const mailOpened = localStorage.getItem("isMailOpen");
    if (mailOpened) {
      setIsMailOpen(true);
    }
  }, []);

  function handleClick() {
    setIsLetterOpen(true);
    setIsMailOpen(true);
    localStorage.setItem("isMailOpen", "true");
  }

  return (
    <div>
      <div className="fixed bottom-0 right-0 flex z-[99] px-4 py-4 text-white lg:hidden">
        <button
          onClick={handleClick}
          className="flex justify-end items-end text-4xl text-white lg:hidden"
        >
          {isMailOpen ? (
            <div>
              <IoIosMailOpen/>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-end">
              <IoIosMail />
              <div className="w-[10px] h-[10px] top-[21px] right-[18px] bg-red-500 absolute animate-ping rounded-full" />
              <div className="w-[10px] h-[10px] top-[21px] right-[18px] bg-red-500 absolute rounded-full" />
            </div>
          )}
        </button>
      </div>
      <Modal
        role="alertdialog"
        closeTimeoutMS={200}
        isOpen={isLetterOpen}
        onRequestClose={() => setIsLetterOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
          },
          content: {
            height: "100%",
            top: "0",
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "none",
            background: "none",
          },
        }}
      >
        <div>
          <div>
            <div className="my-14">
              <div className="h-full">
                <LetterContent
                  dear={dear}
                  p1={p1}
                  p2={p2}
                  p3={p3}
                  p4={p4}
                  p5={p5}
                />
              </div>
              <div className="flex justify-center items-center flex-col mt-3">
                <button
                  onClick={() => setIsLetterOpen(false)}
                  className="bg-[#4b3e2b] text-white sm:px-6 sm:py-2 px-6 py-1"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default LetterPopup;
