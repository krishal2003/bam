import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, ExternalLink, Star } from "lucide-react"

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: "International Aviation Conference 2024",
      description:
        "Join industry leaders, experts, and professionals for a comprehensive discussion on the future of aviation technology and sustainable practices.",
      date: "2024-07-15",
      time: "09:00 AM - 05:00 PM",
      venue: "Main Auditorium",
      category: "Conference",
      featured: true,
      registrationOpen: true,
      capacity: 500,
      registered: 342,
    },
    {
      title: "Career Fair - Aviation Industry",
      description:
        "Meet with representatives from leading airlines, airports, and aviation companies. Explore career opportunities and network with industry professionals.",
      date: "2024-07-20",
      time: "10:00 AM - 04:00 PM",
      venue: "Sports Complex",
      category: "Career",
      featured: true,
      registrationOpen: true,
      capacity: 300,
      registered: 156,
    },
    {
      title: "Guest Lecture: Future of Urban Air Mobility",
      description:
        "Dr. Sarah Johnson, leading researcher in UAM, will discuss the latest developments in urban air transportation and its impact on future cities.",
      date: "2024-06-25",
      time: "02:00 PM - 04:00 PM",
      venue: "Lecture Hall A",
      category: "Academic",
      featured: false,
      registrationOpen: true,
      capacity: 150,
      registered: 89,
    },
    {
      title: "Annual Sports Week 2024",
      description:
        "Participate in various indoor and outdoor sports activities. Inter-department competitions, cultural programs, and prize distribution ceremony.",
      date: "2024-07-01",
      time: "All Day",
      venue: "Entire Campus",
      category: "Sports",
      featured: false,
      registrationOpen: true,
      capacity: 1000,
      registered: 567,
    },
    {
      title: "Aviation Safety Workshop",
      description:
        "Hands-on workshop covering aviation safety protocols, emergency procedures, and risk management strategies for aviation professionals.",
      date: "2024-06-30",
      time: "09:00 AM - 01:00 PM",
      venue: "Training Center",
      category: "Workshop",
      featured: false,
      registrationOpen: true,
      capacity: 80,
      registered: 45,
    },
    {
      title: "Alumni Meet 2024",
      description:
        "Annual gathering of alumni from all batches. Networking session, success stories sharing, and campus tour for recent graduates.",
      date: "2024-08-10",
      time: "11:00 AM - 08:00 PM",
      venue: "Campus Grounds",
      category: "Alumni",
      featured: false,
      registrationOpen: false,
      capacity: 400,
      registered: 0,
    },
  ]

  const pastEvents = [
    {
      title: "Graduation Ceremony 2024",
      date: "2024-05-15",
      category: "Ceremony",
      attendees: 450,
    },
    {
      title: "Industry Partnership Summit",
      date: "2024-04-20",
      category: "Conference",
      attendees: 200,
    },
    {
      title: "Student Research Symposium",
      date: "2024-03-10",
      category: "Academic",
      attendees: 180,
    },
    {
      title: "Cultural Festival - Wings 2024",
      date: "2024-02-28",
      category: "Cultural",
      attendees: 800,
    },
  ]

  const categories = ["All", "Conference", "Academic", "Workshop", "Career", "Sports", "Cultural", "Alumni"]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#0a4936] mb-4">Events & Activities</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover upcoming events, workshops, conferences, and activities at our institute
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? "bg-[#0a4936] hover:bg-[#0a4936]/90" : "bg-transparent"}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Events */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#0a4936] mb-6">Featured Events</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingEvents
                .filter((event) => event.featured)
                .map((event, index) => (
                  <Card key={index} className="border-[#ffc001] border-2 hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge className="bg-[#ffc001] text-[#0a4936] flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          Featured
                        </Badge>
                        <Badge variant="secondary">{event.category}</Badge>
                      </div>
                      <CardTitle className="text-[#0a4936] text-xl">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{event.description}</p>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span>{event.venue}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Users className="w-4 h-4" />
                          <span>
                            {event.registered}/{event.capacity} registered
                          </span>
                        </div>
                      </div>

                      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                        <div
                          className="bg-[#0a4936] h-2 rounded-full"
                          style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                        ></div>
                      </div>

                      <div className="flex gap-2">
                        {event.registrationOpen ? (
                          <Button className="flex-1 bg-[#0a4936] hover:bg-[#0a4936]/90">Register Now</Button>
                        ) : (
                          <Button variant="outline" className="flex-1 bg-transparent" disabled>
                            Registration Closed
                          </Button>
                        )}
                        <Button variant="outline" size="icon" className="bg-transparent">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </section>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Upcoming Events */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#0a4936] mb-6">Upcoming Events</h2>
              <div className="space-y-6">
                {upcomingEvents
                  .filter((event) => !event.featured)
                  .map((event, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <Badge variant="secondary">{event.category}</Badge>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(event.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <CardTitle className="text-[#0a4936] text-xl">{event.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{event.description}</p>

                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Clock className="w-4 h-4" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <MapPin className="w-4 h-4" />
                              <span>{event.venue}</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Users className="w-4 h-4" />
                              <span>
                                {event.registered}/{event.capacity} registered
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1">
                              <div
                                className="bg-[#0a4936] h-1 rounded-full"
                                style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          {event.registrationOpen ? (
                            <Button size="sm" className="bg-[#0a4936] hover:bg-[#0a4936]/90">
                              Register
                            </Button>
                          ) : (
                            <Button variant="outline" size="sm" className="bg-transparent" disabled>
                              Registration Closed
                            </Button>
                          )}
                          <Button variant="ghost" size="sm">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Event Calendar */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#0a4936]">Event Calendar</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-gray-500">Calendar Widget</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      View Full Calendar
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Event Statistics */}
              <Card className="bg-gradient-to-br from-[#0a4936]/5 to-[#ffc001]/5">
                <CardHeader>
                  <CardTitle className="text-[#0a4936]">Event Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#0a4936]">24</div>
                      <div className="text-sm text-gray-600">Events This Year</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#ffc001]">6</div>
                      <div className="text-sm text-gray-600">Upcoming Events</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#701719]">1,250</div>
                      <div className="text-sm text-gray-600">Total Participants</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Past Events */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#0a4936]">Recent Past Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pastEvents.map((event, index) => (
                      <div key={index} className="border-l-4 border-[#0a4936] pl-3">
                        <h4 className="font-semibold text-[#0a4936] text-sm">{event.title}</h4>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-xs text-gray-500">{new Date(event.date).toLocaleDateString()}</span>
                          <Badge variant="outline" className="text-xs">
                            {event.attendees} attended
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent">
                    View All Past Events
                  </Button>
                </CardContent>
              </Card>

              {/* Event Submission */}
              <Card className="border-[#ffc001] border-2">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#ffc001] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-[#0a4936] mb-2">Organize an Event?</h3>
                  <p className="text-sm text-gray-600 mb-4">Submit your event proposal for approval and promotion</p>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Submit Event
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
