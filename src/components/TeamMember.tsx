interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  size?: "large" | "medium" | "small";
}

const TeamMember = ({ image, name, role, size = "medium" }: TeamMemberProps) => {
  const sizeClasses = {
    large: "w-32 h-32",
    medium: "w-20 h-20",
    small: "w-16 h-16",
  };

  return (
    <div className="team-member">
      <img
        src={image}
        alt={name}
        className={`${sizeClasses[size]} rounded-full border-4 border-primary mx-auto mb-3 object-cover`}
      />
      <p className="team-name">{name}</p>
      <p className="team-role">{role}</p>
    </div>
  );
};

export default TeamMember;
