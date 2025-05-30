import { createReducer } from "@reduxjs/toolkit";

let cartItems = [];

if (typeof window !== "undefined") {
  const stored = localStorage.getItem("cartItems");
  if (stored) {
    try {
      cartItems = JSON.parse(stored);
    } catch (error) {
      cartItems = [];
    }
  }
}

const initialState = {
  cart: cartItems,
};

export const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("addToCart", (state, action) => {
      const item = action.payload;
      const isItemExist = state.cart.find((i) => i._id === item._id);

      if (isItemExist) {
        state.cart = state.cart.map((i) =>
          i._id === isItemExist._id ? item : i
        );
      } else {
        state.cart.push(item);
      }

      if (typeof window !== "undefined") {
        localStorage.setItem("cartItems", JSON.stringify(state.cart));
      }
    })
    .addCase("removeFromCart", (state, action) => {
      state.cart = state.cart.filter((i) => i._id !== action.payload);

      if (typeof window !== "undefined") {
        localStorage.setItem("cartItems", JSON.stringify(state.cart));
      }
    });
});
