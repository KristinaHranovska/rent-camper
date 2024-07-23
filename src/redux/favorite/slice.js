import { createSlice } from "@reduxjs/toolkit";
import { initialStateVan } from "./constants";
import { getCamperMore, getCar } from "./operation";

const carsSlice = createSlice({
    name: 'camper',
    initialState: initialStateVan,

    reducers: {
        addFavorite: {
            reducer(state, action) {
                state.favoriteCar.push(action.payload)
            },
            prepare(values) {
                return {
                    payload: {
                        ...values,
                    }
                }
            }
        },
        deleteFavorite: (state, action) => {
            state.favoriteCar = state.favoriteCar.filter(car =>
                car._id !== action.payload
            );
        },
        setFilters: (state, action) => {
            state.filters = action.payload;
        },
        resetFilters: (state) => {
            state.filters = initialStateVan.filters;
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(getCar.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCar.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.cars = [...action.payload];
            })
            .addCase(getCar.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(getCamperMore.pending, (state) => {
                state.isLoading = true;
                state.error = false;
            })
            .addCase(getCamperMore.fulfilled, (state, action) => {
                state.isLoading = false;
                state.cars = [...state.cars, ...action.payload];
            })
            .addCase(getCamperMore.rejected, (state) => {
                state.isLoading = false;
                state.error = true;
            })
    }
})

export const carsReducer = carsSlice.reducer;
export const { addFavorite, deleteFavorite, setFilters, resetFilters } = carsSlice.actions;