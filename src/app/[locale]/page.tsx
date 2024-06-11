import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import ClassLayout from "components/ClassLayout";
import BannerSlider from "components/Gallery";
import Footer from "components/Footer";
import "../../app/styles.css";
import MainLayout from "components/MainLayout";
import GroupCategory from "components/GroupCategory";
import Letter from "components/Letter";
import LetterPopup from "components/LetterPopup";
import StudentsLayout from "components/StudentsLayout";

type Props = {
  params: { locale: string };
};

export default function IndexPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("IndexPage");
  const p = useTranslations("Popup");
  const l = useTranslations("Letter")

  return (
    <div className="caslon">
      <LetterPopup dear={l('dear')} p1={l("message.paragraphOne")} p2={l("message.paragraphTwo")} p3={l("message.paragraphThree")} p4={l("message.paragraphFour")} p5={l("message.paragraphFive")}/>
      <MainLayout title={t("title")} welcome={p("title")} content={p("description")}>
        <div className="max-w-[490px] mt-4">{t("description")}</div>
      </MainLayout>
      <div className="hidden lg:block">
        <Letter />
      </div>
      <ClassLayout />
      <BannerSlider />
      <GroupCategory />
      <StudentsLayout/>
      <Footer />
    </div>
  );
}
