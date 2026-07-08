import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';
import { SiReddit } from 'react-icons/si';
import logo from '../components/logos.png'; // Updated logo path

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="AEROVHYN Logo" className="h-8 w-auto" />
              <span className="text-xl font-heading font-bold">AEROVHYN</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading UAV and aerospace solutions provider, specializing in cutting-edge drone technology and embedded systems.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/aerovhyn.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-highlight transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/aerovhynpvtltd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-highlight transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@AEROVHYN"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-highlight transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://www.reddit.com/user/aerovhyn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-highlight transition-colors"
              >
                <SiReddit className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/aerovhyn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-highlight transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Solutions', 'Technology', 'Gallery'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-highlight transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>UAV Design & Development</li>
              <li>Surveillance Systems</li>
              <li>Embedded Solutions</li>
              <li>Aerospace Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-highlight flex-shrink-0" />
                <span className="text-gray-300 text-sm">Vijayawada, AP, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-highlight flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91 99080 41738</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-highlight flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@aerovhyn.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2025 AEROVHYN Technologies Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
