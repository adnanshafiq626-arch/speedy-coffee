import React from "react";

interface MarqueeProps {
  text: string;
  repeat?: number;
}

const Marquee: React.FC<MarqueeProps> = ({ text, repeat = 3 }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-marquee">
        {Array.from({ length: repeat }).map((_, i) => (
          <span key={i} className="mx-4">
            {text}
          </span>
        ))}
      </div>
      <div className="inline-block animate-marquee" aria-hidden="true">
        {Array.from({ length: repeat }).map((_, i) => (
          <span key={`clone-${i}`} className="mx-4">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;