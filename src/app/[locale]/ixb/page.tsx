import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import IXB from "components/ixbLayout";
import IxbGallery from "components/IxbGallery";
import StudentsLayoutIXB from "components/StudentsLayoutIXB";

type Props = {
  params: { locale: string };
};

export default function PathnamesPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("ixb");

  return (
    <div>
      <IXB title={t("title")}>
        <div className="max-w-[490px] mt-4">{t("description")}</div>
      </IXB>

      <IxbGallery />
      <StudentsLayoutIXB />
    </div>
  );
}
