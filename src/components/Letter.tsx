import React from "react";
import "./paper.css";
import { useTranslations } from "next-intl";
import "../app/styles.css";

function Letter() {
  const t = useTranslations("Letter");
  return (
    <div className="bg-[#1b1917] flex justify-center items-center h-screen Letter">
      <div className="letter">
        <div className="">
          <h1>{t("dear")}</h1>
        </div>
        <br />
        <div className="font-normal">
          <p>{t("message.paragraphOne")}</p>
          <br />
          <p>{t("message.paragraphTwo")}</p>
          <br />
          <p>{t("message.paragraphThree")}</p>
          <br />
          <p>{t("message.paragraphFour")}</p>
          <br />
          <p>{t("message.paragraphFive")}</p>
        </div>
        <br />
        <div className=" font-normal">
          <div>
            <p>{t("close.greeting")}</p>
          </div>
          <div>
            <p>{t("close.name")}</p>
          </div>
          <div>
            <p>{t("close.role")}</p>
          </div>
          <div>
            <p>{t("close.school")}</p>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Letter;
