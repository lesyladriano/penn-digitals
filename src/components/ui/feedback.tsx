"use client";
import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
import { FEEDBACK_DATA } from "./feedback-img";
import Autoplay from "embla-carousel-autoplay";

export default function feedback() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <div className="flex w-full  py-8 md:py-16 bg-[#FBF3EE]">
      <section className="w-full flex justify-center">
        <div className="md:flex  md:justify-center  items-center justify-center md:space-x-10
         md:px-[2rem] lg:px-[2rem] px-[1rem]">
          <div className=" md:w-20% ">
            <div className="font-satisfy lg:whitespace-nowrap text-[2.3rem] md:text-4xl lg:text-5xl  text-center md:text-start text-[#366776]">
              What People Say
            </div>
            <div className="font-[Poppins] py-9 text-center text-sm md:text-base md:text-start">
              Discover the stories behind our satisfied customers.
              <br/>
             
              <div>
              
              </div>
            </div>
          </div>
          <div className="flex md:w-80% justify-center">
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-sm lg:max-w-lg xl:max-w-4xl"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {FEEDBACK_DATA.map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/2">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-1">
                        <Image src={_.img} alt={`something ${index}`} />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}
