import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('LoadUserRequest', (state) => {
      state.loading = true;
    })
    .addCase('LoadUserSuccess', (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload;
    })
    .addCase('LoadUserFail', (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    })

    // Update user information
    .addCase('updateUserInfoRequest', (state) => {
      state.loading = true;
    })
    .addCase('updateUserInfoSuccess', (state, action) => {
      state.loading = false;
      state.user = action.payload;
    })
    .addCase('updateUserInfoFailed', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    // Update user address
    .addCase('updateUserAddressRequest', (state) => {
      state.addressloading = true;
    })
    .addCase('updateUserAddressSuccess', (state, action) => {
      state.addressloading = false;
      state.successMessage = action.payload.successMessage;
      state.user = action.payload.user;
    })
    .addCase('updateUserAddressFailed', (state, action) => {
      state.addressloading = false;
      state.error = action.payload;
    })

    // Delete user address
    .addCase('deleteUserAddressRequest', (state) => {
      state.addressloading = true;
    })
    .addCase('deleteUserAddressSuccess', (state, action) => {
      state.addressloading = false;
      state.successMessage = action.payload.successMessage;
      state.user = action.payload.user;
    })
    .addCase('deleteUserAddressFailed', (state, action) => {
      state.addressloading = false;
      state.error = action.payload;
    })

    // Get all users --- admin
    .addCase('getAllUsersRequest', (state) => {
      state.usersLoading = true;
    })
    .addCase('getAllUsersSuccess', (state, action) => {
      state.usersLoading = false;
      state.users = action.payload;
    })
    .addCase('getAllUsersFailed', (state, action) => {
      state.usersLoading = false;
      state.error = action.payload;
    })

    // Clear errors and messages
    .addCase('clearErrors', (state) => {
      state.error = null;
    })
    .addCase('clearMessages', (state) => {
      state.successMessage = null;
    });
});
