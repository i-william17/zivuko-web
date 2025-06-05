'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import EventCard from "./EventCard";

const Events = () => {
  const { allEvents = [], isLoading } = useSelector((state) => state.events);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      y: -8,
      transition: { duration: 0.2 }
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"
        />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-3 relative inline-block">
          <span className="relative z-10">
            Popular Events
            <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-green-500 to-gray-800 rounded-full" />
          </span>
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Discover exciting upcoming events you won't want to miss
        </p>
      </motion.div>

      {/* Events Grid */}
      {allEvents.length > 0 ? (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {allEvents.map((event) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              whileHover="hover"
              className="transform transition-all duration-300"
            >
              <div className="relative h-full group">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-sm transition-all duration-300 group-hover:shadow-lg" />
                <div className="relative h-full p-1">
                  <EventCard event={event} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center justify-center py-16 px-4 text-center bg-white rounded-xl shadow-sm border border-gray-100 max-w-2xl mx-auto"
        >
          <div className="text-7xl mb-6">🎫</div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">No Events Available</h3>
          <p className="text-gray-600 max-w-md">
            We're preparing some amazing events. Stay tuned for updates!
          </p>
          <button className="mt-6 px-6 py-2 bg-gray-900 text-white rounded-lg font-medium transition-all duration-300 hover:bg-gray-800">
            Notify Me
          </button>
        </motion.div>
      )}

      {/* View All CTA */}
      {allEvents.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-3 bg-gray-900 text-white rounded-lg font-medium transition-all duration-300 hover:bg-gray-800 hover:shadow-md">
            View All Events
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Events;