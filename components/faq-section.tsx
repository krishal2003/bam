"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const faqs = [
    {
      question: "What programs does Siddhartha Vanasthali Institute offer?",
      answer:
        "We offer comprehensive undergraduate programs including Bachelor of Aviation Management, Bachelor of Aeronautical Engineering, Bachelor of Air Traffic Management, Bachelor of Aviation Technology, Bachelor of Pilot Training, and Bachelor of Aviation Business.",
    },
    {
      question: "What are the admission requirements?",
      answer:
        "Admission requirements vary by program. Generally, candidates need to have completed 12th standard with minimum 50-60% marks (varies by program), with Physics, Chemistry, and Mathematics for technical programs. Age limits and specific eligibility criteria apply to different programs.",
    },
    {
      question: "Is there placement assistance available?",
      answer:
        "Yes, we have a dedicated placement cell with 100% placement record. We have strong partnerships with major airlines, airports, and aviation companies. Our students are placed in leading organizations across the aviation industry.",
    },
    {
      question: "What facilities are available on campus?",
      answer:
        "Our campus features state-of-the-art facilities including modern classrooms with smart boards, advanced aviation labs, flight simulators, digital library, sports complex, auditorium, cafeteria, hostel facilities, and transportation services.",
    },
    {
      question: "Are scholarships available?",
      answer:
        "Yes, we offer various scholarship programs including merit-based scholarships (up to 50% fee waiver), need-based financial aid, and sports scholarships. Eligibility criteria and application processes vary for each scholarship type.",
    },
    {
      question: "What is the fee structure?",
      answer:
        "Fee structure varies by program, ranging from ₹1,40,000 to ₹8,75,000 annually. This includes tuition fees, lab fees, and other charges. Pilot training programs have higher fees due to specialized equipment and training requirements.",
    },
    {
      question: "How can I apply for admission?",
      answer:
        "You can apply online through our website by filling the application form, submitting required documents, appearing for entrance test/interview, and confirming admission by paying fees. The admission process typically runs from June to October.",
    },
    {
      question: "What career opportunities are available after graduation?",
      answer:
        "Graduates can pursue careers as pilots, air traffic controllers, aviation managers, aircraft maintenance engineers, airport operations managers, aviation safety officers, and various other roles in airlines, airports, and aviation companies.",
    },
  ];

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
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our programs, admissions, and
            facilities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-4 sm:p-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left text-[#0a4936] hover:text-[#0a4936]/80 text-sm sm:text-base">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 text-sm sm:text-base">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-gradient-to-br from-[#0a4936]/5 to-[#ffc001]/5">
                <CardHeader>
                  <CardTitle className="text-[#0a4936] flex items-center gap-2">
                    <HelpCircle className="w-5 h-5" />
                    Need More Help?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    Can't find the answer you're looking for? Our admissions
                    team is here to help!
                  </p>
                  <div className="space-y-3">
                    <Link href="contact">
                      <Button className="w-full bg-[#0a4936] hover:bg-[#0a4936]/90">
                        Contact Admissions
                      </Button>
                    </Link>
                    <Link
                      href="https://docs.google.com/forms/d/1mCVPxIClmTKiIxpO0-f2rcmECY2GvEdl-HQxcfcJLXI/edit"
                      target="_blank"
                    >
                      <Button
                        variant="outline"
                        className="w-full bg-transparent"
                      >
                        Schedule Campus Visit
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#0a4936] flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Quick Contact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[#0a4936] mb-1">
                        Admissions Helpline
                      </h4>
                      <p className="text-sm text-gray-600">9860001697</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0a4936] mb-1">
                        Email Support
                      </h4>
                      <p className="text-sm text-gray-600 break-all">
                        siddharthavanasthalipaanaut@gmail.com
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0a4936] mb-1">
                        College Hours
                      </h4>
                      <p className="text-sm text-gray-600">
                        Sun-Fri: 08:30 AM - 12:00 PM{" "}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Card className="border-[#ffc001] border-2">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#ffc001] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <HelpCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-[#0a4936] mb-2">
                    Still Have Questions?
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Submit your query and we'll get back to you within 24 hours
                  </p>
                  <Link href="contact">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-transparent"
                    >
                      Submit Query
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
