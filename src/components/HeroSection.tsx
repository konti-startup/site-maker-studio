import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  image: string;
  title: string;
  subtitle?: string;
  showButton?: boolean;
  buttonText?: string;
}

const HeroSection = ({ image, title, subtitle, showButton = false, buttonText = "Saber Mais" }: HeroSectionProps) => {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <h1 className="hero-title mb-6">{title}</h1>
        {subtitle && <p className="hero-subtitle mb-8">{subtitle}</p>}
        {showButton && (
          <Button
            size="lg"
            className="bg-accent hover:bg-orange-dark text-accent-foreground px-8 py-6 text-lg"
          >
            {buttonText}
          </Button>
        )}
      </div>
      
      {/* Carousel Dots (decorative) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
