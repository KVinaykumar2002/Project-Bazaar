import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Custom Design",
    description:
      "Every website we create is uniquely tailored to your brand. We don't use templates—we craft custom designs that reflect your vision and connect with your audience. Your story deserves a one-of-a-kind digital presence.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-white p-8 text-center">
        Custom Design
      </div>
    ),
  },
  {
    title: "Responsive & Modern",
    description:
      "Your website will look stunning on every device. We build with mobile-first principles and modern web standards to ensure seamless experiences across all screen sizes. Beautiful design meets flawless functionality.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-white p-8 text-center">
        Responsive & Modern
      </div>
    ),
  },
  {
    title: "Performance Optimized",
    description:
      "Speed matters. We optimize every aspect of your website for lightning-fast load times and smooth interactions. Better performance means better user experience, higher engagement, and improved search rankings.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-white p-8 text-center">
        Performance Optimized
      </div>
    ),
  },
  {
    title: "Ongoing Support",
    description:
      "We're here for the long haul. From launch to growth, we provide continuous support, updates, and improvements. Your success is our success, and we're committed to helping your digital presence thrive.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-white p-8 text-center">
        Ongoing Support
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <section className="bg-gradient-to-b from-secondary/20 to-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">What We Offer</h2>
        <StickyScroll content={content} />
      </div>
    </section>
  );
}

