import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { SectionHeading } from "@/components/ui/section-heading";

// Fonts
import { secondary } from "@/app/fonts";

// Icons
import { Star } from "lucide-react";

// Utils
import { cn } from "@/lib/utils";

// Types
import { Testimonial } from "@/types";


const Testimonials = ({ data }: { data: Testimonial[] }) => {
  return (
    <div className="text-primary">

      <SectionHeading
      className="mb-2.5 lg:mb-5 text-left"
      smallText="Resultados reales"
      title="Más de 20 años distribuyendo productos a profesionales de estética ✌️"
      />

      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="gap-3 mt-4 ">
          {data.map((item) => {
            return (
              <CarouselItem
                key={item.id}
                className="md:basis-2/5 flex flex-col justify-between min-h-80 border border-primary/20 bg-white p-10 rounded-md relative items-center"
              >
                <div>
                  <ul className="flex justify-center w-full">
                    <li>
                      <div className="flex justify-center mb-2">
                        <Stars />
                      </div>
                      <span className="font-bold text-sm block">
                        Opinion en {item.reviewFont}
                      </span>
                    </li>
                  </ul>
                </div>
                <p
                  className={cn(
                    secondary.className,
                    "text-primary text-center"
                  )}
                >
                  {item.content}
                </p>

                <h4 className={cn(secondary.className, "text-center")}>
                  - {item.name}
                </h4>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

function Stars() {
  return Array.from({ length: 5 }).map((_, index) => (
    <Star key={index} className="w-4 h-4 fill-primary" strokeWidth={0} />
  ));
}

export default Testimonials;
