import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Calendar, Users, BookOpen } from "lucide-react"

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#0a4936] mb-4">Programs & Academics</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of undergraduate programs designed to prepare you for success
            </p>
          </div>

          {/* Undergraduate Programs */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-[#0a4936] mb-8">Undergraduate Programs (BAM)</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Bachelor of Aviation Management",
                  duration: "3 Years",
                  specializations: ["Airport Operations", "Airline Management", "Aviation Safety"],
                  seats: "60",
                },
                {
                  title: "Bachelor of Aeronautical Engineering",
                  duration: "4 Years",
                  specializations: ["Aircraft Design", "Propulsion Systems", "Avionics"],
                  seats: "120",
                },
                {
                  title: "Bachelor of Air Traffic Management",
                  duration: "3 Years",
                  specializations: ["ATC Operations", "Navigation Systems", "Flight Planning"],
                  seats: "40",
                },
                {
                  title: "Bachelor of Aviation Technology",
                  duration: "4 Years",
                  specializations: ["Aircraft Maintenance", "Ground Support", "Quality Control"],
                  seats: "80",
                },
                {
                  title: "Bachelor of Pilot Training",
                  duration: "2 Years",
                  specializations: ["Commercial Pilot", "Instrument Rating", "Multi-Engine"],
                  seats: "30",
                },
                {
                  title: "Bachelor of Aviation Business",
                  duration: "3 Years",
                  specializations: ["Aviation Finance", "Marketing", "Operations Management"],
                  seats: "50",
                },
              ].map((program, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow"
                  id={
                    index === 0
                      ? "aviation-management"
                      : index === 1
                        ? "aeronautical-engineering"
                        : index === 2
                          ? "air-traffic-management"
                          : index === 3
                            ? "aviation-technology"
                            : index === 4
                              ? "pilot-training"
                              : "aviation-business"
                  }
                >
                  <CardHeader>
                    <CardTitle className="text-[#0a4936] text-lg">{program.title}</CardTitle>
                    <div className="flex gap-2">
                      <Badge variant="secondary">{program.duration}</Badge>
                      <Badge variant="outline">{program.seats} Seats</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm mb-2">Specializations:</h4>
                      <div className="space-y-1">
                        {program.specializations.map((spec, idx) => (
                          <p key={idx} className="text-sm text-gray-600">
                            • {spec}
                          </p>
                        ))}
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Curriculum Downloads */}
          <section className="mb-16">
            <Card className="bg-gradient-to-r from-[#0a4936]/5 to-[#ffc001]/5">
              <CardHeader>
                <CardTitle className="text-[#0a4936] flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Curriculum & Syllabus Downloads
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    "Aviation Management Syllabus 2024",
                    "Aeronautical Engineering Curriculum",
                    "Air Traffic Management Guidelines",
                    "Aviation Technology Handbook",
                    "Pilot Training Manual",
                    "Aviation Business Course Structure",
                  ].map((document, index) => (
                    <Button key={index} variant="outline" className="justify-start h-auto p-4 bg-transparent">
                      <Download className="w-4 h-4 mr-2" />
                      <span className="text-left">{document}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Academic Calendar */}
          <section className="mb-16" id="calendar">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#0a4936] flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Academic Calendar 2024-25
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-[#0a4936] mb-4">Semester 1</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Admission Opens</span>
                        <span className="font-medium">June 1, 2024</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Classes Begin</span>
                        <span className="font-medium">July 15, 2024</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Mid-term Exams</span>
                        <span className="font-medium">Sep 15-25, 2024</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Final Exams</span>
                        <span className="font-medium">Nov 20-30, 2024</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0a4936] mb-4">Semester 2</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Classes Begin</span>
                        <span className="font-medium">Jan 8, 2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Mid-term Exams</span>
                        <span className="font-medium">Mar 10-20, 2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Final Exams</span>
                        <span className="font-medium">May 15-25, 2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Summer Break</span>
                        <span className="font-medium">Jun 1-30, 2025</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Faculty Members */}
          <section className="mb-16" id="faculty">
            <h2 className="text-2xl font-bold text-[#0a4936] mb-8 flex items-center gap-2">
              <Users className="w-6 h-6" />
              Faculty Members
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Dr. [Name]",
                  position: "Professor",
                  department: "Aviation Management",
                  qualification: "Ph.D. Aviation",
                },
                {
                  name: "Prof. [Name]",
                  position: "Associate Professor",
                  department: "Aeronautical Engg.",
                  qualification: "M.Tech Aerospace",
                },
                {
                  name: "Dr. [Name]",
                  position: "Assistant Professor",
                  department: "Air Traffic Mgmt.",
                  qualification: "Ph.D. ATC Systems",
                },
                {
                  name: "[Name]",
                  position: "Senior Lecturer",
                  department: "Aviation Technology",
                  qualification: "M.E. Aviation Tech",
                },
                {
                  name: "Capt. [Name]",
                  position: "Chief Flight Instructor",
                  department: "Pilot Training",
                  qualification: "ATPL, 15000+ hrs",
                },
                {
                  name: "Dr. [Name]",
                  position: "Professor",
                  department: "Aviation Business",
                  qualification: "Ph.D. Management",
                },
                {
                  name: "Eng. [Name]",
                  position: "Technical Instructor",
                  department: "Aircraft Maintenance",
                  qualification: "B.Tech + AME",
                },
                {
                  name: "Dr. [Name]",
                  position: "Research Director",
                  department: "R&D",
                  qualification: "Ph.D. Aerospace",
                },
              ].map((faculty, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
                    <h3 className="font-semibold text-[#0a4936]">{faculty.name}</h3>
                    <p className="text-sm text-gray-600">{faculty.position}</p>
                    <p className="text-xs text-gray-500 mb-2">{faculty.department}</p>
                    <Badge variant="outline" className="text-xs">
                      {faculty.qualification}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Academic Policies */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="text-[#0a4936] flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Academic Policies & Regulations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-[#0a4936] mb-4">Assessment & Evaluation</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Continuous Assessment (40%)</li>
                      <li>• Mid-term Examination (20%)</li>
                      <li>• Final Examination (40%)</li>
                      <li>• Minimum 75% attendance required</li>
                      <li>• Grade Point Average (GPA) system</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0a4936] mb-4">Code of Conduct</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Professional behavior expected</li>
                      <li>• Zero tolerance for plagiarism</li>
                      <li>• Respect for diversity and inclusion</li>
                      <li>• Safety protocols mandatory</li>
                      <li>• Academic integrity essential</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <Button variant="outline" className="mr-4 bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Download Full Policy Document
                  </Button>
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Student Handbook
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
