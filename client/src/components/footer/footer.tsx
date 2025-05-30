'use client';

import React from 'react';
import Link from 'next/link';
import { FiMail, FiPhone, FiMessageSquare, FiChevronRight } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Enhanced curved top with multiple wave layers */}
      <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden -translate-y-[99%] z-10">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-full"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            fill="rgba(15,23,42,1)" 
            className="opacity-100"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            fill="rgba(15,23,42,1)" 
            className="opacity-30"
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            fill="rgba(15,23,42,1)" 
            className="opacity-70"
          ></path>
        </svg>
      </div>

      {/* Wave divider graphics throughout footer */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Large background waves */}
        <div className="absolute -bottom-40 -left-40 w-[800px] h-[800px] opacity-5">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#10B981" d="M42.7,-59.2C54.5,-53.1,63.1,-39.9,68.2,-25.2C73.3,-10.5,74.9,5.7,69.8,19.3C64.7,32.9,52.9,43.9,39.2,52.8C25.5,61.7,9.9,68.5,-6.1,75.4C-22.1,82.3,-44.2,89.3,-58.2,80.8C-72.2,72.2,-78.1,48.1,-77.7,26.9C-77.3,5.7,-70.6,-12.6,-61.5,-28.9C-52.3,-45.2,-40.7,-59.5,-27.1,-65C-13.5,-70.5,2.1,-67.2,17.3,-62.1C32.5,-57,47.3,-50.1,42.7,-59.2Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#10B981" d="M34.9,-50.3C45.9,-42.3,56,-34.5,62.6,-23.8C69.2,-13.1,72.4,0.5,68.2,11.3C64,22.2,52.5,30.4,40.4,37.2C28.3,44,15.7,49.5,1.9,47C-11.9,44.5,-25.9,34,-37.3,24.2C-48.7,14.4,-57.5,5.2,-60.1,-6.7C-62.7,-18.6,-59.1,-37.2,-48.4,-45.4C-37.7,-53.6,-19.9,-51.4,-2.1,-49C15.7,-46.6,31.4,-44,34.9,-50.3Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        {/* Small floating waves */}
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className={`absolute opacity-10 ${i % 2 === 0 ? 'text-emerald-400' : 'text-emerald-300'}`}
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out ${Math.random() * 5}s`
            }}
          >
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M39.3,-53.9C51.3,-45.3,61.8,-35.2,65.8,-22.6C69.8,-10,67.3,5.2,60.1,17.2C52.9,29.2,41,38.1,28.4,46.1C15.8,54.1,2.5,61.3,-12.1,65.2C-26.7,69.2,-42.5,69.9,-53.1,61.4C-63.7,52.9,-69.2,35.2,-70.1,17.9C-71,0.6,-67.4,-16.3,-58.2,-29.2C-49,-42.1,-34.3,-51.1,-21.1,-59.3C-7.9,-67.6,3.9,-75.2,15.6,-72.5C27.2,-69.8,38.7,-56.9,39.3,-53.9Z" transform="translate(100 100)" />
            </svg>
          </div>
        ))}
      </div>

      <footer className="bg-gradient-to-br from-black via-[#0f172a] to-[#001f1f] text-white font-sans pt-32 pb-8 px-6 sm:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Contact Info */}
            <div className="space-y-6 relative">
              <div className="absolute -top-6 -left-4 w-24 h-24 bg-emerald-400/10 rounded-full blur-xl"></div>
              <h3 className="text-xl font-medium text-emerald-400 bg-gradient-to-r from-emerald-400/30 to-transparent w-fit px-4 py-2 rounded-lg backdrop-blur-sm z-10 relative">
                Contact us
              </h3>
              <div className="space-y-4 relative z-10">
                <div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10 hover:border-emerald-400/30 transition-all hover:shadow-lg hover:shadow-emerald-400/10">
                  <p className="font-medium">Zivuko Kenya</p>
                  <p className="text-white/80">507-Union Trade Centre, Nairobi</p>
                </div>
                <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10 hover:border-emerald-400/30 transition-all hover:shadow-lg hover:shadow-emerald-400/10">
                  <FiMail className="mt-1 text-emerald-400 flex-shrink-0" />
                  <a href="mailto:sales@zivuko.com" className="hover:text-emerald-400 transition-colors">sales@zivuko.com</a>
                </div>
                <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10 hover:border-emerald-400/30 transition-all hover:shadow-lg hover:shadow-emerald-400/10">
                  <FiPhone className="mt-1 text-emerald-400 flex-shrink-0" />
                  <a href="tel:+254712345678" className="hover:text-emerald-400 transition-colors">(+254) 712-345-678</a>
                </div>
                <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10 hover:border-emerald-400/30 transition-all hover:shadow-lg hover:shadow-emerald-400/10">
                  <FiMessageSquare className="mt-1 text-emerald-400 flex-shrink-0" />
                  <a href="#" className="hover:text-emerald-400 transition-colors">Online Chat</a>
                </div>
                <button className="group text-emerald-400 hover:text-white flex items-center gap-1 bg-white/5 px-4 py-3 rounded-lg border border-white/10 hover:border-emerald-400/50 transition-all w-full hover:shadow-lg hover:shadow-emerald-400/10">
                  <span className="group-hover:underline">Get Expert Help</span>
                  <FiChevronRight className="mt-0.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Products */}
            <div className="space-y-6 relative">
              <div className="absolute -top-6 -right-4 w-20 h-20 bg-emerald-400/10 rounded-full blur-xl"></div>
              <h3 className="text-xl font-medium text-emerald-400 bg-gradient-to-r from-emerald-400/30 to-transparent w-fit px-4 py-2 rounded-lg backdrop-blur-sm z-10 relative">
                Products
              </h3>
              <ul className="space-y-3 relative z-10">
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
                    <Link 
                      href={item.href} 
                      className="flex items-center gap-2 hover:text-emerald-400 transition-colors group px-3 py-2 rounded-lg hover:bg-white/5"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-400/0 group-hover:bg-emerald-400 transition-all"></span>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Company */}
            <div className="space-y-6 relative">
              <div className="absolute -bottom-6 -left-4 w-16 h-16 bg-emerald-400/10 rounded-full blur-xl"></div>
              <h3 className="text-xl font-medium text-emerald-400 bg-gradient-to-r from-emerald-400/30 to-transparent w-fit px-4 py-2 rounded-lg backdrop-blur-sm z-10 relative">
                Our Company
              </h3>
              <ul className="space-y-3 relative z-10">
                {[
                  { name: "Delivery", href: "/delivery" },
                  { name: "Legal Notice", href: "/legal-notice" },
                  { name: "Terms & Conditions", href: "/terms" },
                  { name: "About us", href: "/about" },
                  { name: "Secure payment", href: "/secure-payment" },
                  { name: "Login", href: "/login" }
                ].map((item, index) => (
                  <li key={index}>
                    <Link 
                      href={item.href} 
                      className="flex items-center gap-2 hover:text-emerald-400 transition-colors group px-3 py-2 rounded-lg hover:bg-white/5"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-400/0 group-hover:bg-emerald-400 transition-all"></span>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-6 relative">
              <div className="absolute -bottom-6 -right-4 w-28 h-28 bg-emerald-400/10 rounded-full blur-xl"></div>
              <h3 className="text-xl font-medium text-emerald-400 bg-gradient-to-r from-emerald-400/30 to-transparent w-fit px-4 py-2 rounded-lg backdrop-blur-sm z-10 relative">
                Newsletter
              </h3>
              <div className="space-y-4 relative z-10">
                <p className="text-white/80 bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10 hover:border-emerald-400/30 transition-all hover:shadow-lg hover:shadow-emerald-400/10">
                  Subscribe to our exclusive newsletter for VIP access to private sales and luxury collections.
                </p>
                <form className="space-y-4">
                  <div className="relative">
                    <input 
                      type="email" 
                      placeholder="Your Email Address" 
                      className="w-full bg-white/10 border border-white/20 px-4 py-3 focus:outline-none focus:border-emerald-400 transition-colors placeholder-white/60 rounded-lg backdrop-blur-sm hover:shadow-lg hover:shadow-emerald-400/10"
                      required
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-emerald-400 to-emerald-600 text-black px-6 py-3 font-medium hover:from-emerald-300 hover:to-emerald-500 transition-all rounded-lg shadow-lg shadow-emerald-400/20 hover:shadow-emerald-400/30 relative overflow-hidden group"
                  >
                    <span className="relative z-10">SUBSCRIBE</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </button>
                  <div className="flex items-start space-x-2 bg-white/5 p-3 rounded-lg backdrop-blur-sm border border-white/10 hover:border-emerald-400/30 transition-all">
                    <input 
                      type="checkbox" 
                      id="terms-agree" 
                      className="mt-1 accent-emerald-400" 
                      required 
                    />
                    <label htmlFor="terms-agree" className="text-sm text-white/80">
                      I agree to the terms and conditions and the privacy policy
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center relative">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Zivuko Kenya. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Cookies", href: "/cookies" },
                { name: "Accessibility", href: "/accessibility" }
              ].map((item, index) => (
                <Link 
                  key={index}
                  href={item.href} 
                  className="text-white/60 hover:text-emerald-400 transition-colors text-sm relative after:absolute after:content-[''] after:w-0 after:h-px after:bg-emerald-400 after:bottom-0 after:left-0 hover:after:w-full after:transition-all"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(2deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Footer;