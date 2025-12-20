import React from 'react';
import Icon from './Icon';
import type { ButtonVariant, ButtonSize } from '../../types/types';

interface ButtonProps {
    children: React.ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    icon?: string;
    iconPosition?: 'left' | 'right';
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    icon,
    iconPosition = 'right',
    onClick,
    type = 'button',
    className = '',
    fullWidth = false,
}) => {
    const baseStyles = 'rounded-full font-bold transition-all flex items-center gap-2 justify-center';

    const variantStyles = {
        primary: 'bg-gray-900 dark:bg-white text-white dark:text-black hover:shadow-xl',
        secondary: 'border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800',
        ghost: 'hover:text-primary',
    };

    const sizeStyles = {
        sm: 'px-5 py-2 text-sm',
        md: 'px-6 py-2 text-sm',
        lg: 'px-8 py-4 text-lg',
    };

    const widthStyle = fullWidth ? 'w-full' : '';

    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`;

    return (
        <button type={type} onClick={onClick} className={combinedStyles}>
            {icon && iconPosition === 'left' && (
                <Icon name={icon} className="group-hover:translate-x-1 transition-transform" />
            )}
            {children}
            {icon && iconPosition === 'right' && (
                <Icon name={icon} className="group-hover:translate-x-1 transition-transform" />
            )}
        </button>
    );
};

export default Button;
