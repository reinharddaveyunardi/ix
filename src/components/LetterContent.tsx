import { useTranslations } from "next-intl";
import React from "react";
import "./paperPop.css";

type Props = {
  dear: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  p5: string;
};

function LetterContent({ dear, p1, p2, p3, p4, p5 }: Props) {
  return (
    <div className="overflow-scroll mt-80">
      <div className="mail text-xs mt-96">
        <p>{dear}</p>
        <br />
        <p>
          {p1}
        </p>
        <br />
        <p>
          {p2}
        </p>
        <br />
        <p>
          {p3}
        </p>
        <br />
        <p>
          {p4}
        </p>
        <br />
        <p>
          {p5}
        </p>
        <br />
        <div className="text-xs">
          <p>Greetings and prayers,</p>
          <p>Boedi Tjusila & Fenny Sukamto</p>
          <p>School General Manager </p>
          <p>
            Sekolah Citra Kasih / Sekolah Citra Berkat / Sekolah Ciputra Kasih
          </p>
        </div>
      </div>
    </div>
  );
}

export default LetterContent;
