'use client'
import { NextIntlClientProvider, AbstractIntlMessages } from 'next-intl';
import { ReactNode } from 'react';

type ClientProviderProps = {
  locale: string;
  messages: AbstractIntlMessages;
  children: ReactNode;
};

export default function ClientProvider({
  locale,
  messages,
  children
}: ClientProviderProps) {
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      timeZone="Asia/Jakarta"
    >
      {children}
    </NextIntlClientProvider>
  );
}
