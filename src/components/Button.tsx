import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'success' | 'whatsapp';
  href?: string;
  className?: string;
  icon?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  href,
  className = '',
  icon,
  type = 'button'
}: ButtonProps) {
  const baseClasses = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5";

  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    success: "bg-green-600 text-white hover:bg-green-700",
    whatsapp: "bg-green-500 text-white hover:bg-green-600"
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
        {icon && <span>{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}
