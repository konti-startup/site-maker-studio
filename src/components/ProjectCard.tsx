interface ProjectCardProps {
  image: string;
  category: string;
  categoryColor: "green" | "orange" | "blue";
  title: string;
  date: string;
  description: string;
}

const ProjectCard = ({ image, category, categoryColor, title, date, description }: ProjectCardProps) => {
  const categoryColorClass = {
    green: "text-primary",
    orange: "text-accent",
    blue: "text-blue-500",
  };

  return (
    <article className="project-card group cursor-pointer">
      <div className="overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="project-card-image transition-transform duration-500 group-hover:scale-110" 
        />
      </div>
      <div className="project-card-content">
        <span className={`card-category ${categoryColorClass[categoryColor]}`}>
          {category}
        </span>
        <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-2 mb-1">{title}</h3>
        <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">{date}</p>
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-3">{description}</p>
      </div>
    </article>
  );
};

export default ProjectCard;
