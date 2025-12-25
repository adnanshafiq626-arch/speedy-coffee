import React from "react";
import Marquee from "./Marquee";
import ProductCard from "./hero/ProductCard";
import { products } from "../data/productData";
const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-bg-hero dark:bg-bg-hero-dark text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans min-h-screen flex flex-col overflow-hidden pb-24">
      {/* Background Grid Pattern */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Marquee Banner */}
      <div className="mt-28 w-full bg-primary text-black py-2 font-mono text-xs sm:text-sm font-bold tracking-widest uppercase overflow-hidden border-y border-lime-600 relative z-10 rotate-1 transform scale-105 origin-center shadow-lg">
        <Marquee
          text="⚡ Fresh Roasted Daily ⚡ • Ethically Sourced Beans • Free Shipping on Orders over $50 • Use Code: SPEEDY20 for 20% Off •"
          repeat={4}
        />
      </div>

      <main className="flex-grow flex flex-col items-center justify-center pt-16 px-4 relative z-0">
        <div className="text-center max-w-7xl mx-auto space-y-4">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-medium tracking-tighter leading-none text-gray-900 dark:text-white">
            <span className="block mb-2 md:mb-0">Brew Faster</span>
            <div className="flex items-center justify-center gap-2 md:gap-6 flex-wrap">
              <span className="relative inline-block">
                <span className="absolute -inset-1 bg-secondary blur-lg opacity-30 rounded-full"></span>
                <span
                  className="relative text-secondary material-icons-outlined text-6xl md:text-8xl lg:text-9xl animate-spin-slow"
                  style={{ animationDuration: "10s" }}
                >
                  local_cafe
                </span>
              </span>
              <span>Taste Better</span>
            </div>
          </h1>

          <div className="mt-12 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            Premium caffeine delivered at the
            <span className="inline-block bg-gray-200 dark:bg-surface-dark px-3 py-1 rounded-md text-gray-900 dark:text-gray-100 font-medium mx-1 border border-gray-300 dark:border-gray-700 shadow-sm">
              speed of light
            </span>
            . Sustainable sourcing,
            <span className="inline-block bg-gray-200 dark:bg-surface-dark px-3 py-1 rounded-md text-gray-900 dark:text-gray-100 font-medium mx-1 border border-gray-300 dark:border-gray-700 shadow-sm">
              expert roasts
            </span>
            , and flavor that keeps you moving.
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group bg-gray-900 dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all flex items-center gap-2">
              Start Subscription
              <span className="material-icons-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
            <button className="px-8 py-4 rounded-full font-medium text-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all flex items-center gap-2">
              <span className="material-icons-outlined">play_circle</span>
              Our Story
            </button>
          </div>
        </div>

        {/* 3D Cards Section */}
        <div className="mt-24 w-full max-w-7xl relative perspective-1000">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200 dark:bg-gray-800 -z-10"></div>
          <div className="flex flex-col md:flex-row justify-center items-end gap-8 md:gap-12">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[20vw] font-bold text-gray-900/5 dark:text-white/5 pointer-events-none z-[-1] whitespace-nowrap select-none">
        SPEEDY
      </div>
    </section>
  );
};

export default HeroSection;