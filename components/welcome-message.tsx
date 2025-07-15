"use client";

import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Award, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function WelcomeMessage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const stats = [
    {
      icon: GraduationCap,
      number: "15+",
      label: "Years of Excellence",
      color: "bg-[#0a4936]",
      borderColor: "border-[#0a4936]",
    },
    {
      icon: Users,
      number: "5000+",
      label: "Successful Alumni",
      color: "bg-[#ffc001]",
      borderColor: "border-[#ffc001]",
    },
    {
      icon: Award,
      number: "100%",
      label: "Placement Record",
      color: "bg-[#701719]",
      borderColor: "border-[#701719]",
    },
    {
      icon: Globe,
      number: "50+",
      label: "Industry Partners",
      color: "bg-[#0a4936]",
      borderColor: "border-[#0a4936]",
    },
  ];

  return (
    <section
      className="py-12 sm:py-16 bg-white relative overflow-hidden"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a4936]/5 via-transparent to-[#ffc001]/5" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a4936] mb-4">
            Welcome to Siddartha Vanasthali Institute- Undergrad Program
          </motion.h2>
          <motion.p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto px-4">
            Where aviation dreams take flight! We are committed to providing
            world-class education and training in aviation sciences, preparing
            the next generation of aviation professionals for a rapidly evolving
            industry.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <Card
                  className={`text-center ${stat.borderColor} border-2 hover:shadow-xl transition-all duration-300 group relative overflow-hidden`}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/50"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <CardContent className="p-4 sm:p-6 relative z-10">
                    <motion.div
                      className={`w-12 sm:w-16 h-12 sm:h-16 ${stat.color} text-white rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className="w-6 sm:w-8 h-6 sm:h-8" />
                    </motion.div>
                    <motion.h3
                      className="text-xl sm:text-2xl font-bold text-[#0a4936] mb-1 sm:mb-2"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {stat.number}
                    </motion.h3>
                    <p className="text-gray-600 group-hover:text-[#0a4936] transition-colors text-sm sm:text-base">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-[#0a4936]/5 to-[#ffc001]/5 rounded-2xl p-6 sm:p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Animated background pattern */}
          <motion.div
            className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-[#ffc001]/10 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-[#0a4936] mb-4">
                Why Choose Siddartha Vanasthali Institute?
              </h3>
              <ul className="space-y-3 text-gray-700">
                {[
                  {
                    text: "State-of-the-art aviation training facilities and simulators",
                    color: "bg-[#0a4936]",
                  },
                  {
                    text: "Industry-experienced faculty and aviation professionals",
                    color: "bg-[#ffc001]",
                  },
                  {
                    text: "Strong industry connections and placement support",
                    color: "bg-[#701719]",
                  },
                  {
                    text: "Comprehensive curriculum aligned with industry standards",
                    color: "bg-[#0a4936]",
                  },
                  {
                    text: "International certifications and global recognition",
                    color: "bg-[#ffc001]",
                  },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className={`w-3 h-3 ${item.color} rounded-full mt-2 flex-shrink-0`}
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span className="group-hover:text-[#0a4936] transition-colors text-sm sm:text-base">
                      {item.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.div
                className="w-40 sm:w-48 h-40 sm:h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center relative overflow-hidden group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#0a4936]/20 to-[#ffc001]/20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="text-gray-500 relative z-10 group-hover:text-white transition-colors text-sm sm:text-base">
                  Campus Image
                </span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
