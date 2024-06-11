import {useTranslations} from 'next-intl';
import {ReactNode} from 'react';
import ClassBox from './ClassBox';
import "../app/styles.css";

type Props = {
  children?: ReactNode;
};

export default function ClassLayout({children}: Props) {
  const t = useTranslations('ClassInfo');

  return (
    <div>
      <div className="relative flex grow flex-col bg-[#2b2218] classLayout pb-32">
        <div className="flex grow flex-col justify-center items-center">
          <div className='flex justify-center items-end'>
            <div className="gap-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 mt-8 lg:gap-12 md:grid-cols-1 xl:grid-cols-3">
              <ClassBox
                logo={t('ix.ixa.logo')}
                hof={t('ix.ixa.hof')}
                homeroom={t('ix.ixa.homeroom')}
                title={t('ix.ixa.title')}
                vice={t('ix.ixa.vice')}
              />
              <ClassBox
                logo={t('ix.ixb.logo')}
                hof={t('ix.ixb.hof')}
                homeroom={t('ix.ixb.homeroom')}
                title={t('ix.ixb.title')}
                vice={t('ix.ixb.vice')}
              />
              <ClassBox
                logo={t('ix.ixc.logo')}
                hof={t('ix.ixc.hof')}
                homeroom={t('ix.ixc.homeroom')}
                title={t('ix.ixc.title')}
                vice={t('ix.ixc.vice')}
              />
            </div>
          </div>
          <div className="mt-6 text-gray-400 md:text-lg">{children}</div>
        </div>
      </div>
    </div>
  );
}