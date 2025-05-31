'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { brandingData } from '../../static/data';
import {
  FiCreditCard,
  FiTruck,
  FiUserPlus,
  FiSearch,
  FiDollarSign,
  FiUsers,
  FiAward,
  FiShield,
  FiArrowRight
} from 'react-icons/fi';
import { FaLeaf } from 'react-icons/fa';

const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const features = [
    {
      name: 'Zivuko Wallet',
      icon: <FiCreditCard />,
      description: 'Secure digital wallet for seamless transactions',
      url: '/wallet',
      image: '/wallet.jpg',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
    },
    {
      name: 'Hyperlocal Delivery',
      icon: <FiTruck />,
      description: 'Fast same-day delivery within your neighborhood',
      url: '/delivery',
      image: '/images/features/delivery.png',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
    },
    {
      name: 'Seller Tools',
      icon: <FiUserPlus />,
      description: 'Powerful dashboard to grow your business',
      url: '/seller-tools',
      image: '/images/features/seller-tools.png',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
    },
    {
      name: 'Smart Search',
      icon: <FiSearch />,
      description: 'AI-powered product discovery',
      url: '/search',
      image: '/images/features/search.png',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
    },
    {
      name: 'Flexible Payments',
      icon: <FiDollarSign />,
      description: 'MPesa, cards, and installment options',
      url: '/payments',
      image: '/images/features/payments.png',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600',
    },
    {
      name: 'Community Shopping',
      icon: <FiUsers />,
      description: 'Group buying and local recommendations',
      url: '/community',
      image: '/images/features/community.png',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-600',
    },
    {
      name: 'Shopping Rewards',
      icon: <FiAward />,
      description: 'Earn points and exclusive benefits',
      url: '/rewards',
      image: '/images/features/rewards.png',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600',
    },
    {
      name: 'Buyer Protection',
      icon: <FiShield />,
      description: 'Guaranteed safe transactions',
      url: '/protection',
      image: '/images/features/protection.png',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600',
    },
    {
      name: 'Eco-Friendly',
      icon: <FaLeaf />,
      description: 'Sustainable shopping options',
      url: '/eco-friendly',
      image: '/images/features/eco.png',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-600',
    },
  ];

  return (
    <div className="z-0 bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      {/* Hero Banner */}
      <section className="relative h-screen overflow-hidden text-white animate-fade-in">

        {/* Parallax Image with Overlay inside the image container only */}
        <div
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${offsetY * 0.4}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <div className="relative h-full w-full">
            <Image
              src="/img2.jpg"
              alt="Hero Background"
              layout="fill"
              objectFit="cover"
              priority
              className="brightness-50"
            />
            {/* Gradient overlay ONLY ON IMAGE */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent" />
          </div>
        </div>

        {/* Text Content stays clean */}
        <div className="relative max-w-7xl mx-auto h-full flex items-center px-6 lg:px-12">
          <div className="lg:w-2/3">
            <h1 className="relative text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-8 tracking-tight">
              <span className="block text-white">Shop Kenya’s Best</span>
              <span
                className="block relative hollow-text hollow-glow"
                data-text="Online Marketplace"
              >
                Online Marketplace
              </span>
            </h1>


            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mb-10 drop-shadow">
              Discover amazing products from local sellers across Kenya. Fast delivery, secure payments, and unbeatable prices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-primary to-green-500 hover:brightness-110 text-white font-semibold px-8 py-3 rounded-full shadow-lg text-lg"
              >
                🛍️ Shop Now
              </Link>
              <Link
                href="/seller/register"
                className="transition-all duration-300 transform hover:scale-105 border-2 border-white text-white hover:bg-emerald-500:text-primary px-8 py-3 rounded-full text-lg font-semibold shadow-lg backdrop-blur-sm"
              >
                🚀 Become a Seller
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Branding Features */}
      <div className="bg-[#F8F9FA] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {brandingData.map((item) => (
              <div key={item.id} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <div className="mr-4 text-[#2ECC71]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.Description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>



      {/* Promo Banner */}
      {/* <div className="bg-primary text-white py-16 px-4 sm:px-6 lg:px-8 rounded-none">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-2/3">
            <h2 className="text-4xl font-extrabold leading-tight mb-3">
              Ready to boost your business?
              <br />
              <span className="text-white">Join Zivuko Sellers today</span>
            </h2>
            <p className="text-lg text-primary-100">
              Reach millions of customers across Kenya with our powerful e-commerce platform.
            </p>
          </div>
          <div className="md:w-1/3 text-center">
            <Link
              href="/seller/register"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-xl text-primary bg-white hover:bg-gray-50 transition-all duration-300 shadow-lg"
            >
              Become a Seller <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div> */}

      {/* Featured Products Placeholder */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-extrabold tracking-tight">Trending Products</h2>
          <Link href="/products" className="text-primary hover:text-primary-dark text-sm font-medium">
            View all products &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[150px] border-2 border-dashed border-gray-200 rounded-xl items-center justify-center text-gray-400 text-center text-lg">
          <p className="col-span-full py-8">Product cards will appear here soon.</p>
        </div>
      </div> */}

      {/* M-Pesa Highlight Section */}
      {/* <div className="bg-gray-50 dark:bg-gray-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="relative h-64 w-full lg:w-1/2 rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/mpesa-payment.png"
              alt="M-Pesa Payment"
              layout="fill"
              objectFit="contain"
              className="object-center"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
              Pay with M-Pesa
              <br />
              <span className="text-primary">Safe and Convenient</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Enjoy seamless shopping with Kenya's most popular payment method. Complete your purchase in just a few taps on your phone.
            </p>
            <Link
              href="/how-to-pay"
              className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              How to pay with M-Pesa <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HeroSection;
