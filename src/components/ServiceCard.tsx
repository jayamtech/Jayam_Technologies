import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features?: string[];
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
}: ServiceCardProps) {
  return (
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
      {/* Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 flex items-center justify-center bg-blue-50 text-blue-600 rounded-full">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-center leading-relaxed">{description}</p>

      {/* Features */}
      {features && features.length > 0 && (
        <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 text-gray-600 pl-5 list-disc place-items-justify-center">
          {features?.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-base">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0 mt-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
