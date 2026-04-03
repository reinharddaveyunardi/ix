import Image from "next/image";
import Carousel from "./Carousel";

const Dslides = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1472173148041-00294f0814a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1555440186-7f0a5a6a5537?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1502700807168-484a3e7889d0?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
];

export default function CarouselParent() {
  return (
    <div className="w-full">
      <Carousel autoSlideInterval={5000}>
        {Dslides.map((e) => (
          <div key={e.id} className="relative w-full h-full">
            <Image 
              src={e.url} 
              fill
              className="object-cover grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-1000" 
              alt={`Slide ${e.id}`}
              sizes="100vw"
              priority={e.id === "1"}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
