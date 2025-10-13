import React from "react";
import { motion } from "motion/react";

const brands = [
  {
    name: "Google",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  },
  {
    name: "Microsoft",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Apple",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
  },
  {
    name: "Meta",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg",
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    name: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
  },
  {
    name: "Adobe",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg",
  },
  {
    name: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg",
  },
  {
    name: "Shopify",
    logo: "https://logos-world.net/wp-content/uploads/2020/11/Shopify-Logo.png",
  },
];

export function ScrollingBrandLogos() {
  return (
    <div className="bg-background py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join thousands of companies that trust our services
          </p>
        </div>

        {/* Scrolling Animation Container */}
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
          
          {/* Scrolling Content */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-8 sm:gap-12 lg:gap-16 min-w-max"
              animate={{
                x: [0, -100 * brands.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {/* First set of logos */}
              {brands.map((brand, index) => (
                <div
                  key={`first-${index}`}
                  className="flex items-center justify-center flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                    style={{
                      filter: "grayscale(100%) brightness(0.5)",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.filter = "grayscale(0%) brightness(1)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.filter = "grayscale(100%) brightness(0.5)";
                    }}
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {brands.map((brand, index) => (
                <div
                  key={`second-${index}`}
                  className="flex items-center justify-center flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                    style={{
                      filter: "grayscale(100%) brightness(0.5)",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.filter = "grayscale(0%) brightness(1)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.filter = "grayscale(100%) brightness(0.5)";
                    }}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScrollingBrandLogos;