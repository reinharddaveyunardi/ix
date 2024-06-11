import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
};

export default function HeroTitleMobile({ children, title }: Props) {
  return (
    <div className="absolute mx-12">
      <div className="flex items-start h-screen w-full justify-center flex-col">
        <h1 className="text-[#ffffff] text-2xl caslon font-semibold leading-tight tracking-tight md:text-5xl">
          {title}
        </h1>
        <div className="text-[#ffffff] md:text-lg flex flex-col justify-center w-full">
          {children}
        </div>
      </div>
    </div>
  );
}
