"use client";

import { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { testimonialsMock } from "./mock.js";

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes())
    }
  }, [emblaApi])
  
  return (
    <div>
      aaa
      <div className="embla" ref={emblaRef}>
      <div className="embla__container flex">
        {testimonialsMock.map((item) => {
          return (
            <div className="embla__slide w-max md:w-1/2 lg:w-1/3" key={item.id}>{item.id}</div>
          )
        })}
      </div>
      </div>
    </div>
  );
}
