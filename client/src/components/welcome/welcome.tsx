'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight, FiShoppingBag, FiStar, FiShield, FiTruck } from 'react-icons/fi';

const HeroSection = () => {
  // Enhanced featured categories with luxury items
  const featuredCategories = [
    { 
      name: 'Premium Electronics', 
      image: '/images/categories/luxury-electronics.jpg', 
      url: '/category/electronics',
      description: 'Cutting-edge technology',
      accentColor: 'bg-blue-100'
    },
    { 
      name: 'Designer Fashion', 
      image: '/images/categories/designer-fashion.jpg', 
      url: '/category/fashion',
      description: 'Haute couture collections',
      accentColor: 'bg-pink-100'
    },
    { 
      name: 'Luxury Home', 
      image: '/images/categories/luxury-home.jpg', 
      url: '/category/home',
      description: 'Elegant living spaces',
      accentColor: 'bg-amber-100'
    },
    { 
      name: 'Fine Jewelry', 
      image: '/images/categories/fine-jewelry.jpg', 
      url: '/category/jewelry',
      description: 'Exquisite craftsmanship',
      accentColor: 'bg-emerald-100'
    },
  ];

  // Luxury value propositions
  const valueProps = [
    {
      icon: <FiShoppingBag className="w-8 h-8 text-[#d4af37]" />,
      title: "Curated Selection",
      description: "Only the finest products from trusted sellers",
      decoration: "absolute -left-4 -top-4 w-16 h-16 rounded-full bg-[#d4af37]/10 -z-10"
    },
    {
      icon: <FiStar className="w-8 h-8 text-[#d4af37]" />,
      title: "VIP Service",
      description: "Dedicated support for premium clients",
      decoration: "absolute -right-4 -bottom-4 w-16 h-16 rounded-full bg-[#d4af37]/10 -z-10"
    },
    {
      icon: <FiShield className="w-8 h-8 text-[#d4af37]" />,
      title: "Secure Payments",
      description: "Encrypted transactions for your safety",
      decoration: "absolute -left-4 -bottom-4 w-16 h-16 rounded-full bg-[#d4af37]/10 -z-10"
    },
    {
      icon: <FiTruck className="w-8 h-8 text-[#d4af37]" />,
      title: "White-Glove Delivery",
      description: "Discreet packaging and premium shipping",
      decoration: "absolute -right-4 -top-4 w-16 h-16 rounded-full bg-[#d4af37]/10 -z-10"
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Luxury Hero Banner with Parallax Effect */}
      <div className="relative h-screen min-h-[800px] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          {/* Gold decorative swirls */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[url('/images/gold-swirl.png')] bg-contain bg-no-repeat opacity-20"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[url('/images/gold-swirl.png')] bg-contain bg-no-repeat opacity-20 rotate-180"></div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[url('/images/subtle-grid.png')] opacity-10"></div>
        </div>

        {/* Background Image with Parallax */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/luxury-hero-banner.jpg"
            alt="Luxury shopping experience"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
            className="object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="max-w-2xl relative">
              {/* Decorative accent */}
              <div className="absolute -left-8 -top-8 w-32 h-32 rounded-full bg-[#d4af37]/20 blur-xl"></div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-6">
                <span className="block">Elevate Your</span>
                <span className="block font-serif italic relative">
                  Shopping Experience
                  <span className="absolute -bottom-2 left-0 w-32 h-1 bg-[#d4af37]"></span>
                </span>
              </h1>
              <p className="mt-6 text-xl text-white/90 max-w-lg leading-relaxed">
                Discover Kenya's premier luxury marketplace with exclusive collections and personalized service.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/collections" 
                  className="relative px-8 py-4 bg-[#d4af37] text-white text-lg font-medium rounded-sm hover:bg-[#c9a227] transition-all duration-300 flex items-center justify-center group overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Explore Collections
                    <FiArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#d4af37] to-[#f1d27e] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
                <Link 
                  href="/private-client" 
                  className="relative px-8 py-4 border-2 border-white text-white text-lg font-medium rounded-sm hover:bg-white/10 transition-all duration-300 group overflow-hidden"
                >
                  <span className="relative z-10">Private Client Services</span>
                  <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Luxury Value Propositions */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-white/80 backdrop-blur-sm py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {valueProps.map((item, index) => (
                <div key={index} className="relative p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden">
                  <div className={item.decoration}></div>
                  <div className="flex items-start z-10">
                    <div className="flex-shrink-0 p-2 rounded-full bg-[#d4af37]/10">
                      {item.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Curated Collections */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 relative">
        {/* Decorative background elements */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#d4af37]/10 blur-3xl -z-10"></div>
        <div className="absolute -bottom-20 -left-40 w-96 h-96 rounded-full bg-[#d4af37]/5 blur-3xl -z-10"></div>
        
        <div className="text-center mb-16 relative">
          <div className="inline-block relative">
            <h2 className="text-3xl font-light text-gray-900 sm:text-4xl">
              <span className="block">Our Curated</span>
              <span className="block font-serif italic text-[#d4af37]">Collections</span>
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#d4af37]"></div>
          </div>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Hand-selected luxury items from Kenya's finest artisans and global brands.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 relative">
          {featuredCategories.map((category, index) => (
            <Link 
              key={category.name} 
              href={category.url} 
              className="group relative overflow-hidden"
            >
              <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={category.image}
                  alt={category.name}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-center object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 ${category.accentColor} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="mt-6 text-center relative">
                <h3 className="text-xl font-medium text-gray-900 group-hover:text-[#d4af37] transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{category.description}</p>
                <div className="mt-4 inline-block w-8 h-0.5 bg-[#d4af37] group-hover:w-16 transition-all duration-300"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Luxury CTA */}
      <div className="relative bg-[#1a1a1a] py-24 px-6 sm:py-32 lg:px-8 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {/* Gold decorative elements */}
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[url('/images/gold-ornament.png')] bg-contain bg-no-repeat opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[url('/images/gold-ornament.png')] bg-contain bg-no-repeat opacity-10 rotate-45"></div>
          
          {/* Subtle texture */}
          <div className="absolute inset-0 bg-[url('/images/luxury-texture.png')] opacity-5"></div>
        </div>
        
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-block relative">
            <h2 className="text-3xl font-light text-white sm:text-4xl">
              <span className="block">Ready to Experience</span>
              <span className="block font-serif italic text-[#d4af37]">Luxury Shopping?</span>
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-[#d4af37]"></div>
          </div>
          <p className="mt-6 text-lg leading-8 text-white/90">
            Join our exclusive community of discerning shoppers and enjoy personalized service, private viewings, and members-only benefits.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/register"
              className="relative px-8 py-4 bg-[#d4af37] text-white text-lg font-medium rounded-sm hover:bg-[#c9a227] transition-all duration-300 group overflow-hidden"
            >
              <span className="relative z-10">Become a Member</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#d4af37] to-[#f1d27e] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
            <Link
              href="/about"
              className="relative px-8 py-4 text-lg font-medium text-white hover:text-[#d4af37] transition-colors duration-300 group"
            >
              <span className="relative z-10">Learn more <span aria-hidden="true">→</span></span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
        </div>
      </div>

      {/* Luxury Payment Section */}
      <div className="bg-white py-20 px-6 sm:py-24 lg:px-8 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f9f7f0] -z-10"></div>
        <div className="absolute top-1/2 -right-20 w-64 h-64 rounded-full bg-[#d4af37]/10 blur-xl"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2 lg:pr-12 relative">
              {/* Decorative accent */}
              <div className="absolute -left-8 -top-8 w-32 h-32 rounded-full bg-[#d4af37]/20 blur-xl"></div>
              
              <h2 className="text-3xl font-light text-gray-900 sm:text-4xl">
                <span className="block">Secure & Convenient</span>
                <span className="block font-serif italic text-[#d4af37] relative">
                  Payment Options
                  <span className="absolute -bottom-2 left-0 w-24 h-0.5 bg-[#d4af37]"></span>
                </span>
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                We offer multiple secure payment methods including M-Pesa, credit cards, and bank transfers for your convenience. All transactions are encrypted with bank-level security.
              </p>
              <div className="mt-10">
                <Link
                  href="/payment-methods"
                  className="relative inline-flex items-center text-lg font-medium text-[#1a1a1a] hover:text-[#d4af37] transition-colors duration-300 group"
                >
                  <span className="relative z-10 flex items-center">
                    View all payment options
                    <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </div>
            </div>
            <div className="mt-16 lg:mt-0 lg:w-1/2 relative">
              <div className="relative aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl border-8 border-white transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <Image
                  src="/images/luxury-payment-methods.jpg"
                  alt="Payment methods"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-center"
                />
                {/* Decorative frame */}
                <div className="absolute inset-0 border-8 border-white/20 pointer-events-none"></div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-[#d4af37]/10 blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;