import React from 'react';
import { useSelector } from 'react-redux';
import EventCard from "./EventCard";

const Events = () => {
  const { allEvents = [], isLoading } = useSelector((state) => state.events);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Popular Events</h1>
        <div className="h-1 w-20 bg-blue-500 rounded"></div>
      </div>

      {allEvents.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allEvents.map((event) => (
            <div key={event.id} className="transform transition duration-300 hover:scale-105">
              <EventCard event={event} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
          <div className="text-6xl mb-4">🎫</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No Events Available</h3>
          <p className="text-gray-600">Check back later for upcoming events!</p>
        </div>
      )}
    </div>
  );
};

export default Events;