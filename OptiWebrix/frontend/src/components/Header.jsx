import { useState, useEffect } from "react"
import { useTheme } from "../components/theme-provider"
import { motion } from "framer-motion"
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

import logo from "../assets/webcross-white-logo.png"
import logoBlack from "../assets/webcross-logo.png"


import { Link } from "react-router-dom"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [activeTab, setActiveTab] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => setMounted(true), [])

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Set active tab from URL hash or localStorage on load
  useEffect(() => {
    const savedTab = localStorage.getItem("activeTab") || window.location.hash.replace("#", "") || "Work"
    setActiveTab(savedTab)
  }, [])

  // Update active tab and save to localStorage
  const handleTabClick = (tab) => {
    setActiveTab(tab)
    localStorage.setItem("activeTab", tab)
    setIsMobileMenuOpen(false) // Close mobile menu when tab is clicked
  }

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <motion.header
      className={`fixed top-0 z-40 w-full transition-all text-center duration-75 ${
        isScrolled ? "h-20 bg-opacity-90 shadow-md rounded-full my-2" : "h-20"
      } bg-background/80 backdrop-blur-md`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 h-full" aria-label="Global">
        <motion.div
          className="flex lg:flex-1 transition-all"
        >
          <a onClick={() => handleTabClick("Home")} href="/" className="-m-1.5 p-1.5 flex items-center gap-x-2">
            <img
              className={`transition-all duration-300 ${
                isScrolled 
                  ? "lg:ml-32 h-6 sm:h-8" 
                  : "h-8 sm:h-12"
              } w-auto object-contain`}
              src={theme === "dark" ? logo : logoBlack}
              alt="WebCross Logo"
              onError={(e) => {
                console.log('Logo failed to load:', e.target.src);
                e.target.style.display = 'none';
              }}
            />
            <h1 className={`font-bold transition-all ${
              isScrolled 
                ? "text-base sm:text-lg" 
                : "text-lg sm:text-xl"
            }`}>OptiWebrix</h1>
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center items-center gap-x-12 transition-all duration-700">
        <Link
              to="/"
              onClick={() => handleTabClick("Home")}
              className={`text-sm hover:border hover:border-zinc-600 py-1 px-4 rounded-sm mx-2 my-2  hover:text-yellow-600 transition-all font-semibold leading-6 ${
                activeTab === "Home" ? "text-yellow-500" : "text-foreground hover:text-primary"
              }`}
            >
              Home
            </Link>
          {["Work", "About", "Contact"].map((tab) => (
            <Link
              key={tab}
              to={`${tab.toLowerCase()}`}
              onClick={() => handleTabClick(tab)}
              className={`text-sm hover:text-yellow-600 hover:border hover:border-zinc-600 py-1 px-4 mx-2 my-2 rounded-sm transition-all font-semibold leading-6                ${
                activeTab === tab ? "text-yellow-500 " : "text-foreground hover:text-primary"
              }`}
            >
              {tab}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md text-foreground hover:text-yellow-600 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        <motion.div
          className="hidden md:flex flex-1 justify-end transition-all duration-300"
          animate={{ scale: isScrolled ? 0.85 : 1 }}
        >
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`px-4 py-2 shadow-md rounded-full transition-all duration-300 dark:bg-[#1a1a1a] ${
                isScrolled ? "bg-gray-300 mr-32" : "bg-gray-200"
              }`}
            >
              {theme === "dark" ? <SunIcon className="w-5 h-5 text-yellow-400" /> : <MoonIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />}
            </button>
          )}
        </motion.div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 dark:bg-slate-800/95 backdrop-blur-lg border-t border-yellow-500/20 shadow-xl"
        >
          <div className="px-4 py-4 space-y-2">
            <Link
              to="/"
              onClick={() => handleTabClick("Home")}
              className={`block px-4 py-3 rounded-md text-sm font-semibold transition-all ${
                activeTab === "Home" 
                  ? "text-yellow-500 bg-yellow-500/10" 
                  : "text-foreground hover:text-yellow-600 hover:bg-yellow-500/5"
              }`}
            >
              Home
            </Link>
            {["Work", "About", "Contact"].map((tab) => (
              <Link
                key={tab}
                to={`${tab.toLowerCase()}`}
                onClick={() => handleTabClick(tab)}
                className={`block px-4 py-3 rounded-md text-sm font-semibold transition-all ${
                  activeTab === tab 
                    ? "text-yellow-500 bg-yellow-500/10" 
                    : "text-foreground hover:text-yellow-600 hover:bg-yellow-500/5"
                }`}
              >
                {tab}
              </Link>
            ))}
            {mounted && (
              <div className="pt-2 border-t border-border">
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-md text-sm font-semibold text-foreground hover:text-yellow-600 hover:bg-yellow-500/5 transition-all"
                >
                  {theme === "dark" ? (
                    <>
                      <SunIcon className="w-5 h-5" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <MoonIcon className="w-5 h-5" />
                      Dark Mode
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
