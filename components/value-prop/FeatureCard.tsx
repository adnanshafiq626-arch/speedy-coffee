import React from 'react';
import type { Feature } from '../../types/types';

interface FeatureCardProps {
    feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
    return (
        <div className="group p-8 rounded-3xl bg-bg-hero dark:bg-[#202023] hover:bg-white dark:hover:bg-[#252528] border border-transparent hover:border-gray-200 dark:hover:border-gray-700 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className={`w-16 h-16 ${feature.iconBgColor} rounded-2xl flex items-center justify-center mb-8 ${feature.iconColor} ${feature.hoverIconBg} ${feature.hoverIconText} transition-colors duration-300`}>
                <span className="material-icons-outlined text-3xl">
                    {feature.icon}
                </span>
            </div>
            <h3 className="text-2xl font-bold font-display mb-4">
                {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                {feature.description}
            </p>
        </div>
    );
};

export default FeatureCard;
