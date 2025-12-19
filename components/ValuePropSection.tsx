import React from "react";

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
          {/* Feature 1: Speed */}
          <div className="group p-8 rounded-3xl bg-bg-hero dark:bg-[#202023] hover:bg-white dark:hover:bg-[#252528] border border-transparent hover:border-gray-200 dark:hover:border-gray-700 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
              <span className="material-icons-outlined text-3xl">
                rocket_launch
              </span>
            </div>
            <h3 className="text-2xl font-bold font-display mb-4">
              Roasted & Shipped Same-Day
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
              Orders placed by 2 PM ship immediately. Peak freshness isn't just
              a luxury—it's our standard operating procedure.
            </p>
          </div>

          {/* Feature 2: Quality */}
          <div className="group p-8 rounded-3xl bg-bg-hero dark:bg-[#202023] hover:bg-white dark:hover:bg-[#252528] border border-transparent hover:border-gray-200 dark:hover:border-gray-700 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-8 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
              <span className="material-icons-outlined text-3xl">diamond</span>
            </div>
            <h3 className="text-2xl font-bold font-display mb-4">
              Data-Driven Flavor Profiles
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
              Our roast profiles are calibrated to the second using AI monitoring, ensuring maximum clarity and body in every cup.
            </p>
          </div>

          {/* Feature 3: Convenience */}
          <div className="group p-8 rounded-3xl bg-bg-hero dark:bg-[#202023] hover:bg-white dark:hover:bg-[#252528] border border-transparent hover:border-gray-200 dark:hover:border-gray-700 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-8 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
              <span className="material-icons-outlined text-3xl">sync</span>
            </div>
            <h3 className="text-2xl font-bold font-display mb-4">
              Refills on Autopilot
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
              Flexible subscriptions that adapt to your consumption speed. Pause,
              skip, or accelerate with one tap. No friction.
            </p>
          </div>
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