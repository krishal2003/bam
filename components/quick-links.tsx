"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  FileText,
  Calendar,
  Users,
  BookOpen,
  Award,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function QuickLinks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const quickLinks = [
    {
      title: "Admissions",
      description: "Apply now for upcoming academic year",
      icon: GraduationCap,
      href: "/admissions",
      color: "bg-[#0a4936]",
      urgent: true,
    },
    {
      title: "Notices",
      description: "Important notices and circulars",
      icon: FileText,
      href: "/notices",
      color: "bg-[#ffc001]",
      urgent: false,
    },
    {
      title: "Events",
      description: "Upcoming events and activities",
      icon: Calendar,
      href: "/events",
      color: "bg-[#701719]",
      urgent: false,
    },
    {
      title: "Faculty",
      description: "Meet our experienced faculty",
      icon: Users,
      href: "/programs#faculty",
      color: "bg-[#0a4936]",
      urgent: false,
    },
    {
      title: "Library",
      description: "Access digital library resources",
      icon: BookOpen,
      href: "/resources#library",
      color: "bg-[#ffc001]",
      urgent: false,
    },
    {
      title: "Placements",
      description: "Career opportunities and placements",
      icon: Award,
      href: "/placements",
      color: "bg-[#701719]",
      urgent: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="py-12 sm:py-16 bg-white relative overflow-hidden"
      ref={ref}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-5 sm:top-10 left-5 sm:left-10 w-16 sm:w-20 h-16 sm:h-20 bg-[#0a4936]/5 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a4936] mb-4">
            Quick Links
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Access important sections and resources quickly
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {quickLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2 },
                }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-2 hover:border-[#0a4936]/20 relative overflow-hidden h-full">
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#0a4936]/5 via-transparent to-[#ffc001]/5"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Urgent indicator animation */}
                  {link.urgent && (
                    <motion.div
                      className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full z-10"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [1, 0.8, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      URGENT
                    </motion.div>
                  )}

                  <CardHeader className="text-center pb-4 relative z-10">
                    <motion.div
                      className={`w-14 sm:w-16 h-14 sm:h-16 ${link.color} text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 relative overflow-hidden`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <IconComponent className="w-7 sm:w-8 h-7 sm:h-8 relative z-10" />
                    </motion.div>

                    <CardTitle className="text-[#0a4936] text-lg sm:text-xl group-hover:text-[#0a4936] transition-colors">
                      {link.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="text-center relative z-10 flex-1 flex flex-col">
                    <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors text-sm sm:text-base flex-1">
                      {link.description}
                    </p>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        asChild
                        className="w-full bg-[#0a4936] hover:bg-[#0a4936]/90 text-white group-hover:bg-[#ffc001] group-hover:text-[#0a4936] transition-all duration-300 relative overflow-hidden"
                      >
                        <Link href={link.href}>
                          <span className="relative z-10">Access Now</span>
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-[#ffc001] to-[#ffc001]/80"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                          />
                        </Link>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
