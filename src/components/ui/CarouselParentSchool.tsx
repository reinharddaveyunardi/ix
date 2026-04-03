import Image from "next/image";
import Carousel from "./Carousel";

interface Slide {
  id: string;
  url: string;
}

interface CarouselParentSchoolProps {
  Dslides: Slide[];
}

export default function CarouselParentSchool({ Dslides }: CarouselParentSchoolProps) {
  return (
    <div className="w-full">
      <Carousel autoSlideInterval={5000}>
        {Dslides.map((e) => (
          <div key={e.id} className="relative w-full h-full">
            <Image
              src={e.url}
              fill
              className="object-cover grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
              alt={`School Slide ${e.id}`}
              sizes="100vw"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
