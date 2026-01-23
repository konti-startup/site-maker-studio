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
    <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] min-h-[350px] sm:min-h-[400px] md:min-h-[500px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <h1 className="hero-title mb-4 sm:mb-6">{title}</h1>
        {subtitle && <p className="hero-subtitle mb-6 sm:mb-8">{subtitle}</p>}
        {showButton && (
          <Button
            size="lg"
            className="bg-accent hover:bg-orange-dark text-accent-foreground px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            {buttonText}
          </Button>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
