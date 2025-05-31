'use client';

import React from 'react';
import Link from 'next/link';
import { FiMail, FiPhone, FiMessageSquare, FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 font-sans relative pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Grid content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Contact Info */}
          <div className="space-y-5">
            <div className="mb-8">
              <Image
                src="/1-nobg.png"
                alt="Zivuko Logo"
                width={160}
                height={160}
                className="rounded-xl"
              />
            </div>
            <h3 className="text-lg font-semibold text-white">Contact us</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-white">Zivuko Kenya</p>
                <p>507-Union Trade Centre, Nairobi</p>
              </div>
              <div className="flex items-start gap-3">
                <FiMail className="mt-1 text-gray-400 flex-shrink-0" />
                <a href="mailto:sales@zivuko.com" className="hover:text-white">sales@zivuko.com</a>
              </div>
              <div className="flex items-start gap-3">
                <FiPhone className="mt-1 text-gray-400 flex-shrink-0" />
                <a href="tel:+254712345678" className="hover:text-white">(+254) 712-345-678</a>
              </div>
              <div className="flex items-start gap-3">
                <FiMessageSquare className="mt-1 text-gray-400 flex-shrink-0" />
                <a href="#" className="hover:text-white">Online Chat</a>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-white">Products</h3>
            <ul className="space-y-2">
              {[
                { name: "New Arrivals", href: "/new-arrivals" },
                { name: "Prices drop", href: "/discounts" },
                { name: "New products", href: "/new" },
                { name: "Best sales", href: "/best-sellers" },
                { name: "Contact us", href: "/contact" },
                { name: "Sitemap", href: "/sitemap" },
                { name: "Stores", href: "/stores" }
              ].map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="hover:text-white flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-emerald-500 transition-colors"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Company */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-white">Our Company</h3>
            <ul className="space-y-2">
              {[
                { name: "Delivery", href: "/delivery" },
                { name: "Legal Notice", href: "/legal-notice" },
                { name: "Terms & Conditions", href: "/terms" },
                { name: "About us", href: "/about" },
                { name: "Secure payment", href: "/secure-payment" },
                { name: "Login", href: "/login" }
              ].map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="hover:text-white flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-emerald-500 transition-colors"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p className="text-gray-400">Subscribe for updates on new products and special offers.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full bg-gray-800 border border-gray-700 px-4 py-2.5 placeholder-gray-500 focus:outline-none focus:border-emerald-500 rounded"
                required
              />
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 font-medium transition-colors rounded flex items-center justify-center gap-2"
              >
                Subscribe <FiChevronRight />
              </button>
            </form>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-gray-800 pt-8 pb-16 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div>© {new Date().getFullYear()} Zivuko Kenya. All rights reserved.</div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Privacy Policy", href: "/privacy" },
              { name: "Cookies", href: "/cookies" },
              { name: "Accessibility", href: "/accessibility" },
              { name: "Terms of Service", href: "/terms" }
            ].map((item, index) => (
              <Link key={index} href={item.href} className="hover:text-white">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden translate-y-[99%] animate-[wiggle_8s_ease-in-out_infinite]">
          <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="currentColor"
            className="text-gray-900 opacity-100"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            fill="currentColor"
            className="text-gray-900 opacity-25"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="currentColor"
            className="text-gray-900 opacity-50"
          ></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
