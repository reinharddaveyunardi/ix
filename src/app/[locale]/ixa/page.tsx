import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import IXA from 'components/ixaLayout';
import StudentsLayoutIXA from 'components/StudentsLayoutIXA';
import IxaGallery from "components/IxaGallery"
import Footer from 'components/Footer';

type Props = {
  params: {locale: string};
};

export default function PathnamesPage({params: {locale}}: Props) {
  unstable_setRequestLocale(locale);

  const t = useTranslations('ixa');

  return (
    <div>

      <IXA title={t('title')}>
        <div className="max-w-[490px] mt-4">
          {t("description")}
        </div>
      </IXA>

      <IxaGallery/>
      
      <StudentsLayoutIXA/>
      <Footer/>
    </div>
    
  );
}
