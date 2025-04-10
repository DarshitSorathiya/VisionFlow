import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-[rgb(10,10,10)] text-white py-12 px-6">
      {/* Top Divider */}
      <div className="border-t border-gray-600 w-full mb-8"></div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Logo and Social Media */}
        <div>
          <h2 className="text-2xl font-bold mb-4">VisionFlow</h2>
          <p className="text-gray-400 text-sm mb-4">
            Empowering businesses with AI-driven automation and seamless data integration.
          </p>
          
           {/* Contact Information  */}
                <div className="flex items-center space-x-2 text-gray-400 mb-3">
                <Mail className="w-4 h-4 text-white" />
                <a href="mailto:visionflow.business@gmail.com" className="hover:text-blue-400 transition">
                visionflow.business@gmail.com
                </a>
                </div>
                <div className="flex items-center space-x-2 text-gray-400 mb-5">
                <MapPin className="w-4 h-4 text-white" />
                <span>Gujarat, India</span>
                </div>
                
                {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center space-y-2">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <a href="#about" className="text-gray-400 hover:text-white transition">
            About Us
          </a>
          <a href="#services" className="text-gray-400 hover:text-white transition">
            Services
          </a>
          <a href="#contact" className="text-gray-400 hover:text-white transition">
            Contact
          </a>
          <a href="#privacy" className="text-gray-400 hover:text-white transition">
            Privacy Policy
          </a>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-gray-400 text-sm mb-4">
            Stay updated with the latest news and exclusive offers.
          </p>
          <form className="flex flex-col space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="email"
                placeholder="Your email address"
                className="pl-10 w-full px-4 py-2 rounded-md bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md font-medium transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-gray-600 w-full mt-8"></div>

      {/* Copyright */}
      <div className="text-center mt-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} VisionFlow. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;