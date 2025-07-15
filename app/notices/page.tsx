import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Download, Pin, AlertCircle } from "lucide-react"

export default function NoticesPage() {
  const notices = [
    {
      title: "Semester Examination Schedule - Final Year",
      content:
        "The final semester examinations for all programs will commence from November 20, 2024. Students are advised to check their individual timetables on the student portal.",
      date: "2024-06-15",
      category: "Examinations",
      urgent: true,
      pinned: true,
      attachment: "exam-schedule-final.pdf",
    },
    {
      title: "Library Extended Hours During Exam Period",
      content:
        "The library will remain open from 6:00 AM to 11:00 PM during the examination period (November 15 - December 5, 2024) to facilitate student preparation.",
      date: "2024-06-12",
      category: "Library",
      urgent: false,
      pinned: true,
      attachment: null,
    },
    {
      title: "Fee Payment Deadline Extension",
      content:
        "Due to technical issues with the payment gateway, the semester fee payment deadline has been extended to June 30, 2024. Late fees will be waived for payments made by this date.",
      date: "2024-06-10",
      category: "Finance",
      urgent: true,
      pinned: false,
      attachment: null,
    },
    {
      title: "Guest Lecture Series - Aviation Industry Trends",
      content:
        "A series of guest lectures by industry experts will be conducted from July 1-5, 2024. Attendance is mandatory for all final year students.",
      date: "2024-06-08",
      category: "Academic",
      urgent: false,
      pinned: false,
      attachment: "guest-lecture-schedule.pdf",
    },
    {
      title: "Sports Week Registration Open",
      content:
        "Registration for the annual sports week is now open. Students can register through the student portal until June 25, 2024. Various indoor and outdoor events will be organized.",
      date: "2024-06-05",
      category: "Sports",
      urgent: false,
      pinned: false,
      attachment: "sports-week-events.pdf",
    },
    {
      title: "New Hostel Block Inauguration",
      content:
        "The new hostel block with 200 additional rooms will be inaugurated on July 1, 2024. Applications for hostel accommodation are now being accepted.",
      date: "2024-06-03",
      category: "Infrastructure",
      urgent: false,
      pinned: false,
      attachment: null,
    },
    {
      title: "Placement Drive - Major Airlines",
      content:
        "Leading airlines will be conducting placement drives on campus from June 20-25, 2024. Eligible students should register through the placement cell.",
      date: "2024-06-01",
      category: "Placements",
      urgent: false,
      pinned: false,
      attachment: "placement-guidelines.pdf",
    },
    {
      title: "Academic Calendar Update - Semester Break",
      content:
        "The semester break has been rescheduled from June 15-30, 2024 to June 20 - July 5, 2024 due to examination schedule changes.",
      date: "2024-05-28",
      category: "Academic",
      urgent: false,
      pinned: false,
      attachment: "updated-academic-calendar.pdf",
    },
  ]

  const categories = ["All", "Examinations", "Academic", "Finance", "Library", "Sports", "Infrastructure", "Placements"]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#0a4936] mb-4">Notices & Circulars</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay updated with important notices, announcements, and circulars from the institute
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

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Notices */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {notices.map((notice, index) => (
                  <Card
                    key={index}
                    className={`hover:shadow-lg transition-shadow ${notice.pinned ? "border-[#ffc001] border-2" : ""}`}
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          {notice.pinned && <Pin className="w-4 h-4 text-[#ffc001]" />}
                          <Badge
                            variant={notice.urgent ? "destructive" : "secondary"}
                            className={notice.urgent ? "bg-[#701719]" : ""}
                          >
                            {notice.category}
                          </Badge>
                          {notice.urgent && (
                            <Badge variant="destructive" className="bg-red-500 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              URGENT
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(notice.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <CardTitle className="text-[#0a4936] text-xl">{notice.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{notice.content}</p>
                      {notice.attachment && (
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm" className="bg-transparent">
                            <Download className="w-4 h-4 mr-2" />
                            {notice.attachment}
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button
                  variant="outline"
                  className="border-[#0a4936] text-[#0a4936] hover:bg-[#0a4936] hover:text-white bg-transparent"
                >
                  Load More Notices
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Notice */}
              <Card className="bg-gradient-to-br from-[#701719]/10 to-[#ffc001]/10">
                <CardHeader>
                  <CardTitle className="text-[#0a4936] flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Important Notice
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-4">
                    All students must complete their course registration by June 30, 2024. Late registrations will incur
                    additional fees.
                  </p>
                  <Button size="sm" className="w-full bg-[#701719] hover:bg-[#701719]/90">
                    Read Full Notice
                  </Button>
                </CardContent>
              </Card>

              {/* Notice Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#0a4936]">Notice Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: "Examinations", count: 12, color: "bg-[#0a4936]" },
                      { name: "Academic", count: 8, color: "bg-[#ffc001]" },
                      { name: "Finance", count: 5, color: "bg-[#701719]" },
                      { name: "Library", count: 3, color: "bg-[#0a4936]" },
                      { name: "Sports", count: 4, color: "bg-[#ffc001]" },
                      { name: "Placements", count: 6, color: "bg-[#701719]" },
                    ].map((category, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-2 hover:bg-gray-50 rounded cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 ${category.color} rounded-full`}></div>
                          <span className="text-sm">{category.name}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {category.count}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Updates */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#0a4936]">Recent Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { title: "New Course Added", time: "2 hours ago" },
                      { title: "Faculty Meeting", time: "1 day ago" },
                      { title: "System Maintenance", time: "2 days ago" },
                      { title: "Holiday Announcement", time: "3 days ago" },
                    ].map((update, index) => (
                      <div key={index} className="border-l-4 border-[#0a4936] pl-3">
                        <p className="text-sm font-medium text-[#0a4936]">{update.title}</p>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span>{update.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact for Queries */}
              <Card className="border-[#ffc001] border-2">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#ffc001] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-[#0a4936] mb-2">Have Questions?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Contact the administration office for any queries regarding notices
                  </p>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Contact Office
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
