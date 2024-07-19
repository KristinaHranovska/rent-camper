import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { carsReducer } from './favorite/slice';
import { bookingReducer } from './booking/bookingSlice';

const favoritePersistConfig = {
    key: 'camper',
    storage,
    whitelist: ['favoriteCar'],
};

export const store = configureStore({
    reducer: {
        favorite: persistReducer(favoritePersistConfig, carsReducer),
        booking: bookingReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);