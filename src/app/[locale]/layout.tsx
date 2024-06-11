import clsx from "clsx";
import { Inter } from "next/font/google";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import Navigation from "components/Navigation";
import { locales } from "../../config";
import ClientProvider from "./ClientProvider";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  return {
    title: t("title"),
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  unstable_setRequestLocale(locale);

  return (
    <ClientProvider locale={locale}>
      <html className="h-full" lang={locale}>
        <head>
          <meta name="keywords" content="pastnine, IX, ix, nine, kelas 9, 9 class, pastnine.vercel.app, web graduasi"/>
          <meta name="author" content="@itsme.xell, Reinhard"/>
          <meta name="description" content="Website ini berisi memori kelas 7 hingga kelas 9 Sekolah Citra Berkat Jonggol"/>
          <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
        </head>
        <body className={clsx(inter.className, "flex h-full flex-col top-0")}>
          <Navigation />
          {children}
          <SpeedInsights/>
          <Analytics/>
        </body>
      </html>
    </ClientProvider>
  );
}
