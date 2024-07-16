import { createSlice } from "@reduxjs/toolkit";
import { initialStateVan } from "./constants";
import { getCar } from "./operation";

const carsSlice = createSlice({
    name: 'camper',
    initialState: initialStateVan,
    extraReducers: (builder) => {
        builder
            .addCase(getCar.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCar.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.cars = action.payload;
            })
            .addCase(getCar.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})

export const carsReducer = carsSlice.reducer;