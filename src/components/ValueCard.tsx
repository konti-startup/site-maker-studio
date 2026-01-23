import { ReactNode } from "react";

interface ValueCardProps {
  icon: ReactNode;
  iconColor: string;
  title: string;
  description: string;
}

const ValueCard = ({ icon, iconColor, title, description }: ValueCardProps) => {
  return (
    <div className="value-card">
      <div className={`value-icon ${iconColor}`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default ValueCard;
