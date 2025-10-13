"use client";
import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { LampContainer } from "./ui/lamp";

export function LampDemo() {
  return (
    <LampContainer>
      <div className="m-4">
        <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 50 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-4 bg-gradient-to-br mb-2 from-amber-200 to-amber-600 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Build websites <br /> the right way
      </motion.h1>
      </div>
      <div className="mt-16">
         <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
            {["About", "Work", "Services", "Contact", "Privacy", "Terms"].map((item) => (
              <div key={item} className="pb-6">
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                >
                  {item}
                </Link>
              </div>
            ))}
          </nav>
          <p className="mt-10 text-center text-sm leading-5 text-muted-foreground">
            <Link to="/">
            Designed & Developed with ❤️ by Team OptiWebrix
            </Link>
          </p>
      </div>
    </LampContainer>
  );
}