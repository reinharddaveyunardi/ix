import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { locales } from "../config";
import LocaleSwitcher from "./LocaleSwitcher";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";

type Props = {
  welcome: string;
  content: string;
};

const PopupContent = ({ welcome, content }: Props) => {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  return (
    <div>
      <div className="my-4 text-xs font-bold sm:text-xl sm:font-normal">
        <h2 className="w-full">{welcome}</h2>
      </div>
      <div className="my-4 text-xs sm:text-xl sm:font-normal">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default PopupContent;
