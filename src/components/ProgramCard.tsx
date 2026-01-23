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
    <article className="project-card">
      <img src={image} alt={title} className="project-card-image h-56" />
      <div className="project-card-content">
        <div className="flex items-start gap-3 mb-3">
          <div className={iconColor}>
            {icon}
          </div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>
        <Button className="bg-primary hover:bg-forest-dark">
          Saiba Mais
        </Button>
      </div>
    </article>
  );
};

export default ProgramCard;
