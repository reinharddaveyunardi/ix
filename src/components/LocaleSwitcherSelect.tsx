"use client";

import clsx from "clsx";
import { useParams } from "next/navigation";
import {
  ChangeEvent,
  ReactNode,
  useTransition,
  useState,
  useEffect,
} from "react";
import { useRouter, usePathname } from "../navigation";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const [locale, setLocale] = useState(defaultValue);

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale");
    if (savedLocale) {
      setLocale(savedLocale);
    } else {
      const userLanguage = navigator.language || navigator.language;
      setLocale(userLanguage);
      localStorage.setItem("locale", userLanguage);
    }
  }, []);

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    localStorage.setItem("locale", nextLocale);
    setLocale(nextLocale);
    startTransition(() => {
      router.replace(
        // @ts-expect-error
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <label
      className={clsx(
        "relative text-white",
        isPending && "transition-opacity [&:disabled]:opacity-30 "
      )}
    >
      <p className="sr-only">{label}</p>
      <select
        className="inline-flex appearance-none rounded-lg text-center py-2 pl-2 pr-4 bg-transparent outline-none"
        value={locale}
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
    </label>
  );
}
