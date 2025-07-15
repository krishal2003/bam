import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a4936] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Institute Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="svi.png" alt="" width="50px" />

              <div>
                <h3 className="text-xl font-bold">SVI </h3>
                <p className="text-sm opacity-90">Undergrad Program</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Where aviation dreams take flight! Preparing the next generation
              of aviation professionals through excellence in education and
              training.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/schoolofaviationmanagement"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5 cursor-pointer hover:text-[#ffc001] transition-colors" />
              </a>
              <a
                href="https://www.youtube.com/@sviofficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="w-5 h-5 cursor-pointer hover:text-[#ffc001] transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/svi.undergrad/?igsh=MXZiNXM2a3JnY3E2aQ%3D%3D#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5 cursor-pointer hover:text-[#ffc001] transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#ffc001] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="hover:text-[#ffc001] transition-colors"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/admissions"
                  className="hover:text-[#ffc001] transition-colors"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="hover:text-[#ffc001] transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#ffc001] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/placements"
                  className="hover:text-[#ffc001] transition-colors"
                >
                  Placements
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Other Programs</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://www.kusom.edu.np/"
                  className="hover:text-[#ffc001] transition-colors"
                  target="_blank"
                >
                  KUSOM{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="https://ku.edu.np/"
                  className="hover:text-[#ffc001] transition-colors"
                  target="_blank"
                >
                  Kathmandu University{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="https://kuhs.edu.np/"
                  className="hover:text-[#ffc001] transition-colors"
                  target="_blank"
                >
                  KUHS{" "}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <a
                  href="https://maps.app.goo.gl/krC5iZZo9X2VUMiS7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Banepa - 5, Kavre, Nepal
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:9707191358" className="hover:underline">
                  9707191358, 9860001697
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a
                  href="mailto:siddharthavanasthalipaanaut@gmail.com"
                  className="hover:underline"
                >
                  siddharthavanasthalipaanaut@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-semibold mb-2">College Hours</h5>
              <p className="text-sm opacity-90">
                Sun-Fri: 08:30 AM - 12:00 PM
                <br />
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-90">
              © {new Date().getFullYear()} Siddartha Vanasthali Institute. All
              rights reserved.
            </p>

            <a href="https://www.uddheshyagroup.com/" target="_blank">
              <p className="text-sm opacity-90">Made by Uddheshya Group </p>
            </a>

            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy"
                className="hover:text-[#ffc001] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-[#ffc001] transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="hover:text-[#ffc001] transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
