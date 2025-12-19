import React from "react";
import Marquee from "./Marquee";

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

      {/* Floating Navbar */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <nav className="bg-[#1F1F1F]/95 backdrop-blur-md text-white rounded-full px-2 py-2 flex items-center shadow-2xl border border-gray-800 max-w-2xl w-full justify-between">
          <button className="flex items-center gap-2 px-4 py-2 hover:text-gray-300 transition-colors">
            <span className="material-icons-outlined text-xl">menu</span>
            <span className="font-medium">Menu</span>
          </button>
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <a
              className="text-2xl font-display font-bold tracking-tighter uppercase flex items-center gap-1"
              href="#"
            >
              Speedy<span className="text-primary">.</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-5 py-2 rounded-full font-medium text-sm hover:bg-gray-700 transition-colors hidden sm:block">
              Login
            </button>
            <button className="bg-primary text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-lime-400 transition-colors transform hover:scale-105 duration-200 shadow-[0_0_15px_rgba(163,230,53,0.4)]">
              Order Now
            </button>
          </div>
        </nav>
      </div>

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
            
            {/* Card 1 */}
            <div className="group relative w-full md:w-1/3 aspect-[4/3] bg-coffee-dark rounded-2xl shadow-2xl transform md:-rotate-6 hover:rotate-0 hover:z-20 transition-all duration-500 ease-out overflow-hidden border border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-10"></div>
              <img
                alt="Espresso cup close up dark theme"
                className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkZcE-h2AQ8W5uTJV9ZAi9e5OBXT_m115WU9vocL-ruYNFFu4XUnjINZyWLHZ2rFiTf2X1S-uppB8EGHynWrxt893jClSpehKoc8o2uDBPOFc88ywRNpOjE6V_FSY-sqqVKuYiLlXzyzwyoTFvSB3_qthlHr-lSDVCJw42dTQSF7heGFQb04BQ1amQP5m2BjvSe7iF1shRCb6ppkQCqCxOnm0-MXUKYuPploxmhv27ZoF4Va1LfRmElRvVJb7r8j4eZnnK0WZ44Hk3"
              />
              <div className="absolute bottom-0 left-0 p-6 z-20">
                <p className="text-xs font-mono text-primary mb-1">
                  SINGLE ORIGIN
                </p>
                <h3 className="text-2xl font-display font-bold text-white">
                  Ethiopian Yirgacheffe
                </h3>
                <div className="w-full h-px bg-white/20 my-3"></div>
                <div className="flex justify-between text-gray-300 text-sm">
                  <span>Floral Notes</span>
                  <span>2024 Harvest</span>
                </div>
              </div>
            </div>

            {/* Card 2 (Center) */}
            <div className="group relative w-full md:w-1/3 aspect-[4/3] bg-black rounded-2xl shadow-2xl transform md:-translate-y-12 hover:-translate-y-16 hover:scale-105 z-10 transition-all duration-500 ease-out overflow-hidden border border-gray-800">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
              <img
                alt="Pour over coffee brewing abstract"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo26Oys2hFMv_YLZJJoK0kGqnjefaAAqGMApmGxwMZn6dNWPr-FXoEw1K_qUh8cruTYobdFj3Fqb_tfbOZzI5CIyEfVwhXJ2PjDNJSbImofYAM9PcKRKK3oL_f9iQNx8nt1okTj3rJgO-CvPD3uR4kh-xSvPnKBMk43_BCRh7O88mXpAr6PX9keXeKfAMQNDom3zwxed54cJ__eL7si7OGB08_lk6dOeOEkhA4tS08yNbth-_7BKGbKY23l-tswIsFwiwk1SPxTh9e"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
                <span className="bg-primary text-black px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm shadow-lg">
                  Bestseller
                </span>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 z-20 text-center">
                <h3 className="text-3xl font-display font-bold text-white mb-2">
                  The Morning Jolt
                </h3>
                <p className="text-gray-400 text-sm">
                  Our signature dark roast blend.
                </p>
                <button className="mt-4 bg-white text-black px-6 py-2 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  Quick Add
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative w-full md:w-1/3 aspect-[4/3] bg-[#2E3532] rounded-2xl shadow-2xl transform md:rotate-6 hover:rotate-0 hover:z-20 transition-all duration-500 ease-out overflow-hidden border border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-10"></div>
              <img
                alt="Coffee beans texture dark green background"
                className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbPzuOyAuxP_tKQ8nq-chx2UkBRgHaJIgPR186-XelkvH169XuV86lhj_GJLKWvwfk_VcjlJW9jPwO-g-tkwDEXIF967LqNs9fonuknourG0bOW1Pi1CNWkkHW7NTlSaeZYJrTrM25WKypF0HV0Egc5boe9N8F-TVhLZQ0JNkSTgwxYUhgg4oYtFV5B0Sl_dVTPU29R_GEnsng3dv6Ku5doCfpQ3jt7yGt9fLOyv1Gb6hJY4ryRgU6AQUq3WQjzH7iiBhLTWWllMKL"
              />
              <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                <p className="text-xs font-mono text-primary mb-1">
                  NEW ARRIVAL
                </p>
                <h3 className="text-2xl font-display font-bold text-white text-right">
                  Cold Brew Kit
                </h3>
                <div className="w-full h-px bg-white/20 my-3"></div>
                <div className="flex justify-between text-gray-300 text-sm">
                  <span>Ready in 12h</span>
                  <span>Smooth Finish</span>
                </div>
              </div>
            </div>
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