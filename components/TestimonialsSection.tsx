import React from "react";
import TestimonialCard from "./testimonials/TestimonialCard";
import { testimonials } from "../data/testimonialData";

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-bg-testimonials text-gray-800 py-16 px-6 md:px-12 relative font-sans">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-amber-900 font-bold tracking-wide uppercase text-sm mb-3">
            Customer Love
          </h2>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Brewed for Perfection
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of caffeine enthusiasts who start their day with
            Speedy Coffee.
          </p>
        </div>

        <div className="columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;