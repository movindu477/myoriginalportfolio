import React from 'react';
import { Star } from 'lucide-react';

const ServicesStrip = () => {
    const services = [
        "React Development",
        "Laravel API",
        "Flutter Mobile Apps",
        "UI/UX Design",
        "Full-Stack Engineering"
    ];

    // Duplicate the list for seamless looping if needed, or just repeat enough times to fill width
    const items = [...services, ...services, ...services, ...services];

    return (
        <div className="w-full bg-black py-3 overflow-hidden flex items-center relative z-20 border-y border-white/10">
            {/* 
        Implementation of a simple CSS Marquee.
        We use two identical sets of items and translate them.
      */}
            <style>
                {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
            display: flex;
            width: max-content;
          }
        `}
            </style>

            <div className="animate-marquee">
                {items.map((service, index) => (
                    <div key={index} className="flex items-center mx-6">
                        <span className="text-white text-base sm:text-lg font-medium tracking-wide whitespace-nowrap">
                            {service}
                        </span>
                        <span className="ml-12 text-[#FF5400] text-lg">•</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesStrip;
