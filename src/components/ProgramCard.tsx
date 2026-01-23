import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface ProgramCardProps {
  image: string;
  icon: ReactNode;
  iconColor: string;
  title: string;
  description: string;
}

const ProgramCard = ({ image, icon, iconColor, title, description }: ProgramCardProps) => {
  return (
    <article className="project-card group">
      <div className="overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="project-card-image h-48 sm:h-56 transition-transform duration-500 group-hover:scale-110" 
        />
      </div>
      <div className="project-card-content">
        <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
          <div className={`shrink-0 ${iconColor}`}>
            {icon}
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-foreground leading-tight">{title}</h3>
        </div>
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">{description}</p>
        <Button className="bg-primary hover:bg-forest-dark rounded-full text-sm">
          Saiba Mais
        </Button>
      </div>
    </article>
  );
};

export default ProgramCard;
