import { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  value: string;
  label: string;
}

const StatCard = ({ icon, value, label }: StatCardProps) => {
  return (
    <div className="bg-secondary rounded-lg p-8 text-center">
      <div className="w-12 h-12 mx-auto mb-4 text-primary">
        {icon}
      </div>
      <p className="stat-value mb-2">{value}</p>
      <p className="stat-label">{label}</p>
    </div>
  );
};

export default StatCard;
