"use client";

// Carousel imports
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Icons
import { Check } from "lucide-react";

// Types
import { BenefitItem } from "@/types";

interface Props {
  data: BenefitItem[];
}

export function VerticalCarousel(props: Props) {
  return <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4500,
          }),
        ]}
        orientation="vertical"
        className="p-0 bg-primary text-white text-center h-10"
      >
        <CarouselContent className="h-10 p-0 m-0 text-xs xl:text-sm">
          {props.data.map((item) => {
            return (
              <CarouselItem
                key={item.id}
                className="flex items-center justify-center gap-2 p-0 m-0"
              >
                <Check className="text-white w-5 h-5" />
                {item.title}
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
}
