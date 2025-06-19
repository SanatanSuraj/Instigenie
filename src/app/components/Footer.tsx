'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-trust-navy text-clinic-white py-12 mt-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <h3 className="text-2xl font-playfair mb-6 text-healing-teal">HealthTech Solutions</h3>
            <p className="text-base text-gray-300 mb-6 leading-relaxed max-w-sm">
              Pioneering digital health solutions for schools and communities, making healthcare accessible and efficient.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-healing-teal transition-colors p-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-healing-teal transition-colors p-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/instigenie/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-healing-teal transition-colors p-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-6 text-healing-teal">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-healing-teal transition-colors inline-flex items-center">
                  <span className="mr-2">→</span>About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-healing-teal transition-colors inline-flex items-center">
                  <span className="mr-2">→</span>Services
                </Link>
              </li>
              <li>
                <Link href="/schools" className="text-gray-300 hover:text-healing-teal transition-colors inline-flex items-center">
                  <span className="mr-2">→</span>For Schools
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-healing-teal transition-colors inline-flex items-center">
                  <span className="mr-2">→</span>Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-6 text-healing-teal">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/physical-exam" className="text-gray-300 hover:text-healing-teal transition-colors inline-flex items-center">
                  <span className="mr-2">→</span>Physical Exams
                </Link>
              </li>
              <li>
                <Link href="/mental-health" className="text-gray-300 hover:text-healing-teal transition-colors inline-flex items-center">
                  <span className="mr-2">→</span>Mental Health
                </Link>
              </li>
              <li>
                <Link href="/vision-hearing" className="text-gray-300 hover:text-healing-teal transition-colors inline-flex items-center">
                  <span className="mr-2">→</span>Vision & Hearing
                </Link>
              </li>
              <li>
                <Link href="/dental-care" className="text-gray-300 hover:text-healing-teal transition-colors inline-flex items-center">
                  <span className="mr-2">→</span>Dental Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-6 text-healing-teal">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-healing-teal transition-colors inline-flex items-center">
                  <span className="mr-2">→</span>FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-healing-teal transition-colors inline-flex items-center">
                  <span className="mr-2">→</span>Health Blog
                </Link>
              </li>
              <li>
                <Link href="/book-checkup" className="text-gray-300 hover:text-healing-teal transition-colors inline-flex items-center">
                  <span className="mr-2">→</span>Book a Checkup
                </Link>
              </li>
              <li>
                <Link href="/resources/guides" className="text-gray-300 hover:text-healing-teal transition-colors inline-flex items-center">
                  <span className="mr-2">→</span>Health Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-6 text-healing-teal">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <svg className="w-6 h-6 mt-1 text-healing-teal group-hover:text-gray-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span className="text-gray-300 leading-relaxed">
                  123 Healthcare Avenue<br />
                  Medical District<br />
                  New Delhi, 110001
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <svg className="w-6 h-6 text-healing-teal group-hover:text-gray-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href="mailto:contact@healthtech.com" className="text-gray-300 hover:text-healing-teal transition-colors">
                  contact@healthtech.com
                </a>
              </li>
              <li className="flex items-center space-x-3 group">
                <svg className="w-6 h-6 text-healing-teal group-hover:text-gray-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a href="tel:+1234567890" className="text-gray-300 hover:text-healing-teal transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} HealthTech Solutions. All rights reserved.
            </p>
            <div className="flex items-center space-x-8">
              <a href="#" className="text-gray-400 hover:text-healing-teal transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-healing-teal transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-healing-teal transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
