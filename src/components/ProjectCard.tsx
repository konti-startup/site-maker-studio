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
    <article className="project-card">
      <img src={image} alt={title} className="project-card-image" />
      <div className="project-card-content">
        <span className={`card-category ${categoryColorClass[categoryColor]}`}>
          {category}
        </span>
        <h3 className="text-xl font-semibold text-foreground mt-2 mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3">{date}</p>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </article>
  );
};

export default ProjectCard;
