import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Building, Award, MapPin, Calendar, ExternalLink } from "lucide-react"

export default function PlacementsPage() {
  const placementStats = [
    { label: "Placement Rate", value: "100%", icon: TrendingUp, color: "text-[#0a4936]" },
    { label: "Students Placed", value: "450+", icon: Users, color: "text-[#ffc001]" },
    { label: "Partner Companies", value: "75+", icon: Building, color: "text-[#701719]" },
    { label: "Highest Package", value: "₹25 LPA", icon: Award, color: "text-[#0a4936]" },
  ]

  const topRecruiters = [
    { name: "Air India", logo: "AI", positions: 45, package: "₹8-15 LPA" },
    { name: "IndiGo Airlines", logo: "IG", positions: 38, package: "₹7-12 LPA" },
    { name: "SpiceJet", logo: "SJ", positions: 32, package: "₹6-11 LPA" },
    { name: "Vistara", logo: "VS", positions: 28, package: "₹8-14 LPA" },
    { name: "GoAir", logo: "GA", positions: 25, package: "₹6-10 LPA" },
    { name: "Airports Authority of India", logo: "AAI", positions: 22, package: "₹9-16 LPA" },
    { name: "Boeing", logo: "BG", positions: 15, package: "₹12-25 LPA" },
    { name: "Airbus", logo: "AB", positions: 12, package: "₹15-22 LPA" },
  ]

  const recentPlacements = [
    {
      name: "Rajesh Kumar",
      program: "Aviation Management",
      company: "Air India",
      position: "Operations Manager",
      package: "₹12 LPA",
      location: "Delhi",
    },
    {
      name: "Priya Sharma",
      program: "Aeronautical Engineering",
      company: "Boeing",
      position: "Design Engineer",
      package: "₹18 LPA",
      location: "Bangalore",
    },
    {
      name: "Amit Patel",
      program: "Pilot Training",
      company: "IndiGo",
      position: "First Officer",
      package: "₹15 LPA",
      location: "Mumbai",
    },
    {
      name: "Sneha Gupta",
      program: "Air Traffic Management",
      company: "AAI",
      position: "ATC Officer",
      package: "₹14 LPA",
      location: "Chennai",
    },
    {
      name: "Vikram Singh",
      program: "Aviation Technology",
      company: "SpiceJet",
      position: "Maintenance Engineer",
      package: "₹10 LPA",
      location: "Hyderabad",
    },
    {
      name: "Anita Reddy",
      program: "Aviation Business",
      company: "Vistara",
      position: "Business Analyst",
      package: "₹11 LPA",
      location: "Pune",
    },
  ]

  const upcomingDrives = [
    {
      company: "Emirates Airlines",
      date: "2024-07-15",
      positions: ["Cabin Crew", "Ground Staff"],
      eligibility: "All Programs",
      registrationDeadline: "2024-07-10",
    },
    {
      company: "Lufthansa Technik",
      date: "2024-07-20",
      positions: ["Aircraft Maintenance", "Quality Engineer"],
      eligibility: "Engineering Programs",
      registrationDeadline: "2024-07-15",
    },
    {
      company: "Singapore Airlines",
      date: "2024-07-25",
      positions: ["Flight Operations", "Customer Service"],
      eligibility: "Aviation Management",
      registrationDeadline: "2024-07-20",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#0a4936] mb-4">Placements & Career</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover career opportunities and placement success stories from our aviation programs
            </p>
          </div>

          {/* Placement Statistics */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {placementStats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div
                        className={`w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4`}
                      >
                        <IconComponent className={`w-8 h-8 ${stat.color}`} />
                      </div>
                      <h3 className="text-3xl font-bold text-[#0a4936] mb-2">{stat.value}</h3>
                      <p className="text-gray-600">{stat.label}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </section>

          {/* Top Recruiters */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-[#0a4936] mb-8 text-center">Our Top Recruiters</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {topRecruiters.map((recruiter, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-[#0a4936] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                      {recruiter.logo}
                    </div>
                    <h3 className="font-semibold text-[#0a4936] mb-2">{recruiter.name}</h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>{recruiter.positions} positions</p>
                      <p className="font-medium text-[#0a4936]">{recruiter.package}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Recent Placements */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#0a4936] mb-6">Recent Placements</h2>
              <div className="space-y-4">
                {recentPlacements.map((placement, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-[#0a4936] text-lg">{placement.name}</h3>
                          <p className="text-sm text-gray-600">{placement.program}</p>
                        </div>
                        <Badge className="bg-[#0a4936] text-white">{placement.package}</Badge>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500">Company</p>
                          <p className="font-medium text-[#0a4936]">{placement.company}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Position</p>
                          <p className="font-medium">{placement.position}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span>{placement.location}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button
                  variant="outline"
                  className="border-[#0a4936] text-[#0a4936] hover:bg-[#0a4936] hover:text-white bg-transparent"
                >
                  View All Placements
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Upcoming Placement Drives */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#0a4936]">Upcoming Drives</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingDrives.map((drive, index) => (
                      <div key={index} className="border-l-4 border-[#0a4936] pl-4">
                        <h4 className="font-semibold text-[#0a4936]">{drive.company}</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{new Date(drive.date).toLocaleDateString()}</span>
                          </div>
                          <p>Positions: {drive.positions.join(", ")}</p>
                          <p>Eligibility: {drive.eligibility}</p>
                          <p className="text-red-600">
                            Deadline: {new Date(drive.registrationDeadline).toLocaleDateString()}
                          </p>
                        </div>
                        <Button size="sm" className="mt-2 bg-[#0a4936] hover:bg-[#0a4936]/90">
                          Register
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Placement Process */}
              <Card className="bg-gradient-to-br from-[#0a4936]/5 to-[#ffc001]/5">
                <CardHeader>
                  <CardTitle className="text-[#0a4936]">Placement Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Registration & Profile Creation",
                      "Resume Building Workshop",
                      "Pre-placement Training",
                      "Company Presentations",
                      "Written Test & Interviews",
                      "Final Selection & Offer",
                    ].map((step, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-[#0a4936] text-white rounded-full flex items-center justify-center text-xs font-bold">
                          {index + 1}
                        </div>
                        <span className="text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Career Services */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#0a4936]">Career Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Resume Builder
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Interview Preparation
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Career Counseling
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Industry Mentorship
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Placement Cell */}
              <Card className="border-[#ffc001] border-2">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#ffc001] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-[#0a4936] mb-2">Placement Cell</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Get personalized career guidance and placement assistance
                  </p>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Contact Us
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
