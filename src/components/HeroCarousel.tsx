import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface HeroCarouselProps {
  slides: {
    image: string;
    title: string;
    subtitle?: string;
  }[];
  showButton?: boolean;
  buttonText?: string;
}

const HeroCarousel = ({ slides, showButton = false, buttonText = "Saber Mais" }: HeroCarouselProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <section className="relative h-[60vh] sm:h-[70vh] min-h-[400px] sm:min-h-[500px] overflow-hidden">
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container h-full flex">
          {slides.map((slide, index) => (
            <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 relative">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="hero-overlay absolute inset-0" />
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
                <h1 className="hero-title mb-4 sm:mb-6 animate-fade-in">{slide.title}</h1>
                {slide.subtitle && (
                  <p className="hero-subtitle mb-6 sm:mb-8 animate-fade-in px-2">{slide.subtitle}</p>
                )}
                {showButton && (
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-orange-dark text-accent-foreground px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    {buttonText}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Carousel Dots */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex 
                ? 'bg-white scale-110 shadow-lg' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
