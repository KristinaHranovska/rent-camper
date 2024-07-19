import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCar = createAsyncThunk("camper/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('https://66958fc24bd61d8314cba0e0.mockapi.io/advert');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);