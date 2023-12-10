"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { testimonialsMock } from "./mock.js";

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 3 },
    },
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  return (
    <div className="p-32">
      <div className="embla">
        <div className="embla__viewport overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {testimonialsMock.map((item) => {
              return (
                <div
                  className="embla__slide flex flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_34%]"
                  key={item.id}
                >
                  {item.id}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="embla__navigator flex justify-between p-32">
        {scrollSnaps.map((_, index) => (
          <div
            className="embla__dot block h-2 w-2 hover:h-4 hover:w-4 bg-neutral-300 hover:bg-blue-600 transition rounded-full"
            key={index}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
