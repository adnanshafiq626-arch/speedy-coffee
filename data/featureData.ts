import type { Feature } from '../types/types';

export const features: Feature[] = [
    {
        icon: 'rocket_launch',
        iconColor: 'text-primary',
        iconBgColor: 'bg-primary/10',
        hoverIconBg: 'group-hover:bg-primary',
        hoverIconText: 'group-hover:text-black',
        title: 'Roasted & Shipped Same-Day',
        description: 'Orders placed by 2 PM ship immediately. Peak freshness isn\'t just a luxury—it\'s our standard operating procedure.',
    },
    {
        icon: 'diamond',
        iconColor: 'text-secondary',
        iconBgColor: 'bg-secondary/10',
        hoverIconBg: 'group-hover:bg-secondary',
        hoverIconText: 'group-hover:text-white',
        title: 'Data-Driven Flavor Profiles',
        description: 'Our roast profiles are calibrated to the second using AI monitoring, ensuring maximum clarity and body in every cup.',
    },
    {
        icon: 'sync',
        iconColor: 'text-amber-600',
        iconBgColor: 'bg-amber-500/10',
        hoverIconBg: 'group-hover:bg-amber-600',
        hoverIconText: 'group-hover:text-white',
        title: 'Refills on Autopilot',
        description: 'Flexible subscriptions that adapt to your consumption speed. Pause, skip, or accelerate with one tap. No friction.',
    },
];
