import React from 'react';
import HeroSection from '../components/HeroSection';
import ValuePropSection from '../components/ValuePropSection';
import TestimonialsSection from '../components/TestimonialsSection';
import LatestArticles from '../components/LatestArticles';
import CTASection from '../components/CTASection';
import SEOHead from '../components/seo/SEOHead';
import StructuredData from '../components/seo/StructuredData';

const HomePage: React.FC = () => {
    return (
        <>
            <SEOHead
                title="Speedy Coffee - Premium Caffeine Delivered at the Speed of Light"
                description="Sustainable sourcing, expert roasts, and flavor that keeps you moving. Get premium coffee delivered fast with Speedy Coffee."
                ogType="website"
            />

            <StructuredData
                type="Organization"
                data={{
                    name: 'Speedy Coffee',
                    url: 'https://speedycoffee.com',
                    logo: 'https://speedycoffee.com/logo.png',
                    description: 'Premium caffeine delivered at the speed of light',
                    email: 'hello@speedycoffee.com'
                }}
            />

            <StructuredData
                type="WebSite"
                data={{
                    name: 'Speedy Coffee',
                    url: 'https://speedycoffee.com',
                    description: 'Premium caffeine delivered at the speed of light'
                }}
            />

            <div className="w-full min-h-screen">
                <HeroSection />
                <ValuePropSection />
                <TestimonialsSection />
                <LatestArticles />
                <CTASection />
            </div>
        </>
    );
};

export default HomePage;
