import React from "react";
import { motion } from "motion/react";

export const DrawCircleText = () => {
  return (
    <div className="grid place-content-center bg-background px-4 py-24 text-foreground">
      <h1 className="max-w-2xl text-center text-5xl leading-snug font-bold">
        Transform your{" "}
        <span className="relative">
          <span className="bg-gradient-to-r from-[rgb(180,96,0)] via-[rgb(200,120,30)] to-[rgb(160,80,0)] text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(200,120,30,0.5)] filter dark:brightness-110 dark:from-[rgb(255,212,21)] dark:via-[rgb(253,233,170)] dark:to-[rgb(245,142,24)] dark:drop-shadow-[0_0_20px_rgba(255,212,21,0.4)] dark:filter brightness-125">
            Dreams
          </span>
          <svg
            viewBox="0 0 286 73"
            fill="none"
            className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                duration: 1.25,
                ease: "easeInOut",
              }}
              d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
              stroke="rgb(255,212,21)"
              strokeWidth="3"
            />
          </svg>
        </span>{" "}
        into Reality
      </h1>
    </div>
  );
};

export default DrawCircleText;