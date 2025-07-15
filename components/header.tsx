"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg backdrop-blur-md" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Top Bar */}
      <motion.div
        className={`bg-gray-100 py-1 sm:py-2 text-xs sm:text-sm transition-all duration-300 ${
          isScrolled ? "py-0.5 sm:py-1" : ""
        }`}
      >
        <div className="container mx-auto px-2 sm:px-4">
          <div className="flex flex-wrap justify-between items-center gap-3">
            {/* Contact Info */}
            <motion.div
              className="flex flex-wrap items-center gap-2 text-gray-600"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.a
                href="tel:9707191358"
                className="flex items-center gap-1 hover:text-[#0a4936] transition-colors text-xs sm:text-sm"
                whileHover={{ scale: 1.05 }}
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">9707191358, 9860001697</span>
                <span className="sm:hidden">Call Us</span>
              </motion.a>

              <motion.a
                href="https://maps.app.goo.gl/krC5iZZo9X2VUMiS7"
                target="_blank"
                className="flex items-center gap-1 hover:text-[#0a4936] transition-colors text-xs sm:text-sm"
                whileHover={{ scale: 1.05 }}
              >
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden md:inline">Banepa - 5, Kavre</span>
                <span className="md:hidden">Location</span>
              </motion.a>

              <motion.a
                href="mailto:siddharthavanasthalipaanaut@gmail.com"
                className="hidden lg:flex items-center gap-1 hover:text-[#0a4936] transition-colors text-xs sm:text-sm"
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="w-4 h-4" />
                <span>siddharthavanasthalipaanaut@gmail.com</span>
              </motion.a>
            </motion.div>

            {/* Logos and Socials */}
            <motion.div
              className="flex flex-wrap items-center gap-2"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-1 sm:gap-2">
                <img src="svi.png" alt="SVI" className="w-10 h-auto" />
                <img
                  src="annapurna.png"
                  alt="Annapurna"
                  className="w-10 h-auto"
                />
                <img src="ku.png" alt="KU" className="w-10 h-auto" />
              </div>
              <div className="flex items-center gap-2 ml-2">
                {[
                  {
                    Icon: Facebook,
                    url: "https://www.facebook.com/schoolofaviationmanagement",
                  },
                  {
                    Icon: Youtube,
                    url: "https://www.youtube.com/@sviofficial",
                  },
                  {
                    Icon: Instagram,
                    url: "https://www.instagram.com/svi.undergrad/?igsh=MXZiNXM2a3JnY3E2aQ%3D%3D#",
                  },
                ].map(({ Icon, url }, i) => (
                  <motion.a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-[#0a4936] transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Navigation */}
      <motion.nav
        className={`bg-[#701719] shadow-lg transition-all duration-300 ${
          isScrolled ? "bg-[#701719]/95 backdrop-blur-md" : "bg-[#701719]"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <div className="container mx-auto px-2 sm:px-4">
          <div className="flex justify-between items-center py-2 sm:py-4">
            {/* Logo */}

            <Link href="/" className="flex items-center gap-2 sm:gap-3">
              <div className="text-white"></div>
            </Link>

            {/* Desktop Navigation */}
            <motion.div
              className="hidden lg:flex items-center space-x-6 xl:space-x-8"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -2 }}
              >
                <Link
                  href="/"
                  className="text-white hover:text-[#ffc001] transition-colors relative group"
                >
                  Home
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-[#ffc001] w-0 group-hover:w-full transition-all duration-300"
                    layoutId="underline"
                  />
                </Link>
              </motion.div>

              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ y: -2 }}
                className="relative z-10"
              >
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-white hover:text-[#ffc001] transition-colors">
                    About Us <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-56 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                    align="start"
                    sideOffset={5}
                  >
                    <DropdownMenuItem asChild>
                      <Link href="/about" className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#0a4936] rounded-full"></div>
                        Overview
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/about#vision"
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-[#ffc001] rounded-full"></div>
                        Vision & Mission
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/about#history"
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-[#701719] rounded-full"></div>
                        History
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/about#principal"
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-[#0a4936] rounded-full"></div>
                        Principal's Message
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/about#governance"
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-[#ffc001] rounded-full"></div>
                        Governance
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/about#affiliations"
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-[#701719] rounded-full"></div>
                        Affiliations
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/about#infrastructure"
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-[#0a4936] rounded-full"></div>
                        Infrastructure
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </motion.div>

              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ y: -2 }}
                className="relative z-10"
              >
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-white hover:text-[#ffc001] transition-colors">
                    Our Courses <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-64 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                    align="start"
                    sideOffset={5}
                  >
                    <DropdownMenuItem asChild>
                      <Link
                        href="/programs"
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-[#0a4936] rounded-full"></div>
                        All Programs
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/programs#aviation-management"
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-[#ffc001] rounded-full"></div>
                        Aviation Management (BAM)
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/programs#aeronautical-engineering"
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-[#701719] rounded-full"></div>
                        Aeronautical Engineering
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/programs#air-traffic-management"
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-[#0a4936] rounded-full"></div>
                        Air Traffic Management
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/programs#aviation-technology"
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-[#ffc001] rounded-full"></div>
                        Aviation Technology
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/programs#pilot-training"
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-[#701719] rounded-full"></div>
                        Pilot Training
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/programs#aviation-business"
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-[#0a4936] rounded-full"></div>
                        Aviation Business
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/programs#faculty"
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-[#ffc001] rounded-full"></div>
                        Faculty Members
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/programs#calendar"
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-[#701719] rounded-full"></div>
                        Academic Calendar
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </motion.div>

              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                whileHover={{ y: -2 }}
                className="relative z-10"
              >
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-white hover:text-[#ffc001] transition-colors">
                    Admissions <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-56 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                    align="start"
                    sideOffset={5}
                  >
                    <DropdownMenuItem asChild>
                      <Link
                        href="/admissions"
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-[#0a4936] rounded-full"></div>
                        Admission Process
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/admissions#why-choose-us"
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-[#ffc001] rounded-full"></div>
                        Why Choose Us
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/admissions#eligibility"
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-[#701719] rounded-full"></div>
                        Eligibility Criteria
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/admissions#fees"
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-[#0a4936] rounded-full"></div>
                        Fee Structure
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/admissions#scholarships"
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-[#ffc001] rounded-full"></div>
                        Scholarships
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/admissions#application"
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-[#701719] rounded-full"></div>
                        Apply Online
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/admissions#faq"
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-[#0a4936] rounded-full"></div>
                        FAQ
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </motion.div>

              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                whileHover={{ y: -2 }}
                className="relative z-10"
              >
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-white hover:text-[#ffc001] transition-colors">
                    Resources <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-56 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                    align="start"
                    sideOffset={5}
                  >
                    <DropdownMenuItem asChild>
                      <Link
                        href="/resources"
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-[#0a4936] rounded-full"></div>
                        All Resources
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/resources#library"
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-[#ffc001] rounded-full"></div>
                        Digital Library
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/resources#lms"
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-[#701719] rounded-full"></div>
                        E-Learning / LMS
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/resources#downloads"
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-[#0a4936] rounded-full"></div>
                        Downloads
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/resources#pdf-resources"
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-[#ffc001] rounded-full"></div>
                        PDF Resources
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/resources#publications"
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-[#701719] rounded-full"></div>
                        Publications
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/resources#useful-links"
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-[#0a4936] rounded-full"></div>
                        Useful Links
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </motion.div>

              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
                whileHover={{ y: -2 }}
              >
                <Link
                  href="/contact"
                  className="text-white hover:text-[#ffc001] transition-colors relative group"
                >
                  Contact Us
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-[#ffc001] w-0 group-hover:w-full transition-all duration-300"
                    layoutId="underline"
                  />
                </Link>
              </motion.div>
            </motion.div>

            {/* Apply Now Button */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="hidden lg:block bg-[#0a4936] hover:bg-[#0a4936]/90 text-white relative overflow-hidden group text-sm xl:text-base px-4 xl:px-6">
                <span className="relative z-10">APPLY NOW</span>
                <motion.div
                  className="absolute inset-0 bg-[#ffc001]"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="lg:hidden bg-[#701719] border-t border-[#701719]/20"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="py-4 space-y-2 max-h-[70vh] overflow-y-auto"
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {[
                    { href: "/", label: "Home" },
                    { href: "/about", label: "About Us" },
                    { href: "/programs", label: "Our Courses" },
                    { href: "/admissions", label: "Admissions" },
                    { href: "/resources", label: "Resources" },
                    { href: "/contact", label: "Contact Us" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="block text-white hover:text-[#ffc001] px-4 py-3 transition-colors border-b border-[#701719]/20 last:border-b-0"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    className="px-4 pt-2"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Button className="w-full bg-[#0a4936] hover:bg-[#0a4936]/90 text-white">
                      APPLY NOW
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </motion.header>
  );
}
