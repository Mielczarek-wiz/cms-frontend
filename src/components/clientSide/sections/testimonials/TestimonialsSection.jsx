"use client";

import Image from "next/image.js";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { convertToImage } from "@/components/modules/convertToImage.js";

export default function TestimonialsSection({ section }) {
  //All the stuff needed for the carousel to function
  const autoplay = useRef(
    Autoplay(
      { delay: 3000, stopOnInteraction: false },
      (emblaRoot) => emblaRoot.parentElement
    )
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      breakpoints: {
        "(min-width: 768px)": { slidesToScroll: 2 },
        "(min-width: 1024px)": { slidesToScroll: 3 },
      },
    },
    [autoplay.current]
  );
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    autoplay.current.reset();
  }, [emblaApi, setSelectedIndex]);
  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);
  //End of that, returning to usual Next.js stuff

  return (
    <section>
      <h1 className="flex justify-center text-3xl text-center text-neutral-900">
        {section.title}
      </h1>
      <div className="py-4 mx-0 embla md:mx-32">
        <div className="overflow-hidden embla__viewport" ref={emblaRef}>
          <div className="flex embla__container">
            {section.infoboxes.map((item) => {
              return (
                <div
                  className="embla__slide flex flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_34%] flex-col p-4 bg-white"
                  key={item.id}
                >
                  <div className="flex">
                    <Image
                      src={convertToImage(item.image)}
                      width={50}
                      height={50}
                      alt="person"
                      className="mb-6 mr-6 rounded-full"
                    />
                    <div>
                      <p className="text-2xl text-neutral-900">
                        {item.information}
                      </p>
                      <p className="text-neutral-600">Regular Client</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-thin text-neutral-500">
                      {item.subinformation}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4 embla__navigator">
        {scrollSnaps.map((_, index) => (
          <div
            className={`embla__dot block ${
              selectedIndex === index
                ? "bg-blue-500 h-4 w-4 mx-4"
                : "bg-neutral-200 h-2 w-2 mx-5 hover:bg-blue-500 hover:h-4 hover:w-4 hover:mx-4"
            } transition-transform duration-200 rounded-full
            my-0`}
            key={index}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </section>
  );
}
