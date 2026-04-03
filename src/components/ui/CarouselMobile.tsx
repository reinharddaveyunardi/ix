import Image from "next/image";
import Carousel from "./Carousel";

const Mslides = [
  { id: "1", url: "/Mimg1.jpg" },
  { id: "2", url: "/Mimg2.jpg" },
  { id: "3", url: "/Mimg3.jpg" },
];

export default function CarouselMobile() {
  return (
    <div className="w-full h-screen">
      <Carousel autoSlideInterval={5000}>
        {Mslides.map((e) => (
          <div key={e.id} className="relative w-full h-full">
            <Image
              src={e.url}
              fill
              className="object-cover grayscale brightness-50"
              alt={`Mobile Slide ${e.id}`}
              sizes="100vw"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
