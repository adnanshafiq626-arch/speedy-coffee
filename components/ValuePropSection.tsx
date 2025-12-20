import React from "react";
import FeatureCard from "./value-prop/FeatureCard";
import { features } from "../data/featureData";

const ValuePropSection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-[#18181b] text-gray-900 dark:text-gray-100 py-24 px-6 relative overflow-hidden font-sans border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-mono text-xs font-bold tracking-widest uppercase mb-4 block">
            Why Speedy?
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight leading-tight">
            Uncompromising Speed. <br />
            <span className="text-gray-400 dark:text-gray-600">
              Unmatched Quality.
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed font-light">
            The world moves fast. Your coffee should keep up without cutting
            corners. We've engineered the perfect balance of logistics and
            luxury.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <button className="group inline-flex items-center gap-2 text-gray-900 dark:text-white font-bold text-lg hover:text-primary transition-colors">
            <span className="border-b-2 border-primary/50 group-hover:border-primary pb-0.5 transition-colors">
              See How It Works
            </span>
            <span className="material-icons-outlined text-xl group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValuePropSection;