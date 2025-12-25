import React from 'react';

interface CardProps {
    children: React.ReactNode;
    variant?: 'white' | 'rose' | 'amber' | 'dark';
    className?: string;
    hover?: boolean;
}

const Card: React.FC<CardProps> = ({
    children,
    variant = 'white',
    className = '',
    hover = true,
}) => {
    const baseStyles = 'break-inside-avoid p-6 rounded-2xl shadow-sm transition-shadow duration-300';

    const variantStyles = {
        white: 'bg-white border border-gray-100',
        rose: 'bg-rose-50',
        amber: 'bg-amber-50',
        dark: 'bg-bg-hero dark:bg-[#202023]',
    };

    const hoverStyles = hover ? 'hover:shadow-md' : '';

    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${className}`;

    return <div className={combinedStyles}>{children}</div>;
};

export default Card;
