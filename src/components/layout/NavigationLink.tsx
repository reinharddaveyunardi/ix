'use client';

import clsx from 'clsx';
import {useSelectedLayoutSegment} from 'next/navigation';
import {ComponentProps} from 'react';
import type {AppPathnames} from '../../config';
import {Link} from '../../navigation';

export default function NavigationLink<Pathname extends AppPathnames>({
  href,
  ...rest
}: ComponentProps<typeof Link<Pathname>>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={clsx(
        'inline-block px-4 py-2 transition-all duration-300 text-base caslon italic tracking-wider',
        isActive 
          ? 'text-[var(--brass)] border-b-2 border-[var(--brass)] bg-[var(--brass)]/5' 
          : 'text-[var(--parchment)]/70 hover:text-[var(--parchment)] hover:bg-[var(--brass)]/5'
      )}
      href={href}
      {...rest}
    />
  );
}
