import Image from "next/image";
import Carousel from "./Carousel";

interface Slide {
  id: string;
  url: string;
}

interface CarouselMobileSchoolProps {
  Mslides: Slide[];
}

export default function CarouselMobileSchool({ Mslides }: CarouselMobileSchoolProps) {
  return (
    <div className="w-full h-screen">
      <Carousel autoSlideInterval={5000}>
        {Mslides.map((e) => (
          <div key={e.id} className="relative w-full h-full">
            <Image
              src={e.url}
              fill
              className="object-cover grayscale brightness-50"
              alt={`Mobile School Slide ${e.id}`}
              sizes="100vw"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
