'use client';

import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../../redux/actions/cart";
import { toast } from "react-toastify";
import CountDown from "./CountDown";
import Image from "next/image";
import { motion } from "framer-motion";

const EventCard = ({ active, data }) => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (!data) return null;

  const addToCartHandler = (data) => {
    const isItemExists = cart && cart.find((i) => i._id === data._id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (data.stock < 1) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: 1 };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart successfully!");
      }
    }
  };

  const imageUrl = data.images?.[0]?.url || '/placeholder-image.jpg';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`w-full bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden ${active ? "mb-0" : "mb-8"}`}
    >
      <div className="flex flex-col lg:flex-row h-full">
        {/* Image Container */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative aspect-square h-full w-full">
            <Image
              src={imageUrl}
              alt={data.name || 'Event'}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
            />
            {/* Sale Badge with animation */}
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="absolute top-4 right-4"
            >
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                {Math.round(((data.originalPrice - data.discountPrice) / data.originalPrice) * 100)}% OFF
              </span>
            </motion.div>
          </div>
        </div>

        {/* Content Container */}
        <div className="w-full lg:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <motion.h2 
              whileHover={{ color: '#16a34a' }}
              className="text-2xl font-bold text-gray-900 mb-3 transition-colors"
            >
              {data.name || 'Untitled Event'}
            </motion.h2>
            
            <p className="text-gray-600 mb-4 line-clamp-3">
              {data.description || 'No description available'}
            </p>

            {/* Price and Sales Info */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-end space-x-3">
                <span className="text-lg text-gray-400 line-through">
                  ${data.originalPrice || 0}
                </span>
                <span className="text-2xl font-bold text-green-600">
                  ${data.discountPrice || 0}
                </span>
              </div>
              <div className="flex items-center">
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  {data.sold_out || 0} sold
                </span>
              </div>
            </div>

            {data && (
              <div className="mb-4">
                <CountDown data={data} />
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link href={`/product/${data._id}?isEvent=true`} className="flex-1">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 transition-all"
              >
                View Details
              </motion.button>
            </Link>
            <motion.button
              onClick={() => addToCartHandler(data)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              disabled={data.stock < 1}
              className={`flex-1 px-6 py-3 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all ${
                data.stock < 1 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-300'
              }`}
            >
              {data.stock < 1 ? 'Out of Stock' : 'Add to Cart'}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;