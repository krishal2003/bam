import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#0a4936] mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get in touch with us for admissions, inquiries, or any assistance you need
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-[#0a4936] text-2xl">Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#0a4936] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#0a4936] mb-1">Address</h3>
                      <p className="text-gray-600">
                        Banepa - 5, Kavre
                        <br />
                        Nepal
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-[#0a4936] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#0a4936] mb-1">Phone Numbers</h3>
                      <p className="text-gray-600">
                        9707191358
                        <br />
                        9860001697
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-[#0a4936] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#0a4936] mb-1">Email</h3>
                      <p className="text-gray-600">siddharthavanasthalipaanaut@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-[#0a4936] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#0a4936] mb-1">Office Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 5:00 PM
                        <br />
                        Saturday: 9:00 AM - 1:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#0a4936]">Location Map</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Interactive Map - Banepa, Kavre</p>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" className="w-full bg-transparent">
                      <MapPin className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Inquiry Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#0a4936] text-2xl">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="Enter your first name" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Enter your last name" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="Enter your email" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" placeholder="Enter your phone number" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="inquiryType">Inquiry Type *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admissions">Admissions</SelectItem>
                          <SelectItem value="programs">Programs Information</SelectItem>
                          <SelectItem value="fees">Fee Structure</SelectItem>
                          <SelectItem value="facilities">Facilities</SelectItem>
                          <SelectItem value="placement">Placement</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input id="subject" placeholder="Enter the subject of your inquiry" />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" placeholder="Please provide details about your inquiry..." rows={5} />
                    </div>

                    <div className="flex gap-4">
                      <Button type="submit" className="bg-[#0a4936] hover:bg-[#0a4936]/90 flex-1">
                        Send Message
                      </Button>
                      <Button type="button" variant="outline">
                        Clear Form
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Social Media Links */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="text-[#0a4936]">Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center gap-4">
                    <Button variant="outline" size="icon" className="hover:bg-blue-50 bg-transparent">
                      <Facebook className="w-5 h-5 text-blue-600" />
                    </Button>
                    <Button variant="outline" size="icon" className="hover:bg-blue-50 bg-transparent">
                      <Twitter className="w-5 h-5 text-blue-400" />
                    </Button>
                    <Button variant="outline" size="icon" className="hover:bg-pink-50 bg-transparent">
                      <Instagram className="w-5 h-5 text-pink-600" />
                    </Button>
                    <Button variant="outline" size="icon" className="hover:bg-blue-50 bg-transparent">
                      <Linkedin className="w-5 h-5 text-blue-700" />
                    </Button>
                  </div>
                  <p className="text-center text-sm text-gray-600 mt-4">
                    Stay connected with us for latest updates and announcements
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Contact Cards */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-[#0a4936] text-center mb-8">Quick Contact</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center border-[#0a4936] border-2">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-[#0a4936] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-[#0a4936] mb-2">Admissions Helpline</h3>
                  <p className="text-gray-600 mb-4">For admission related queries</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Call Now: 9707191358
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center border-[#ffc001] border-2">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-[#ffc001] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-[#0a4936] mb-2">Email Support</h3>
                  <p className="text-gray-600 mb-4">Send us your queries via email</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Send Email
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center border-[#701719] border-2">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-[#701719] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-[#0a4936] mb-2">Visit Campus</h3>
                  <p className="text-gray-600 mb-4">Schedule a campus visit</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Book Visit
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
