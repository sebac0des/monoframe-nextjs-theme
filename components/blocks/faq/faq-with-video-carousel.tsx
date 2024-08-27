'use client'

// Components
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardTitle, CardContent, CardOverlay, CardDescription } from '@/components/ui/card'
import { SectionHeading } from "@/components/ui/section-heading";


// Types
import { VideoItem } from "@/types";

// Icons
import { PlayIcon } from "lucide-react";
import { useRef } from "react";

interface Props {
  sectionSmallText: string;
  sectionTitle: string;
  data: VideoItem[];
}

export default function FAQWithVideoCarousel({
  sectionSmallText,
  sectionTitle,
  data,
}: Props) {

  const ref = useRef<HTMLVideoElement>(null)

  const handlePlayVideo = () => {
    if (ref.current) {
      ref.current.play()
      ref.current.requestFullscreen();
      
    }
  };

  return (
    <div className="space-y-6">
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
        <div className="mb-3 flex gap-3">
          <CarouselPrevious className="static translate-y-0 translate-x-0 text-black scale-125 w-fit border-none" />
          <CarouselNext className="static translate-y-0 translate-x-0 text-black scale-125 w-fit border-none" />
        </div>
        <CarouselContent>
          {data.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/3 xl:basis-1/4 rounded-lg">
              <Card>
                <Button
                onClick={handlePlayVideo}
                className="scale-125 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full z-50 shadow-black shadow-lg" size="icon">
                  <PlayIcon className="w-4 h-4 fill-white" />
                </Button>
                <video
                  ref={ref}
                  src={item.videoUrl}
                  poster={item.posterUrl}
></video>
                <CardContent>
                
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.short_desc}</CardDescription>
                </CardContent>
                <CardOverlay />
              </Card>
            </CarouselItem>

          ))}
        </CarouselContent>

      </Carousel>
    </div>
  );
}

