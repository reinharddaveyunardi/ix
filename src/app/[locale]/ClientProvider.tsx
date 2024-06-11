'use client'
import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';

type ClientProviderProps = {
  locale: string;
  children: ReactNode;
};

export default function ClientProvider({
  locale,
  children
}: ClientProviderProps) {
  return (
    <NextIntlClientProvider
      locale={locale}
    >
      {children}
    </NextIntlClientProvider>
  );
}
