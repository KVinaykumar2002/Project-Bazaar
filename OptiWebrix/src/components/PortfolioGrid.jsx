"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import PhotographyImage from "../assets/Ariffront.png"
import CarwebsiteImage from "../assets/Chalyatifront.png"
import CafefrontImage from "../assets/Cafefront.png"
import RoyalBidFrontimage from "../assets/Royalbidfront.png"
import DvintageImage from "../assets/Dvintagefront.png"
import HoopsfrontImage from "../assets/Hoopsfront.png"

const projects = [
  {
    id: 1,
    title: "Photography Website",
    description: "A visually striking portfolio website to showcase photography work with a clean and minimalist design.",
    imageUrl: PhotographyImage,
    path:"https://arifphotography.in/"
  },
  {
    id: 2,
    title: "Car Website",
    description: "A stylish and responsive website designed to highlight luxury cars with an elegant online presence.",
    imageUrl: CarwebsiteImage,
    path:"https://www.chalyati.com/"
  },
  {
    id: 3,
    title: "Dr. Chai Cafe Website",
    description: "An inviting website for Dr. Chai Cafe, combining modern design with user-friendly navigation to attract cafe lovers.",
    imageUrl: CafefrontImage,
    path:"https://chaicafedev.netlify.app/"
  },
  {
    id: 4,
    title: "Bid Auction Website",
    description: "An interactive and modern website for online auctions, enabling users to bid and explore items seamlessly.",
    imageUrl: RoyalBidFrontimage,
    path:"https://royalbidauction.netlify.app/"
  },
  {
    id: 5,
    title: "D’Vintage Spices Website",
    description: "A vibrant website for D’Vintage Spices, showcasing premium spices with an elegant and traditional aesthetic.",
    imageUrl: DvintageImage,
    path:"https://dvintage-spices.netlify.app/"
  },
  {
    id: 6,
    title: "Hoops Website",
    description: "A dynamic website for Hoops, designed with engaging visuals and smooth user experience for sports enthusiasts.",
    imageUrl: HoopsfrontImage,
    path:"https://deluxe-gumption-e4e2c7.netlify.app/"
  },
]



export default function PortfolioGrid() {


  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Work</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A showcase of our minimalist designs and creative solutions.
          </p>
        </motion.div>

        

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {projects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-background rounded-3xl shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                  >
                    <p className="text-white text-center px-4">{project.description}</p>
                  </motion.div>
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-primary mb-1">{project.category}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <a
                    href={project.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

