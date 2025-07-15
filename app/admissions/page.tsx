import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, DollarSign, GraduationCap, FileText, HelpCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#0a4936] mb-4">Admissions</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Take the first step towards your aviation career. Join us where dreams take flight!
            </p>
          </div>

          {/* Why Choose Us */}
          <section className="mb-16" id="why-choose-us">
            <Card className="bg-gradient-to-r from-[#0a4936]/5 to-[#ffc001]/5">
              <CardHeader>
                <CardTitle className="text-[#0a4936] text-2xl flex items-center gap-2">
                  <Star className="w-6 h-6" />
                  Why Choose Us?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Industry-Ready Curriculum",
                      description: "Programs designed with industry experts to meet current market demands",
                    },
                    {
                      title: "State-of-the-Art Facilities",
                      description: "Modern labs, simulators, and equipment for hands-on learning",
                    },
                    {
                      title: "Expert Faculty",
                      description: "Learn from experienced professionals and industry veterans",
                    },
                    {
                      title: "100% Placement Support",
                      description: "Dedicated placement cell with strong industry connections",
                    },
                    {
                      title: "International Exposure",
                      description: "Exchange programs and international certifications available",
                    },
                    {
                      title: "Affordable Excellence",
                      description: "Quality education at competitive fees with scholarship opportunities",
                    },
                  ].map((reason, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#0a4936] mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-[#0a4936] mb-1">{reason.title}</h3>
                        <p className="text-sm text-gray-600">{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Eligibility Criteria */}
          <section className="mb-16" id="eligibility">
            <h2 className="text-2xl font-bold text-[#0a4936] mb-8 flex items-center gap-2">
              <GraduationCap className="w-6 h-6" />
              Eligibility Criteria
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  program: "Bachelor of Aviation Management",
                  criteria: [
                    "12th pass with minimum 50% marks",
                    "Physics, Chemistry, Mathematics mandatory",
                    "Age: 17-25 years",
                    "English proficiency required",
                  ],
                },
                {
                  program: "Bachelor of Aeronautical Engineering",
                  criteria: [
                    "12th pass with minimum 60% marks",
                    "PCM (Physics, Chemistry, Mathematics)",
                    "JEE Main/State CET qualified",
                    "Age: 17-23 years",
                  ],
                },
                {
                  program: "Bachelor of Air Traffic Management",
                  criteria: [
                    "12th pass with minimum 55% marks",
                    "Any stream (Science preferred)",
                    "Good communication skills",
                    "Age: 18-26 years",
                  ],
                },
                {
                  program: "Bachelor of Pilot Training",
                  criteria: [
                    "12th pass with minimum 50% marks",
                    "Physics and Mathematics mandatory",
                    "Class 1 Medical Certificate",
                    "Age: 18-32 years",
                  ],
                },
              ].map((program, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-[#0a4936] text-lg">{program.program}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {program.criteria.map((criterion, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#0a4936] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{criterion}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Admission Process */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-[#0a4936] mb-8">Admission Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Online Application",
                  description: "Fill the online application form with required details",
                },
                {
                  step: "2",
                  title: "Document Verification",
                  description: "Submit and verify all required documents",
                },
                {
                  step: "3",
                  title: "Entrance Test/Interview",
                  description: "Appear for entrance test and personal interview",
                },
                {
                  step: "4",
                  title: "Admission Confirmation",
                  description: "Pay fees and confirm your admission",
                },
              ].map((process, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#0a4936] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {process.step}
                    </div>
                    <h3 className="font-semibold text-[#0a4936] mb-2">{process.title}</h3>
                    <p className="text-sm text-gray-600">{process.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Fee Structure */}
          <section className="mb-16" id="fees">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#0a4936] text-2xl flex items-center gap-2">
                  <DollarSign className="w-6 h-6" />
                  Fee Structure (Annual)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b-2 border-[#0a4936]">
                        <th className="text-left p-4 text-[#0a4936]">Program</th>
                        <th className="text-left p-4 text-[#0a4936]">Tuition Fee</th>
                        <th className="text-left p-4 text-[#0a4936]">Lab Fee</th>
                        <th className="text-left p-4 text-[#0a4936]">Other Charges</th>
                        <th className="text-left p-4 text-[#0a4936]">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          program: "Aviation Management",
                          tuition: "₹1,20,000",
                          lab: "₹15,000",
                          other: "₹10,000",
                          total: "₹1,45,000",
                        },
                        {
                          program: "Aeronautical Engineering",
                          tuition: "₹1,50,000",
                          lab: "₹25,000",
                          other: "₹15,000",
                          total: "₹1,90,000",
                        },
                        {
                          program: "Air Traffic Management",
                          tuition: "₹1,10,000",
                          lab: "₹20,000",
                          other: "₹10,000",
                          total: "₹1,40,000",
                        },
                        {
                          program: "Aviation Technology",
                          tuition: "₹1,30,000",
                          lab: "₹30,000",
                          other: "₹15,000",
                          total: "₹1,75,000",
                        },
                        {
                          program: "Pilot Training",
                          tuition: "₹8,00,000",
                          lab: "₹50,000",
                          other: "₹25,000",
                          total: "₹8,75,000",
                        },
                      ].map((fee, index) => (
                        <tr key={index} className="border-b">
                          <td className="p-4">{fee.program}</td>
                          <td className="p-4">{fee.tuition}</td>
                          <td className="p-4">{fee.lab}</td>
                          <td className="p-4">{fee.other}</td>
                          <td className="p-4 font-semibold text-[#0a4936]">{fee.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  * Fees are subject to revision. Additional charges may apply for hostel, transportation, and other
                  facilities.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Scholarships */}
          <section className="mb-16" id="scholarships">
            <h2 className="text-2xl font-bold text-[#0a4936] mb-8">Scholarships & Financial Aid</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Merit Scholarship",
                  description: "Up to 50% fee waiver for top performers",
                  eligibility: "Above 90% in 12th standard",
                  badge: "Academic Excellence",
                },
                {
                  title: "Need-Based Aid",
                  description: "Financial assistance for deserving students",
                  eligibility: "Family income below ₹3 lakhs",
                  badge: "Financial Support",
                },
                {
                  title: "Sports Scholarship",
                  description: "Special concessions for sports achievers",
                  eligibility: "State/National level participation",
                  badge: "Sports Achievement",
                },
              ].map((scholarship, index) => (
                <Card key={index} className="border-[#ffc001] border-2">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-[#0a4936]">{scholarship.title}</CardTitle>
                      <Badge variant="secondary">{scholarship.badge}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3">{scholarship.description}</p>
                    <p className="text-sm text-[#0a4936] font-medium">Eligibility: {scholarship.eligibility}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Online Application Form */}
          <section className="mb-16" id="application">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#0a4936] text-2xl flex items-center gap-2">
                  <FileText className="w-6 h-6" />
                  Online Application Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="program">Preferred Program *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a program" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="aviation-management">Aviation Management</SelectItem>
                          <SelectItem value="aeronautical-engineering">Aeronautical Engineering</SelectItem>
                          <SelectItem value="air-traffic-management">Air Traffic Management</SelectItem>
                          <SelectItem value="aviation-technology">Aviation Technology</SelectItem>
                          <SelectItem value="pilot-training">Pilot Training</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="qualification">Highest Qualification *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select qualification" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="12th-science">12th - Science</SelectItem>
                          <SelectItem value="12th-commerce">12th - Commerce</SelectItem>
                          <SelectItem value="12th-arts">12th - Arts</SelectItem>
                          <SelectItem value="diploma">Diploma</SelectItem>
                          <SelectItem value="graduation">Graduation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address">Address *</Label>
                    <Textarea id="address" placeholder="Enter your complete address" />
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input id="city" placeholder="Enter your city" />
                    </div>
                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Input id="state" placeholder="Enter your state" />
                    </div>
                    <div>
                      <Label htmlFor="pincode">Pincode *</Label>
                      <Input id="pincode" placeholder="Enter pincode" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Additional Information</Label>
                    <Textarea id="message" placeholder="Any additional information you'd like to share" />
                  </div>

                  <div className="flex gap-4">
                    <Button type="submit" className="bg-[#0a4936] hover:bg-[#0a4936]/90">
                      Submit Application
                    </Button>
                    <Button type="button" variant="outline">
                      Save as Draft
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </section>

          {/* FAQ */}
          <section id="faq">
            <h2 className="text-2xl font-bold text-[#0a4936] mb-8 flex items-center gap-2">
              <HelpCircle className="w-6 h-6" />
              Frequently Asked Questions (Admissions)
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is the admission process timeline?</AccordionTrigger>
                <AccordionContent>
                  Admissions typically open in June and close by August. The entrance test is conducted in September,
                  followed by interviews and final admission confirmation by October.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is there an entrance examination?</AccordionTrigger>
                <AccordionContent>
                  Yes, most programs require an entrance test covering basic subjects relevant to the chosen program.
                  Pilot training also includes medical and psychological assessments.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What documents are required for admission?</AccordionTrigger>
                <AccordionContent>
                  Required documents include 10th & 12th mark sheets, transfer certificate, character certificate,
                  passport-size photographs, Aadhar card, and caste certificate (if applicable).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Are there any age restrictions?</AccordionTrigger>
                <AccordionContent>
                  Age limits vary by program. Generally, candidates should be between 17-25 years for most programs,
                  with pilot training allowing up to 32 years.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Can I apply for multiple programs?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can apply for multiple programs, but you'll need to pay separate application fees for each
                  program and meet the specific eligibility criteria.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
