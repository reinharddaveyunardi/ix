import { useTranslations } from "next-intl";
import React from "react";
import "../app/styles.css";

function Footer() {
  const f = useTranslations("MainFooter");

  return (
    <footer className="bg-[#14120f]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <img src="/logoFooter.png" className="h-52 me-3" alt="Logo IX" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                {f("Info.title")}
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href={f("Info.Elearn.link")}
                    className="hover:underline font-sans"
                  >
                    {f("Info.Elearn.title")}
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href={f("Info.Cis.link")}
                    className="hover:underline font-sans"
                  >
                    {f("Info.Cis.title")}
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href={f("Info.SCB.link")}
                    className="hover:underline font-sans"
                  >
                    {f("Info.SCB.title")}
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href={f("Info.SCBJ.link")}
                    className="hover:underline font-sans"
                  >
                    {f("Info.SCBJ.title")}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                {f("Sosmed.title")}
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href={f("Sosmed.Facebook.link")}
                    className="hover:underline font-sans "
                  >
                    {f("Sosmed.Facebook.title")}
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href={f("Sosmed.Instagram.link")}
                    className="hover:underline font-sans"
                  >
                    {f("Sosmed.Instagram.title")}
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href={f("Sosmed.Tiktok.link")}
                    className="hover:underline font-sans"
                  >
                    {f("Sosmed.Tiktok.title")}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                {f("Other.title")}
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href={f("Other.NextJs.link")}
                    className="hover:underline font-sans"
                  >
                    {f("Other.NextJs.title")}
                  </a>
                </li>
                <li>
                  <a
                    href={f("Other.Tailwind.link")}
                    className="hover:underline font-sans"
                  >
                    {f("Other.Tailwind.title")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between flex flex-col sm:my-0 my-2">
          <span className="text-sm sm:text-center text-gray-400">
            {f("Copy.copy")}
          </span>
          <span className="text-sm sm:text-center text-gray-400">
            {f("Info.Loc.title")}
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
