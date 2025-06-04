'use client';

import React, { useEffect, useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addTocart } from "../../../redux/actions/cart";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../redux/actions/wishlist";
import Image from "next/image";

const ProductDetailsCard = ({ setOpen, data }) => {
  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);

  const handleMessageSubmit = () => {
    // Implement your messaging functionality here
    toast.info("Messaging feature coming soon!");
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const addToCartHandler = (id) => {
    const isItemExists = cart && cart.find((i) => i._id === id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (data.stock < count) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: count };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart successfully!");
      }
    }
  };

  useEffect(() => {
    if (wishlist && wishlist.find((i) => i._id === data._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [wishlist]);

  const removeFromWishlistHandler = (data) => {
    setClick(!click);
    dispatch(removeFromWishlist(data));
    toast.success("Removed from wishlist!");
  };

  const addToWishlistHandler = (data) => {
    setClick(!click);
    dispatch(addToWishlist(data));
    toast.success("Added to wishlist!");
  };

  return (
    <div className="bg-[#fff]">
      {data && (
        <div className="fixed w-full h-screen top-0 left-0 bg-[#00000030] z-40 flex items-center justify-center">
          <div className="w-[90%] 800px:w-[60%] h-[90vh] overflow-y-auto 800px:h-[75vh] bg-white rounded-md shadow-sm relative p-4">
            <button 
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 z-50 p-1 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close product details"
            >
              <RxCross1 size={30} />
            </button>

            <div className="block w-full 800px:flex gap-6">
              {/* Left Column - Product Image and Shop Info */}
              <div className="w-full 800px:w-[50%]">
                <div className="relative w-full h-[300px] 800px:h-[400px]">
                  <Image
                    src={data.images?.[0]?.url || "/default-product.png"}
                    alt={data.name}
                    fill
                    className="object-contain rounded-md"
                    sizes="(max-width: 800px) 100vw, 50vw"
                  />
                </div>

                <div className="flex items-center mt-4">
                  <Link 
                    href={`/shop/preview/${data.shop._id}`} 
                    className="flex items-center"
                  >
                    <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden mr-3">
                      <Image
                        src={data.shop?.avatar || "/default-shop.png"}
                        alt={data.shop.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-[16px] font-[600] text-blue-500 hover:text-blue-600">
                        {data.shop.name}
                      </h3>
                      <h5 className="text-[15px] text-gray-500">
                        {data?.ratings} Ratings
                      </h5>
                    </div>
                  </Link>
                </div>

                <button
                  className="w-full bg-black text-white py-2.5 rounded mt-4 flex items-center justify-center hover:bg-gray-800 transition-colors"
                  onClick={handleMessageSubmit}
                >
                  Send Message <AiOutlineMessage className="ml-1" />
                </button>

                <h5 className="text-[16px] text-red-500 mt-5">
                  ({data?.sold_out || 50}) Sold out
                </h5>
              </div>

              {/* Right Column - Product Details */}
              <div className="w-full 800px:w-[50%] pt-5">
                <h1 className="text-[20px] font-[600] text-gray-800">
                  {data.name}
                </h1>
                <p className="text-gray-600 mt-2">{data.description}</p>

                <div className="flex items-center pt-3">
                  <h4 className="text-[18px] text-[#d02222] font-[600]">
                    ${data.discountPrice}
                  </h4>
                  {data.originalPrice && (
                    <h3 className="text-[16px] text-gray-500 line-through ml-2">
                      ${data.originalPrice}
                    </h3>
                  )}
                </div>

                <div className="flex items-center mt-6 justify-between">
                  <div className="flex items-center border border-gray-300 rounded">
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold px-4 py-2 hover:opacity-75 transition duration-300"
                      onClick={decrementCount}
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="bg-gray-100 text-gray-800 font-medium px-4 py-2">
                      {count}
                    </span>
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold px-4 py-2 hover:opacity-75 transition duration-300"
                      onClick={incrementCount}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <div>
                    {click ? (
                      <button 
                        onClick={() => removeFromWishlistHandler(data)}
                        aria-label="Remove from wishlist"
                      >
                        <AiFillHeart
                          size={30}
                          className="text-red-500 hover:text-red-600 transition-colors"
                        />
                      </button>
                    ) : (
                      <button 
                        onClick={() => addToWishlistHandler(data)}
                        aria-label="Add to wishlist"
                      >
                        <AiOutlineHeart
                          size={30}
                          className="text-gray-600 hover:text-red-500 transition-colors"
                        />
                      </button>
                    )}
                  </div>
                </div>

                <button
                  className="w-full bg-gradient-to-r from-teal-400 to-teal-500 text-white py-2.5 rounded mt-6 flex items-center justify-center hover:opacity-90 transition-opacity"
                  onClick={() => addToCartHandler(data._id)}
                >
                  Add to cart <AiOutlineShoppingCart className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsCard;