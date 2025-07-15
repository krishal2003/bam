import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Download, ExternalLink, Monitor, FileText, LinkIcon } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#0a4936] mb-4">Resources</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access our comprehensive collection of academic resources, digital library, and learning materials
            </p>
          </div>

          {/* Library */}
          <section className="mb-16" id="library">
            <Card className="bg-gradient-to-r from-[#0a4936]/5 to-[#ffc001]/5">
              <CardHeader>
                <CardTitle className="text-[#0a4936] text-2xl flex items-center gap-2">
                  <BookOpen className="w-6 h-6" />
                  Digital Library
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#0a4936] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                      50K+
                    </div>
                    <h3 className="font-semibold text-[#0a4936]">Books</h3>
                    <p className="text-sm text-gray-600">Physical & Digital Collection</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#ffc001] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                      500+
                    </div>
                    <h3 className="font-semibold text-[#0a4936]">Journals</h3>
                    <p className="text-sm text-gray-600">International & National</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#701719] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                      24/7
                    </div>
                    <h3 className="font-semibold text-[#0a4936]">Access</h3>
                    <p className="text-sm text-gray-600">Online Resources</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#0a4936] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                      100+
                    </div>
                    <h3 className="font-semibold text-[#0a4936]">Databases</h3>
                    <p className="text-sm text-gray-600">Research Databases</p>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <Button className="bg-[#0a4936] hover:bg-[#0a4936]/90 mr-4">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Access Digital Library
                  </Button>
                  <Button variant="outline">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Library Catalog
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* E-Learning / LMS */}
          <section className="mb-16" id="lms">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#0a4936] text-2xl flex items-center gap-2">
                  <Monitor className="w-6 h-6" />
                  E-Learning / LMS Access
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="border-[#0a4936] border-2">
                    <CardHeader>
                      <CardTitle className="text-[#0a4936] text-lg">Student Portal</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600 mb-4">
                        <li>• Course Materials</li>
                        <li>• Assignment Submissions</li>
                        <li>• Grade Reports</li>
                        <li>• Class Schedules</li>
                        <li>• Announcements</li>
                      </ul>
                      <Button variant="outline" className="w-full bg-transparent">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Student Login
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-[#ffc001] border-2">
                    <CardHeader>
                      <CardTitle className="text-[#0a4936] text-lg">Faculty Portal</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600 mb-4">
                        <li>• Course Management</li>
                        <li>• Student Assessment</li>
                        <li>• Attendance Tracking</li>
                        <li>• Resource Sharing</li>
                        <li>• Communication Tools</li>
                      </ul>
                      <Button variant="outline" className="w-full bg-transparent">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Faculty Login
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-[#701719] border-2">
                    <CardHeader>
                      <CardTitle className="text-[#0a4936] text-lg">Virtual Classroom</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600 mb-4">
                        <li>• Live Lectures</li>
                        <li>• Interactive Sessions</li>
                        <li>• Recording Access</li>
                        <li>• Screen Sharing</li>
                        <li>• Breakout Rooms</li>
                      </ul>
                      <Button variant="outline" className="w-full bg-transparent">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Join Classroom
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Downloads Section */}
          <section className="mb-16" id="downloads">
            <h2 className="text-2xl font-bold text-[#0a4936] mb-8 flex items-center gap-2">
              <Download className="w-6 h-6" />
              Downloads (Forms, Brochures, Rules)
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Forms */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#0a4936]">Application Forms</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Admission Application Form",
                      "Scholarship Application Form",
                      "Transfer Certificate Request",
                      "Fee Concession Form",
                      "Library Membership Form",
                      "Hostel Application Form",
                    ].map((form, index) => (
                      <Button key={index} variant="ghost" className="w-full justify-start h-auto p-3 text-left">
                        <FileText className="w-4 h-4 mr-3 text-[#0a4936]" />
                        <span className="text-sm">{form}</span>
                        <Download className="w-4 h-4 ml-auto" />
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Brochures */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#0a4936]">Brochures & Prospectus</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Institution Prospectus 2024-25",
                      "Aviation Management Brochure",
                      "Engineering Programs Guide",
                      "Pilot Training Information",
                      "Campus Facilities Brochure",
                      "Placement Statistics Report",
                    ].map((brochure, index) => (
                      <Button key={index} variant="ghost" className="w-full justify-start h-auto p-3 text-left">
                        <FileText className="w-4 h-4 mr-3 text-[#ffc001]" />
                        <span className="text-sm">{brochure}</span>
                        <Download className="w-4 h-4 ml-auto" />
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Rules & Regulations */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#0a4936]">Rules & Regulations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Student Code of Conduct",
                      "Academic Regulations",
                      "Examination Guidelines",
                      "Hostel Rules & Regulations",
                      "Library Usage Policy",
                      "Anti-Ragging Guidelines",
                    ].map((rule, index) => (
                      <Button key={index} variant="ghost" className="w-full justify-start h-auto p-3 text-left">
                        <FileText className="w-4 h-4 mr-3 text-[#701719]" />
                        <span className="text-sm">{rule}</span>
                        <Download className="w-4 h-4 ml-auto" />
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Downloadable PDF Section */}
          <section className="mb-16" id="pdf-resources">
            <Card className="bg-gradient-to-r from-[#0a4936]/5 to-[#ffc001]/5">
              <CardHeader>
                <CardTitle className="text-[#0a4936] text-2xl">Downloadable PDF Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { title: "Complete Prospectus", size: "2.5 MB", pages: "48 pages" },
                    { title: "Academic Calendar", size: "1.2 MB", pages: "12 pages" },
                    { title: "Fee Structure Guide", size: "800 KB", pages: "8 pages" },
                    { title: "Campus Map", size: "1.5 MB", pages: "4 pages" },
                    { title: "Placement Report", size: "3.2 MB", pages: "24 pages" },
                    { title: "Faculty Profiles", size: "2.8 MB", pages: "32 pages" },
                    { title: "Infrastructure Guide", size: "4.1 MB", pages: "36 pages" },
                    { title: "Student Handbook", size: "1.8 MB", pages: "56 pages" },
                  ].map((pdf, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-red-500 text-white rounded-lg flex items-center justify-center mx-auto mb-3">
                            PDF
                          </div>
                          <h3 className="font-semibold text-[#0a4936] text-sm mb-2">{pdf.title}</h3>
                          <div className="text-xs text-gray-500 mb-3">
                            <p>{pdf.size}</p>
                            <p>{pdf.pages}</p>
                          </div>
                          <Button size="sm" variant="outline" className="w-full bg-transparent">
                            <Download className="w-3 h-3 mr-2" />
                            Download
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Publications & Journals */}
          <section className="mb-16" id="publications">
            <h2 className="text-2xl font-bold text-[#0a4936] mb-8">Publications & Journals</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#0a4936]">Institution Publications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Aviation Today - Quarterly Magazine",
                        description: "Latest trends and developments in aviation industry",
                        badge: "Quarterly",
                      },
                      {
                        title: "Research Journal of Aviation Sciences",
                        description: "Peer-reviewed research papers and studies",
                        badge: "Bi-Annual",
                      },
                      {
                        title: "Student Newsletter - Wings",
                        description: "Student activities, achievements, and news",
                        badge: "Monthly",
                      },
                      {
                        title: "Alumni Connect Magazine",
                        description: "Alumni success stories and networking",
                        badge: "Annual",
                      },
                    ].map((publication, index) => (
                      <div key={index} className="border-l-4 border-[#0a4936] pl-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-[#0a4936]">{publication.title}</h3>
                          <Badge variant="secondary">{publication.badge}</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{publication.description}</p>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="w-3 h-3 mr-2" />
                          View Latest Issue
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#0a4936]">Research Publications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Sustainable Aviation Fuel Research",
                        author: "Dr. [Name] et al.",
                        journal: "International Journal of Aviation",
                      },
                      {
                        title: "AI in Air Traffic Management",
                        author: "Prof. [Name]",
                        journal: "Aviation Technology Review",
                      },
                      {
                        title: "Future of Urban Air Mobility",
                        author: "Dr. [Name], Dr. [Name]",
                        journal: "Aerospace Engineering Journal",
                      },
                      {
                        title: "Aviation Safety Management Systems",
                        author: "Prof. [Name] et al.",
                        journal: "Safety Science International",
                      },
                    ].map((research, index) => (
                      <div key={index} className="border-l-4 border-[#ffc001] pl-4">
                        <h3 className="font-semibold text-[#0a4936] mb-1">{research.title}</h3>
                        <p className="text-sm text-gray-600 mb-1">By: {research.author}</p>
                        <p className="text-xs text-gray-500 mb-2">Published in: {research.journal}</p>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="w-3 h-3 mr-2" />
                          Read Paper
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Useful Links */}
          <section id="useful-links">
            <h2 className="text-2xl font-bold text-[#0a4936] mb-8 flex items-center gap-2">
              <LinkIcon className="w-6 h-6" />
              Useful Links
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#0a4936]">Government Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Ministry of Civil Aviation",
                      "Directorate General of Civil Aviation",
                      "Airports Authority of India",
                      "Bureau of Civil Aviation Security",
                      "Aircraft Accident Investigation Bureau",
                    ].map((link, index) => (
                      <Button key={index} variant="ghost" className="w-full justify-start h-auto p-2">
                        <ExternalLink className="w-4 h-4 mr-3 text-[#0a4936]" />
                        <span className="text-sm">{link}</span>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#0a4936]">Industry Partners</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {["Air India", "IndiGo Airlines", "SpiceJet", "Vistara", "GoAir", "Alliance Air"].map(
                      (link, index) => (
                        <Button key={index} variant="ghost" className="w-full justify-start h-auto p-2">
                          <ExternalLink className="w-4 h-4 mr-3 text-[#ffc001]" />
                          <span className="text-sm">{link}</span>
                        </Button>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#0a4936]">Educational Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "ICAO - International Civil Aviation",
                      "IATA - International Air Transport",
                      "FAA - Federal Aviation Administration",
                      "EASA - European Aviation Safety",
                      "Aviation Week Network",
                    ].map((link, index) => (
                      <Button key={index} variant="ghost" className="w-full justify-start h-auto p-2">
                        <ExternalLink className="w-4 h-4 mr-3 text-[#701719]" />
                        <span className="text-sm">{link}</span>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
