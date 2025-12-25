import React from "react";
import FormInput from "./cta/FormInput";

const CTASection: React.FC = () => {
  return (
    <section className="bg-[#111111] text-white py-24 px-6 relative overflow-hidden font-sans border-t border-white/5">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        {/* Floating Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-mono font-bold uppercase tracking-widest mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          First Time Customer Offer
        </div>

        <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 text-white leading-none">
          Faster mornings <br />
          <span className="text-gray-500">start here.</span>
        </h2>

        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl mx-auto font-light leading-relaxed">
          Fresh coffee, first access, and <span className="text-primary font-medium">10% off</span> your first bag. No clutter, just high-octane fuel.
        </p>

        <form className="max-w-lg mx-auto space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormInput type="text" placeholder="First Name" required />
            <FormInput type="email" placeholder="Email Address" required />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-black font-bold text-lg rounded-2xl px-8 py-4 hover:bg-lime-400 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-[0_0_20px_rgba(163,230,53,0.2)] flex items-center justify-center gap-2 group"
          >
            Get My Discount
            <span className="material-icons-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </form>

        <p className="mt-6 text-xs text-gray-600">
          We respect your inbox. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default CTASection;