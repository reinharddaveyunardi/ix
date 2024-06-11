import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import NavigationLink from "./NavigationLink";
import "../app/styles.css";

export default function Navigation() {
  const t = useTranslations("Navigation");

  return (
    <div className="bg-[#F0EEE9] caslon top-0">
      <nav className="flex justify-between bg-[#27231d] shadow-lg p-2 text-white fixed z-20 w-full items-center sm:px-40">
        <div>
          <NavigationLink href="/">{t("home")}</NavigationLink>
          {/* <NavigationLink href="/">{t("ixa")}</NavigationLink>
          <NavigationLink href="/">{t("ixb")}</NavigationLink>
          <NavigationLink href="/">{t("ixc")}</NavigationLink> */}
        </div>
        <LocaleSwitcher />
      </nav>
    </div>
  );
}
