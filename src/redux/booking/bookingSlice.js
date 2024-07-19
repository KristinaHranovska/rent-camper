import { createSlice } from "@reduxjs/toolkit";
import { initialStateBooking } from "../favorite/constants";
import { postBooking } from "./operation";

const bookingSlice = createSlice({
    name: "booking",
    initialState: initialStateBooking,
    extraReducers: (builder) => {
        builder
            .addCase(postBooking.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(postBooking.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.bookings.push(action.payload);

            })
            .addCase(postBooking.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});


export const bookingReducer = bookingSlice.reducer;