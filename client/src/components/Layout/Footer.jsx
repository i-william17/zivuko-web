import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { Link } from "react-router-dom";
import { footercompanyLinks, footerProductLinks, footerSupportLinks } from "../../static/data";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <div className="bg-black text-white">
      {/* Subscribe Section */}
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-indigo-900 py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-green-400">Subscribe</span> to get news on{" "}
          <br />
          events and offers
        </h1>
        <div className="flex flex-col sm:flex-row items-center">
          <input
            type="text"
            required
            placeholder="Enter your email..."
            className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button className="bg-green-400 hover:bg-green-500 transition duration-300 px-5 py-2.5 rounded-md text-white md:w-auto w-full">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        {/* Social Media Section */}
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <img
            src="/path-to-logo.png" // Replace with your logo path
            alt="Company Logo"
            className="mb-4"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <p className="mb-4">
            Stay connected with us on social media.
          </p>
          <div className="flex items-center mt-3 space-x-4">
            <a href="https://facebook.com" aria-label="Facebook" className="text-gray-400 hover:text-blue-600 transition duration-300">
              <AiFillFacebook size={25} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="text-gray-400 hover:text-blue-400 transition duration-300">
              <AiOutlineTwitter size={25} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="text-gray-400 hover:text-pink-500 transition duration-300">
              <AiFillInstagram size={25} />
            </a>
            <a href="https://youtube.com" aria-label="YouTube" className="text-gray-400 hover:text-red-600 transition duration-300">
              <AiFillYoutube size={25} />
            </a>
          </div>
        </ul>

        {/* More Links */}
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold text-lg">More</h1>
          {footerProductLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-green-400 transition duration-300 text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Info Links */}
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold text-lg">Contact Info</h1>
          {footercompanyLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-green-400 transition duration-300 text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Support Links */}
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold text-lg">Support</h1>
          {footerSupportLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-green-400 transition duration-300 text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Bottom Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
        <span>© {currentYear} E-duka shopping. All rights reserved.</span>
        <span>
          <Link to="/terms" className="hover:text-green-400">Terms</Link> ·{" "}
          <Link to="/privacy" className="hover:text-green-400">Privacy Policy</Link>
        </span>
        <div className="sm:block flex items-center justify-center w-full">
          <img
            src="/path-to-logo.png" // Replace with your logo path
            alt="Company Logo"
            className="w-24" // Adjust size as needed
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
