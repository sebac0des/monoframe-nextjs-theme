// Components
import { SectionHeading } from "@/components/ui/section-heading";

import { Card, CardTitle, CardVideo, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


// Types
import { QuestionVideoItem } from "@/types";

interface Props {
  sectionSmallText: string;
  sectionTitle: string;
  data: QuestionVideoItem[];
}

export default function FAQWithVideoCarousel({
  sectionSmallText,
  sectionTitle,
  data,
}: Props) {
  return (
    <div className="flex flex-col gap-5 lg:gap-10">
      <SectionHeading
      title={sectionTitle}
      smallText={sectionSmallText}
      />
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <VideoCarouselIndicators />
        <CarouselContent className="gap-3">
          {data.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/3 xl:basis-1/5 rounded-lg">
              <Card>
                <CardVideo
                  playOnHoverMode
                  poster={item.posterUrl}
                  src={item.videoUrl} />
                <CardContent>
                  <CardTitle className="text-base md:text-sm">{item.title}</CardTitle>
                </CardContent>
              </Card>
            </CarouselItem>

          ))}
        </CarouselContent>

      </Carousel>
    </div>
  );
}

function VideoCarouselIndicators() {
  return <div className="mb-3 flex gap-3">
    <CarouselPrevious className="static translate-y-0 translate-x-0 text-black scale-125 w-fit border-none" />
    <CarouselNext className="static translate-y-0 translate-x-0 text-black scale-125 w-fit border-none" />
  </div>
}

