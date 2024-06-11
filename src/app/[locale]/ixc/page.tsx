import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import IXC from "components/ixcLayout";
import StudentsLayoutIXC from "components/StudentsLayoutIXC";
import TimelineLayout from "components/Timeline";

type Props = {
  params: { locale: string };
};

export default function PathnamesPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("ixc");

  return (
    <div>
      <IXC title={t("title")}>
        <div className="max-w-[490px] mt-4">{t("description")}</div>
      </IXC>

      <StudentsLayoutIXC />
    </div>
  );
}
