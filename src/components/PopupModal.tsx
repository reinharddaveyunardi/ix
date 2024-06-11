"use client";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import PopupContent from "./PopupContent";
import "./popup.css";

type Props = {
  welcome: string;
  content: string;
};

function PopupModal({ welcome, content }: Props) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const popupShown = localStorage.getItem("popupShown");
    if (!popupShown) {
      setIsPopupOpen(true);
    }
  }, []);
  function handle() {
    localStorage.setItem("popupShown", "true");
    setIsPopupOpen(false);
  }
  // useEffect(() => {
  //   setIsPopupOpen(true);
  // }, []);
  return (
    <Modal
      role="alertdialog"
      closeTimeoutMS={200}
      isOpen={isPopupOpen}
      onRequestClose={() => setIsPopupOpen(false)}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1000,
        },
        content: {
          position: "absolute",
          bottom: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "none",
          background: "none",
        },
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <div>
          <div>
            <div>
              <PopupContent welcome={welcome} content={content} />
            </div>
            <div className="flex justify-center items-center flex-col">
              <button
                onClick={() => handle()}
                className="bg-[#4b3e2b] text-white sm:px-6 sm:py-2 px-6 py-1 rounded-sm"
              >
                OK
              </button>
            </div>
          </div>
          <div className="absolute flex w-[87%] sm:w-[27%] justify-end">
            <img className="w-40" src="/cat.webp" alt="Welcome Cat" />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default PopupModal;
