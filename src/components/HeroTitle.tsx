import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
};

export default function HeroTitle({ children, title }: Props) {
  return (
    <div className="absolute z-10 w-full h-full flex justify-start items-center">
      <div className="px-32">
        <div className="text-6xl text-[#ffffff] drop-shadow-xl font-bold">
          <h1>{title}</h1>
        </div>
        <div className="text-2xl font-normal text-white">
          <h1>{children}</h1>
        </div>
      </div>
    </div>
  );
}
