import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66958fc24bd61d8314cba0e0.mockapi.io/';

export const getCar = createAsyncThunk("camper/fetchAll",
    async (_, thunkAPI) => {
        try {
            const respons = await axios.get('asvert');
            return respons.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);