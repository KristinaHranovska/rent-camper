import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'helpers/axiosConfig';

export const getCar = createAsyncThunk("camper/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(`/rent?page=1&limit=4`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const getCamperMore = createAsyncThunk(
    "camper/getMore",
    async (page, thunkAPI) => {
        try {
            const response = await axios.get("/rent?limit=4&page=" + page);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);