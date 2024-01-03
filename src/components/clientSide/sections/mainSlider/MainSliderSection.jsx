"use client";

import useEmblaCarousel from "embla-carousel-react";
import { mainSliderMock } from "./mock.js";
import { useState, useCallback, useEffect } from "react";

function handleViewProperties(item) {
  alert("TODO");
}

export default function MainSliderSection() {
  //All the stuff needed for the carousel to function
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });
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
  //End of that, returning to usual Next.js stuff

  return (
    <div>
      <div className="embla">
        <div className="embla__viewport overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {mainSliderMock.map((item) => {
              return (
                <div
                  className="embla__slide flex items-start flex-[0_0_100%] flex-col px-2 md:px-16 lg:px-32 pt-32"
                  style={{
                    backgroundImage: `url(${item.picture})`,
                  }}
                  key={item.id}
                >
                  <div className="lg:w-1/2">
                    <div className="flex items-center mb-8">
                      <div className="h-1 w-8 md:w-16 bg-white mr-6" />
                      <p className="text-white text-2xl md:text-3xl font-bold">
                        {item.titleUpper}
                      </p>
                    </div>
                    <p className="text-white text-3xl md:text-5xl font-bold mb-8">
                      {item.titleLower}
                    </p>
                    <p className="text-white mb-8">{item.desc}</p>
                    <button
                      className="text-white bg-blue-500 hover:bg-neutral-800 transition duration-500 px-10 py-3 rounded-md mb-16 md:mb-32"
                      onClick={(item) => handleViewProperties(item)}
                    >
                      {item.buttonText}
                    </button>
                  </div>
                  <div className="embla__navigator flex justify-center items-center mb-4 align-bottom w-full lg:w-min">
                    {scrollSnaps.map((_, index) => (
                      <div
                        className={`embla__dot flex items-center justify-center text-white ${
                          selectedIndex === index
                            ? "bg-opacity-40 bg-black h-8 w-8 mx-3"
                            : "h-8 w-8 hover:font-bold hover:cursor-pointer mx-3"
                        } transition duration-200 rounded-full my-0`}
                        key={index}
                        onClick={() => scrollTo(index)}
                      >
                        {index+1}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
