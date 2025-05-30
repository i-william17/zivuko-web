'use client';

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { categoriesData } from "../../static/data";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FiGift, FiUserPlus, FiLogIn, FiHelpCircle, FiPackage } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import DropDown from "./dropdown";
import Navbar from "./nav";
import { useSelector } from "react-redux";
import Cart from "../cart/cart";
import Wishlist from "../wishlist/wishlist";
import { RxCross1 } from "react-icons/rx";

const Header = ({ activeHeading }) => {
  // State and Redux hooks
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { isSeller } = useSelector((state) => state.seller);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const { allProducts } = useSelector((state) => state.products);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const searchResultsRef = useRef(null);

  // Search functionality
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts = allProducts?.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchData(filteredProducts);
  };

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchResultsRef.current && !searchResultsRef.current.contains(event.target)) {
        setSearchData(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Promo Bar */}
      <div className="bg-gradient-to-r from-[#1E3A8A] to-[#142a66] py-2 text-sm text-white z-[100] border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
          {/* Left side - Promo message */}
          <div className="hidden md:flex items-center space-x-2">
            <FiGift className="text-[#2ECC71] animate-pulse" />
            <span className="text-xs sm:text-sm">
              Free delivery on orders over <span className="font-bold">KSh 2,000</span>
            </span>
          </div>

          {/* Right side - Navigation links */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <Link
              href="/signup"
              className="flex items-center hover:text-[#2ECC71] transition-all duration-300 group"
            >
              <FiUserPlus className="mr-1.5 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">Sign Up</span>
            </Link>

            <Link
              href="/login"
              className="flex items-center hover:text-[#2ECC71] transition-all duration-300 group"
            >
              <FiLogIn className="mr-1.5 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">Login</span>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/help-center"
                className="flex items-center hover:text-[#2ECC71] transition-all duration-300 group"
              >
                <FiHelpCircle className="mr-1.5 group-hover:scale-110 transition-transform" />
                <span>Help Center</span>
              </Link>

              <Link
                href="/track-order"
                className="flex items-center hover:text-[#2ECC71] transition-all duration-300 group"
              >
                <FiPackage className="mr-1.5 group-hover:scale-110 transition-transform" />
                <span>Track Order</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`w-full bg-white ${active ? "sticky top-0 shadow-md z-[99]" : ""}`}>
        {/* Desktop Header */}
        <div className="max-w-7xl mx-auto hidden md:flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 border-b border-gray-100">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/1-nobg.png"
              alt="logo"
              width={180}
              height={180}
              className="cursor-pointer"
            />
          </Link>

          {/* Search Bar */}
          <div className="flex-grow mx-10 max-w-xl relative">
            <div className="relative flex items-center border-b-2 border-gray-200 transition-all duration-300 focus-within:border-[#1E3A8A]">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full py-3 pl-1 pr-12 text-gray-900 bg-transparent text-sm focus:outline-none"
              />
              <button className="absolute right-0 top-1/2 transform -translate-y-1/2 p-1">
                <AiOutlineSearch size={18} className="text-gray-500 hover:text-[#1E3A8A]" />
              </button>
            </div>

            {/* Search Results Dropdown */}
            {searchData?.length > 0 && (
              <div
                ref={searchResultsRef}
                className="absolute mt-2 w-full bg-white shadow-xl z-[100] rounded-md border border-gray-200 overflow-hidden"
              >
                <div className="max-h-[60vh] overflow-y-auto">
                  <div className="p-2 bg-gray-50 border-b border-gray-200">
                    <p className="text-xs text-gray-500 uppercase">
                      {searchData.length} products found
                    </p>
                  </div>

                  {searchData.map((product) => (
                    <Link
                      href={`/product/${product._id}`}
                      key={product._id}
                      className="block hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center p-4 border-b border-gray-100 last:border-0">
                        <div className="relative w-16 h-16 flex-shrink-0 mr-4">
                          <Image
                            src={product.images[0]?.url}
                            alt={product.name}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-sm font-medium text-gray-900">
                            {product.name}
                          </h3>
                          <p className="text-sm text-[#1E3A8A] mt-1">
                            ${product.price}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-6">
            {/* Seller Dashboard */}
            <Link
              href={isSeller ? "/dashboard" : "/shop-create"}
              className="bg-[#1E3A8A] text-white px-4 py-2 rounded-md hover:bg-[#142a66] flex items-center transition-colors"
            >
              {isSeller ? "Dashboard" : "Become Seller"}
              <IoIosArrowForward className="ml-1" />
            </Link>

            {/* Wishlist */}
            <div className="relative cursor-pointer" onClick={() => setOpenWishlist(true)}>
              <AiOutlineHeart size={26} className="text-gray-700 hover:text-[#2ECC71]" />
              {wishlist?.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#2ECC71] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </div>

            {/* Cart */}
            <div className="relative cursor-pointer" onClick={() => setOpenCart(true)}>
              <AiOutlineShoppingCart size={26} className="text-gray-700 hover:text-[#1E3A8A]" />
              {cart?.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#1E3A8A] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </div>

            {/* Profile */}
            <div className="relative cursor-pointer">
              {isAuthenticated ? (
                <Link href="/profile">
                  <img
                    src={user?.avatar?.url}
                    className="w-8 h-8 rounded-full border-2 border-[#2ECC71]"
                    alt="Profile"
                  />
                </Link>
              ) : (
                <Link href="/login">
                  <CgProfile size={26} className="text-gray-700 hover:text-[#1E3A8A]" />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden bg-white py-4 px-6 flex items-center justify-between border-b border-gray-100 shadow-sm z-[98]">
          <button
            onClick={() => setOpenMobileMenu(true)}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <BiMenuAltLeft size={24} className="text-gray-900" />
          </button>

          <Link href="/" className="flex items-center">
            <Image
              src="/1-nobg.png"
              alt="logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </Link>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setOpenCart(true)}
              className="p-1 relative hover:bg-gray-100 rounded-full transition-colors"
            >
              <AiOutlineShoppingCart size={22} className="text-gray-900" />
              {cart?.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#1E3A8A] text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden px-6 py-3 bg-gray-50 z-[98]">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full py-3 pl-4 pr-10 bg-white border border-gray-200 rounded-full text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#1E3A8A]"
            />
            <AiOutlineSearch
              size={18}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
          </div>

          {searchData?.length > 0 && (
            <div
              ref={searchResultsRef}
              className="mt-2 bg-white shadow-lg rounded-lg z-[100] border border-gray-200 max-h-[50vh] overflow-y-auto"
            >
              {searchData.map((product) => (
                <Link
                  href={`/product/${product._id}`}
                  key={product._id}
                  onClick={() => setSearchData(null)}
                  className="block hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center p-4 border-b border-gray-100">
                    <div className="relative w-12 h-12 flex-shrink-0 mr-3">
                      <Image
                        src={product.images[0]?.url}
                        alt={product.name}
                        fill
                        className="object-cover rounded"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                      <p className="text-sm text-[#1E3A8A] mt-1">
                        ${product.price}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="bg-white border-t border-gray-100 z-[97]">
          <div className="max-w-7xl mx-auto hidden md:flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3">
            {/* Categories Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-[#2ECC71] font-medium transition-colors"
                onClick={() => setDropDown(!dropDown)}
              >
                <BiMenuAltLeft size={20} />
                <span>All Categories</span>
                <IoIosArrowDown size={16} className={`transition-transform ${dropDown ? 'rotate-180' : ''}`} />
              </button>

              {dropDown && (
                <DropDown
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                />
              )}
            </div>

            {/* Navigation Links */}
            <Navbar active={activeHeading} />

            {/* Delivery Info */}
            <div className="flex items-center text-gray-600">
              <span className="hidden lg:inline">Free Delivery in Nairobi</span>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {openMobileMenu && (
        <div className="fixed inset-0 z-[100]">
          <div
            className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"
            onClick={() => setOpenMobileMenu(false)}
          />

          <div className="relative bg-white h-full w-4/5 max-w-xs overflow-y-auto">
            {/* Menu Header */}
            <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-gray-50">
              <div className="flex items-center">
                {isAuthenticated && (
                  <Link href="/profile" onClick={() => setOpenMobileMenu(false)}>
                    <Image
                      src={user?.avatar?.url || "/default-avatar.jpg"}
                      width={40}
                      height={40}
                      className="rounded-full border border-gray-200 mr-3"
                      alt="Profile"
                    />
                  </Link>
                )}
                <h3 className="text-lg font-medium text-gray-900">
                  {isAuthenticated ? `Hi, ${user.name.split(' ')[0]}` : 'Menu'}
                </h3>
              </div>
              <RxCross1
                size={20}
                className="text-gray-500 cursor-pointer hover:text-gray-900 transition-colors"
                onClick={() => setOpenMobileMenu(false)}
              />
            </div>

            <div className="p-6">
              {/* Auth Buttons */}
              {!isAuthenticated && (
                <div className="flex space-x-4 mb-8">
                  <Link
                    href="/login"
                    className="flex-1 text-center py-3 border border-gray-900 text-sm text-gray-900 tracking-wider hover:bg-gray-900 hover:text-white transition-colors"
                    onClick={() => setOpenMobileMenu(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/sign-up"
                    className="flex-1 text-center py-3 bg-gray-900 text-sm text-white tracking-wider hover:bg-[#1E3A8A] transition-colors"
                    onClick={() => setOpenMobileMenu(false)}
                  >
                    Register
                  </Link>
                </div>
              )}

              {/* Navigation */}
              <Navbar active={activeHeading} mobile setOpenMobileMenu={setOpenMobileMenu} />

              {/* Quick Actions */}
              <div className="space-y-4 mt-6">
                <button
                  className="w-full flex items-center justify-between py-3 text-gray-900 hover:text-[#2ECC71] transition-colors"
                  onClick={() => {
                    setOpenWishlist(true);
                    setOpenMobileMenu(false);
                  }}
                >
                  <div className="flex items-center">
                    <AiOutlineHeart size={20} className="mr-3" />
                    <span>My Wishlist</span>
                  </div>
                  {wishlist?.length > 0 && (
                    <span className="bg-[#2ECC71] text-white text-xs rounded-full px-2 py-1">
                      {wishlist.length}
                    </span>
                  )}
                </button>

                <Link
                  href={isSeller ? "/dashboard" : "/shop-create"}
                  className="block w-full text-center py-3 bg-[#1E3A8A] text-sm text-white tracking-wider hover:bg-[#142a66] transition-colors"
                  onClick={() => setOpenMobileMenu(false)}
                >
                  {isSeller ? "Seller Dashboard" : "Become a Seller"}
                </Link>
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-xs text-gray-500 uppercase mb-3">Need Help?</h4>
                <a href="tel:+254700000000" className="block text-sm text-gray-900 mb-2 hover:text-[#1E3A8A] transition-colors">
                  +254 700 000000
                </a>
                <a href="mailto:support@example.com" className="block text-sm text-gray-900 hover:text-[#1E3A8A] transition-colors">
                  support@example.com
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Popup */}
      {openCart && <Cart setOpenCart={setOpenCart} />}

      {/* Wishlist Popup */}
      {openWishlist && <Wishlist setOpenWishlist={setOpenWishlist} />}
    </>
  );
};

export default Header;