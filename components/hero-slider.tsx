"use client"

import * as React from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const sliderImages = [
  { src: "/images/image_1.jpeg", alt: "YOUY GUM - Image 1" },
  { src: "/images/image_2.jpeg", alt: "YOUY GUM - Image 2" },
  { src: "/images/image_3.jpeg", alt: "YOUY GUM - Image 3" },
]

export function HeroSlider() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  return (
    <section className="w-full">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {sliderImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="w-full max-h-[1200px] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1920}
                  height={800}
                  className="h-auto w-full object-contain max-h-[1200px]"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  )
}
