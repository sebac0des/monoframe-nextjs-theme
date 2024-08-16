// Navigation Components
import Footer from "@/components/footer";
import Topbar from "@/components/topbar";
import Header from '@/components/header'

// Content components
import {MessageBox} from "@/components/ui/message-box";
import { FloatingPopOver} from '@/components/ui/floating-pop-over';
import { VerticalCarousel } from "@/components/ui/vertical-carousel";
import Container from "@/components/ui/container";


// Blocks
import { TargetAudience } from "@/components/blocks/audience/audience";
import FAQWithVideoCarousel from "@/components/blocks/faq/faq-with-video-carousel";
import Hero from "@/components/blocks/hero/simple-hero";
import Questions from "@/components/blocks/faq/simple-faq";
import Testimonials from "@/components/blocks/testimonials";

// Services
import { getTestimonials } from "@/services/testimonials";
import { getHomepageQuestions } from "@/services/faq";
import { getSliderVideos } from '@/services/videos'
import { getBusinessBenefits } from '@/services/benefits'
import { getBusinessAudience } from '@/services/audience'

export default async function Page() {

  const slider_videos = await getSliderVideos()
  const benefits = await getBusinessBenefits()
  const testimonials = await getTestimonials()
  const faq = await getHomepageQuestions()
  const audience = await getBusinessAudience()

  return (

    <main className="min-h-screen bg-alt">

      {/* Show a floating pop over on the screen, ideal to offer quick contact to the user */}
      <FloatingPopOver
      title="¿Tenes una pregunta? ¡Escríbínos!"
      description="Estamos en línea listos para responder tus dudas en WhatsApp."
      buttonText="Si, tengo preguntas!"
      buttonUrl="https://api.whatsapp.com/send?phone=+5491130963298&text=Hola,%20mi%20nombre%20es%20....%20y%20tengo%20una%20duda!"
      smallText="Se abre en whatsapp"
      imageSrc="/images/sebas-call-me.webp"
      imageAlt="@flixor"
      position="right"
    openDelayTime={15000}
/>

      {/* Show header and topbar on sticky navigation bar */}
      <Navigation />

      {/* Show vertical slider with business benefits in loop  */}
      <VerticalCarousel data={benefits} />

      {/* Show hero section */}
      <Hero
        title="¡Mira la lista de precios!"
        beforeAnimatedText="Tenemos los productos mas vendidos de cada rubro."
        animatedText={[
          "Estética.",
          "Masajes.",
          "Depilación.",
          "Cosmetología.",
          "Pedicuria.",
        ]}
        buttonText="Ver lista de precios🔥"
        buttonUrl="#"
      />

      <Container className="px-5 py-10 flex flex-col gap-20" size="5">

        {/* Show a slider with frequently asked questions about your business in video */}
        <FAQWithVideoCarousel
          sectionSmallText="¿Tienes dudas o preguntas?"
          sectionTitle="Te las aclaramos en tu formato favorito, en video ✨"
          data={slider_videos}
        />

        {/* Show target audience section, use for segment your business audience */}
        <TargetAudience
          data={audience}
          sectionSmallText="¿Con quien trabajamos?"
          sectionTitle="Con profesionales y revendedores. ❤️"
        />

        {/* Show message box, use for highlight specific information */}
        <MessageBox
        smallMessage="Hola, soy Sebas👋"
        title="Jalf es el comercio que uso para mostrar"
        linkText="Flixor template."
        linkUrl="https://github.com/sebascallme/flixor-official-theme"
        />
      


        {/* Show testimonial carousel */}
        <Testimonials data={testimonials} />

        {/* Show business questions */}
        <Questions
          sectionSmallText="Preguntas frecuentes"
          sectionTitle="¿Tienes dudas? ¡Te las aclaramos! 👇"
          data={faq}
        />
      </Container>



      <Footer />
    </main>

  );
}

function Navigation() {
  return (
    <div className="sticky top-0 z-50">
      <Topbar
        url="#"
        message="🔥 Descarga la lista de precios vigente →"
      />
      <Header />
    </div>
  );
}
