import React from 'react';

interface IconProps {
    name: string;
    className?: string;
    outlined?: boolean;
}

const Icon: React.FC<IconProps> = ({ name, className = '', outlined = true }) => {
    const iconClass = outlined ? 'material-icons-outlined' : 'material-icons';

    return (
        <span className={`${iconClass} ${className}`}>
            {name}
        </span>
    );
};

export default Icon;
