import { createReducer } from "@reduxjs/toolkit";

let wishlistItems = [];

if (typeof window !== "undefined") {
  const stored = localStorage.getItem("wishlistItems");
  if (stored) {
    try {
      wishlistItems = JSON.parse(stored);
    } catch (error) {
      wishlistItems = [];
    }
  }
}

const initialState = {
  wishlist: wishlistItems,
};

export const wishlistReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("addToWishlist", (state, action) => {
      const item = action.payload;
      const isItemExist = state.wishlist.find((i) => i._id === item._id);

      if (isItemExist) {
        state.wishlist = state.wishlist.map((i) =>
          i._id === isItemExist._id ? item : i
        );
      } else {
        state.wishlist.push(item);
      }

      if (typeof window !== "undefined") {
        localStorage.setItem("wishlistItems", JSON.stringify(state.wishlist));
      }
    })
    .addCase("removeFromWishlist", (state, action) => {
      state.wishlist = state.wishlist.filter((i) => i._id !== action.payload);

      if (typeof window !== "undefined") {
        localStorage.setItem("wishlistItems", JSON.stringify(state.wishlist));
      }
    });
});
