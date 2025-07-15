import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#0a4936] mb-4">About Us</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our journey, vision, and commitment to excellence in education
            </p>
          </div>

          {/* Vision, Mission & Values */}
          <section className="mb-16" id="vision">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-[#0a4936] border-2">
                <CardHeader>
                  <CardTitle className="text-[#0a4936]">Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    To be a leading institution that empowers students to soar to new heights and achieve their dreams
                    through innovative education and limitless possibilities.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-[#ffc001] border-2">
                <CardHeader>
                  <CardTitle className="text-[#0a4936]">Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    To provide quality education that fosters discovery, innovation, and personal growth while preparing
                    students for a brighter tomorrow.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-[#701719] border-2">
                <CardHeader>
                  <CardTitle className="text-[#0a4936]">Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Excellence in Education</li>
                    <li>• Innovation & Discovery</li>
                    <li>• Integrity & Ethics</li>
                    <li>• Student-Centered Approach</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* History */}
          <section className="mb-16" id="history">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#0a4936] text-2xl">History of the Institution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Founded with a vision to transform lives through education, our institution has been a beacon of
                  learning and innovation for decades. From humble beginnings to becoming a recognized center of
                  excellence, we have consistently evolved to meet the changing needs of students and society.
                </p>
                <p className="text-gray-600">
                  Our journey reflects our commitment to academic excellence, research, and holistic development of
                  students who go on to make significant contributions to their fields and communities.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Principal's Message */}
          <section className="mb-16" id="principal">
            <Card className="bg-gradient-to-r from-[#0a4936]/5 to-[#ffc001]/5">
              <CardHeader>
                <CardTitle className="text-[#0a4936] text-2xl">Message from the Principal</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-32 md:h-32 w-24 h-24 bg-gray-200 rounded-full flex-shrink-0 mx-auto md:mx-0"></div>
                  <div>
                    <p className="text-gray-600 mb-4 italic">
                      "Welcome to our institution where dreams take flight! We are committed to providing an environment
                      that nurtures creativity, critical thinking, and character development. Our dedicated faculty and
                      state-of-the-art facilities ensure that every student receives the best possible education."
                    </p>
                    <p className="text-[#0a4936] font-semibold">Dr. [Principal Name]</p>
                    <p className="text-gray-500">Principal & Director</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Governance */}
          <section className="mb-16" id="governance">
            <h2 className="text-2xl font-bold text-[#0a4936] mb-6">Governance & Management Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Dr. [Name]", position: "Chairman", department: "Board of Governors" },
                { name: "Prof. [Name]", position: "Vice Principal", department: "Academic Affairs" },
                { name: "Dr. [Name]", position: "Dean", department: "Student Affairs" },
                { name: "[Name]", position: "Registrar", department: "Administration" },
                { name: "Dr. [Name]", position: "Head", department: "Research & Development" },
                { name: "[Name]", position: "Director", department: "Finance & Operations" },
              ].map((member, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
                    <h3 className="font-semibold text-[#0a4936]">{member.name}</h3>
                    <p className="text-sm text-gray-600">{member.position}</p>
                    <p className="text-xs text-gray-500">{member.department}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Affiliations */}
          <section className="mb-16" id="affiliations">
            <h2 className="text-2xl font-bold text-[#0a4936] mb-6">Affiliations & Accreditations</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#0a4936]">Affiliations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="outline" className="mr-2">
                      University of [Name]
                    </Badge>
                    <Badge variant="outline" className="mr-2">
                      State Education Board
                    </Badge>
                    <Badge variant="outline" className="mr-2">
                      Professional Council
                    </Badge>
                    <Badge variant="outline" className="mr-2">
                      Industry Association
                    </Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#0a4936]">Accreditations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="outline" className="mr-2">
                      NAAC Grade A+
                    </Badge>
                    <Badge variant="outline" className="mr-2">
                      ISO 9001:2015
                    </Badge>
                    <Badge variant="outline" className="mr-2">
                      NBA Accredited
                    </Badge>
                    <Badge variant="outline" className="mr-2">
                      Quality Assurance
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Infrastructure */}
          <section id="infrastructure">
            <h2 className="text-2xl font-bold text-[#0a4936] mb-6">Infrastructure & Facilities Overview</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Modern Classrooms", description: "Smart boards, AC, multimedia" },
                { title: "Advanced Labs", description: "State-of-the-art equipment" },
                { title: "Digital Library", description: "Vast collection of resources" },
                { title: "Sports Complex", description: "Indoor & outdoor facilities" },
                { title: "Auditorium", description: "500+ seating capacity" },
                { title: "Cafeteria", description: "Hygienic food services" },
                { title: "Hostel Facilities", description: "Comfortable accommodation" },
                { title: "Transportation", description: "Bus services available" },
              ].map((facility, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-[#0a4936]/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="w-8 h-8 bg-[#0a4936] rounded"></div>
                    </div>
                    <h3 className="font-semibold text-[#0a4936] mb-2">{facility.title}</h3>
                    <p className="text-sm text-gray-600">{facility.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
