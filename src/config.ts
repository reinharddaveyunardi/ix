import {Pathnames} from 'next-intl/navigation';

export const locales = ['en', 'id'] as const;

export const pathnames = {
  '/': '/',
  '/ixa': {
    en: '/ixa',
    id: '/ixa'
  },
  '/ixb': {
    en: '/ixb',
    id: '/ixb'
  },
  '/ixc': {
    en: '/ixc',
    id: '/ixc'
  },
  '/components' : '/components'
} satisfies Pathnames<typeof locales>;

export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
