"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useState, useCallback, useEffect } from "react";
import { useCall } from "@/api/apiCalls.js";
import { getRoute } from "@/api/apiRoutes.js";
import { convertToImage } from "@/components/modules/convertToImage";

export default function MainSliderSection({ section }) {
  const { call } = useCall();
  const [sliders, setSliders] = useState([]);

  const fetchSliders = useCallback(async () => {
    const sliders = await call("get", getRoute("slider"), {}, false, false);
    setSliders(sliders);
  }, [call]);

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
    fetchSliders();
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect, fetchSliders]);
  //End of that, returning to usual Next.js stuff

  return (
    <section>
      <div className="embla">
        <div className="overflow-hidden embla__viewport" ref={emblaRef}>
          <div className="flex embla__container">
            {sliders.map((item) => {
              return (
                <div
                  key={item.id}
                  className="embla__slide flex items-start flex-[0_0_100%] flex-col px-2 md:px-16 lg:px-32 pt-32"
                  style={{
                    backgroundImage: `url(${convertToImage(item.image)})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="lg:w-1/2">
                    <div className="flex items-center mb-8">
                      <div className="w-8 h-1 mr-6 bg-white md:w-16" />
                      <h1 className="text-2xl font-bold text-white md:text-3xl">
                        {item.title}
                      </h1>
                    </div>
                    <h2 className="mb-8 text-3xl font-bold text-white md:text-5xl">
                      {item.subtitle}
                    </h2>
                    <p className="mb-8 text-white">{item.text}</p>
                    <button
                      className="px-10 py-3 mb-16 text-white transition duration-500 bg-blue-500 rounded-md hover:bg-neutral-800 md:mb-32"
                      onClick={(item) => handleViewProperties(item)}
                    >
                      VIEW PROPERTIES
                    </button>
                  </div>
                  <div className="flex items-center justify-center w-full mb-4 align-bottom embla__navigator lg:w-min">
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
                        {index + 1}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
