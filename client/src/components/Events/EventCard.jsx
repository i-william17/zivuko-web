import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../../redux/actions/cart";
import { toast } from "react-toastify";
import CountDown from "./CountDown";

const EventCard = ({ active, data }) => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Early return if data is not provided
  if (!data) {
    return null;
  }

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

  // Safely access image URL with fallback
  const imageUrl = data.images?.[0]?.url || '/placeholder-image.jpg';

  return (
    <div className={`w-full bg-white rounded-xl shadow-lg transition-transform duration-300 hover:shadow-xl ${active ? "mb-0" : "mb-8"}`}>
      <div className="flex flex-col lg:flex-row">
        {/* Image Container */}
        <div className="w-full lg:w-1/2 p-4">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <img
              src={imageUrl}
              alt={data.name || 'Event'}
              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute top-3 right-3">
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Sale
              </span>
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="w-full lg:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
              {data.name || 'Untitled Event'}
            </h2>
            <p className="text-gray-600 mb-4 line-clamp-3">
              {data.description || 'No description available'}
            </p>

            {/* Price and Sales Info */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <span className="text-lg text-gray-400 line-through">
                  sh {data.originalPrice || 0}
                </span>
                <span className="text-2xl font-bold text-blue-600">
                  sh {data.discountPrice || 0}
                </span>
              </div>
              <div className="flex items-center">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {data.sold_out || 0} sold
                </span>
              </div>
            </div>

            {data && <div className="mb-4">
              <CountDown data={data} />
            </div>}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              to={`/product/${data._id}?isEvent=true`}
              className="flex-1"
            >
              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-300">
                See Details
              </button>
            </Link>
            <button
              onClick={() => addToCartHandler(data)}
              className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg font-medium transition-colors hover:bg-green-700 focus:ring-2 focus:ring-green-300"
              disabled={data.stock < 1}
            >
              {data.stock < 1 ? 'Out of Stock' : 'Add to cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;