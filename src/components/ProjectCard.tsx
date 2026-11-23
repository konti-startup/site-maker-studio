import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProjectCardProps {
  image: string;
  category: string;
  categoryColor: "green" | "orange" | "blue";
  title: string;
  date: string;
  description: string;
  /** Texto completo exibido ao clicar no card. */
  detail?: string;
}

const ProjectCard = ({
  image,
  category,
  categoryColor,
  title,
  date,
  description,
  detail,
}: ProjectCardProps) => {
  const categoryColorClass = {
    green: "text-primary",
    orange: "text-accent",
    blue: "text-blue-500",
  };

  const inner = (
    <>
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="project-card-image transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="project-card-content">
        <span className={`card-category ${categoryColorClass[categoryColor]}`}>{category}</span>
        <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-2 mb-1">{title}</h3>
        <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">{date}</p>
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-3">{description}</p>
        {detail ? (
          <p className="text-xs text-primary font-medium mt-2 sm:mt-3">Clique para ler mais</p>
        ) : null}
      </div>
    </>
  );

  if (detail) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <article
            className="project-card group cursor-pointer text-left w-full"
            aria-label={`Ler mais sobre ${title}`}
          >
            {inner}
          </article>
        </DialogTrigger>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="pr-8">{title}</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-foreground leading-relaxed">{detail}</p>
        </DialogContent>
      </Dialog>
    );
  }

  return <article className="project-card group">{inner}</article>;
};

export default ProjectCard;
