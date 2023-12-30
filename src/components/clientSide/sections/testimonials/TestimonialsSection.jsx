"use client";

import Image from "next/image.js";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { testimonialsMock } from "./mock.js";

export default function TestimonialsSection() {
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
    <div>
      <p className="text-3xl text-neutral-900 flex text-center justify-center">
        TESTIMONIALS
      </p>
      <div className="embla mx-0 md:mx-32 py-4">
        <div className="embla__viewport overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {testimonialsMock.map((item) => {
              return (
                <div
                  className="embla__slide flex flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_34%] flex-col p-4"
                  key={item.id}
                >
                  <div className="flex">
                    <Image
                      src={item.photo}
                      width="50"
                      height="50"
                      alt="person"
                      className="rounded-full mr-6 mb-6"
                    />
                    <div>
                      <p className="text-neutral-900 text-2xl">
                        {item.clientName}
                      </p>
                      <p className="text-neutral-600">{item.clientType}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-neutral-500 font-thin">
                      {item.testimonialText}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="embla__navigator flex justify-center items-center mt-4">
        {scrollSnaps.map((_, index) => (
          <div
            className={`embla__dot block ${
              selectedIndex === index
                ? "bg-blue-500 h-4 w-4 mx-4"
                : "bg-neutral-200 h-2 w-2 mx-5 hover:bg-blue-500 hover:h-4 hover:w-4 hover:mx-4"
            } transition-all duration-200 rounded-full
            my-0`}
            key={index}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
