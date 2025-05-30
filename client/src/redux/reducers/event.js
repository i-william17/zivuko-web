import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const eventReducer = createReducer(initialState, (builder) => {
  builder
    // Event create actions
    .addCase('eventCreateRequest', (state) => {
      state.isLoading = true;
    })
    .addCase('eventCreateSuccess', (state, action) => {
      state.isLoading = false;
      state.event = action.payload;
      state.success = true;
    })
    .addCase('eventCreateFail', (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    })

    // Get all events of shop
    .addCase('getAlleventsShopRequest', (state) => {
      state.isLoading = true;
    })
    .addCase('getAlleventsShopSuccess', (state, action) => {
      state.isLoading = false;
      state.events = action.payload;
    })
    .addCase('getAlleventsShopFailed', (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })

    // Delete event of a shop
    .addCase('deleteeventRequest', (state) => {
      state.isLoading = true;
    })
    .addCase('deleteeventSuccess', (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    })
    .addCase('deleteeventFailed', (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })

    // Get all events
    .addCase('getAlleventsRequest', (state) => {
      state.isLoading = true;
    })
    .addCase('getAlleventsSuccess', (state, action) => {
      state.isLoading = false;
      state.allEvents = action.payload;
    })
    .addCase('getAlleventsFailed', (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })

    // Clear errors
    .addCase('clearErrors', (state) => {
      state.error = null;
    });
});
