"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0a4936]/10 via-white to-[#ffc001]/10 flex items-center overflow-hidden px-4 sm:px-0">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 sm:top-20 left-5 sm:left-10 w-16 sm:w-20 h-16 sm:h-20 bg-[#ffc001]/20 rounded-full blur-xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-24 sm:w-32 h-24 sm:h-32 bg-[#0a4936]/10 rounded-full blur-xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            className="space-y-6 sm:space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0a4936] leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                FLY INTO THE
              </motion.span>
              <br />
              <motion.span
                className="text-[#0a4936] bg-gradient-to-r from-[#0a4936] to-[#0a4936]/80 bg-clip-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                FUTURE
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                WHERE
              </motion.span>
              <br />
              <motion.span
                className="text-[#0a4936] relative inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                DREAMS TAKE
                <motion.div
                  className="absolute -bottom-1 sm:-bottom-2 left-0 h-1 bg-gradient-to-r from-[#ffc001] to-[#ffc001]/50 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                />
              </motion.span>
              <br />
              <motion.span
                className="text-[#0a4936] relative inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.5 }}
              >
                FLIGHT!
                <motion.div
                  className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-3 sm:w-4 h-3 sm:h-4 bg-[#ffc001] rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 2,
                  }}
                />
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              Join us on a journey of{" "}
              <strong className="text-[#0a4936]">
                discovery, innovation, and limitless possibilities
              </strong>{" "}
              as we propel you towards a brighter tomorrow.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-[#0a4936] hover:bg-[#0a4936]/90 text-white px-6 sm:px-8 py-3 group relative overflow-hidden w-full sm:w-auto"
                >
                  <Link href="/about">
                    <span className="relative z-10 flex items-center gap-2 justify-center">
                      LEARN MORE
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#0a4936] to-[#0a4936]/80"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="https://www.youtube.com/@sviofficial"
                  target="_blank"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#0a4936] text-[#0a4936] hover:bg-[#0a4936] hover:text-white px-6 sm:px-8 py-3 bg-transparent group relative overflow-hidden w-full sm:w-auto"
                  >
                    <span className="relative z-10 flex items-center gap-2 justify-center">
                      <Play className="w-4 h-4" />
                      WATCH VIDEO
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-[#0a4936]"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ originX: 0.5, originY: 0.5 }}
                    />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative order-first lg:order-last"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/images/hero-airplane.png"
                alt="Airplane flying over city skyline representing aviation dreams"
                width={800}
                height={600}
                className="w-full h-auto drop-shadow-2xl max-w-md sm:max-w-lg lg:max-w-full mx-auto"
                priority
              />
            </motion.div>

            {/* Floating elements around the image */}
            <motion.div
              className="absolute top-5 sm:top-10 right-5 sm:right-10 w-12 sm:w-16 h-12 sm:h-16 bg-[#ffc001]/20 rounded-full backdrop-blur-sm border border-[#ffc001]/30"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360, 0],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />

            <motion.div
              className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-8 sm:w-12 h-8 sm:h-12 bg-[#0a4936]/20 rounded-full backdrop-blur-sm border border-[#0a4936]/30"
              animate={{
                y: [0, 15, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
