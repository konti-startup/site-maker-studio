import { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  value: string;
  label: string;
}

const StatCard = ({ icon, value, label }: StatCardProps) => {
  return (
    <div className="bg-secondary rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-primary">
        {icon}
      </div>
      <p className="stat-value mb-2">{value}</p>
      <p className="stat-label">{label}</p>
    </div>
  );
};

export default StatCard;
