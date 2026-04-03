import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import HouseGrid from "components/features/houses/HouseGrid";
import CategoryGallery from "components/features/archive/CategoryGallery";
import Footer from "components/layout/Footer";
import "styles/globals.css";
import MainLayout from "components/layout/MainLayout";
import CategoryTabs from "components/features/archive/CategoryTabs";
import WelcomeLetter from "components/features/welcome/WelcomeLetter";
import WelcomeModal from "components/features/welcome/WelcomeModal";
import ArchiveLayout from "components/features/archive/ArchiveLayout";
import TeacherGallery from "components/features/teachers/TeacherGallery";
import FadeInQuote from "components/ui/FadeInQuote";

type Props = {
  params: { locale: string };
};

export default function IndexPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("IndexPage");
  const p = useTranslations("Popup");
  const l = useTranslations("Letter");

  return (
    <div className="caslon">
      <WelcomeModal
        dear={l("dear")}
        p1={l("message.paragraphOne")}
        p2={l("message.paragraphTwo")}
        p3={l("message.paragraphThree")}
        p4={l("message.paragraphFour")}
        p5={l("message.paragraphFive")}
      />
      <MainLayout
        title={t("title")}
        welcome={p("title")}
        content={p("description")}
      >
        <div className="max-w-[490px] mt-4">{t("description")}</div>
      </MainLayout>

      {/* Quote 1: Between Hero and Preface (Left Side) */}
      <FadeInQuote align="left">
        "We laugh, we cry, we play, we learn, we spend time together and one day
        we go our separate ways."
      </FadeInQuote>

      <div className="hidden lg:block" id="preface">
        <WelcomeLetter />
      </div>
      <div id="teachers">
        <TeacherGallery />
      </div>

      {/* Quote 2: Between Teachers and Houses (Right Side) */}
      <FadeInQuote align="right">
        "Though miles may lie between us. We are never far apart, for friendship
        doesn't count miles. It's measured by the heart."
      </FadeInQuote>

      <div id="houses">
        <HouseGrid />
      </div>
      <div id="gallery">
        <CategoryGallery />
      </div>
      <div id="superlatives">
        <CategoryTabs />
      </div>

      {/* Quote 3: Between Superlatives and Archive (Centered) */}
      <FadeInQuote align="center">
        "Some goodbyes are not really the end of the story, but may be beginning
        of a new journey."
      </FadeInQuote>

      <div id="archive">
        <ArchiveLayout />
      </div>
      <Footer />
    </div>
  );
}
