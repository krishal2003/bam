"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function NewsAnnouncements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const news = [
    {
      title: "Admission Open for Academic Year 2024-25",
      excerpt:
        "Applications are now open for all undergraduate programs. Early bird discount available until July 31st.",
      date: "2024-06-15",
      category: "Admissions",
      urgent: true,
    },
    {
      title: "New Aviation Technology Lab Inaugurated",
      excerpt: "State-of-the-art aviation technology laboratory with latest equipment and simulators now operational.",
      date: "2024-06-10",
      category: "Infrastructure",
      urgent: false,
    },
    {
      title: "Industry Partnership with Major Airlines",
      excerpt: "Signed MoU with leading airlines for internships, training, and direct placement opportunities.",
      date: "2024-06-05",
      category: "Partnerships",
      urgent: false,
    },
    {
      title: "International Aviation Conference 2024",
      excerpt: "Hosting the annual international aviation conference with industry experts and thought leaders.",
      date: "2024-05-28",
      category: "Events",
      urgent: false,
    },
  ]

  const announcements = [
    {
      title: "Semester Examination Schedule Released",
      date: "2024-06-12",
      urgent: true,
    },
    {
      title: "Library Extended Hours During Exams",
      date: "2024-06-10",
      urgent: false,
    },
    {
      title: "Guest Lecture by Aviation Industry Expert",
      date: "2024-06-08",
      urgent: false,
    },
    {
      title: "Sports Week Registration Open",
      date: "2024-06-05",
      urgent: false,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

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
  }

  return (
    <section className="py-12 sm:py-16 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a4936] mb-4">
            Latest News & Announcements
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest happenings, announcements, and news from our institute
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* News Section */}
          <div className="lg:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0a4936] mb-4 sm:mb-6">Latest News</h3>
            <motion.div
              className="space-y-4 sm:space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {news.map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                        <div className="flex flex-wrap gap-2">
                          <Badge
                            variant={item.urgent ? "destructive" : "secondary"}
                            className={item.urgent ? "bg-[#701719]" : ""}
                          >
                            {item.category}
                          </Badge>
                          {item.urgent && (
                            <Badge variant="destructive" className="bg-red-500">
                              URGENT
                            </Badge>
                          )}
                        </div>
                      </div>
                      <CardTitle className="text-[#0a4936] text-lg sm:text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4 text-sm sm:text-base">{item.excerpt}</p>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(item.date).toLocaleDateString()}</span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-[#0a4936] hover:text-[#0a4936]/80 self-start sm:self-auto"
                        >
                          Read More <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            <div className="text-center mt-6 sm:mt-8">
              <Button
                variant="outline"
                className="border-[#0a4936] text-[#0a4936] hover:bg-[#0a4936] hover:text-white bg-transparent"
              >
                View All News
              </Button>
            </div>
          </div>

          {/* Announcements Sidebar */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0a4936] mb-4 sm:mb-6">Quick Announcements</h3>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-4">
                    {announcements.map((announcement, index) => (
                      <div key={index} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                        <div className="flex justify-between items-start mb-2 gap-2">
                          <h4 className="font-semibold text-[#0a4936] text-sm leading-tight">{announcement.title}</h4>
                          {announcement.urgent && (
                            <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-1"></div>
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span>{new Date(announcement.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent">
                    View All Announcements
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Notice Board */}
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="bg-gradient-to-br from-[#ffc001]/10 to-[#0a4936]/10">
                <CardHeader>
                  <CardTitle className="text-[#0a4936]">Notice Board</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded border-l-4 border-[#701719]">
                      <p className="text-sm font-medium text-[#0a4936]">Exam Schedule</p>
                      <p className="text-xs text-gray-600">Final exams: Nov 20-30, 2024</p>
                    </div>
                    <div className="bg-white p-3 rounded border-l-4 border-[#ffc001]">
                      <p className="text-sm font-medium text-[#0a4936]">Holiday Notice</p>
                      <p className="text-xs text-gray-600">Institute closed on June 20th</p>
                    </div>
                    <div className="bg-white p-3 rounded border-l-4 border-[#0a4936]">
                      <p className="text-sm font-medium text-[#0a4936]">Fee Reminder</p>
                      <p className="text-xs text-gray-600">Semester fees due by June 30th</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
