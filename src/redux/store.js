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
import { themeReducer } from './theme/themeSlice';

const favoritePersistConfig = {
    key: 'camper',
    storage,
    whitelist: ['favoriteCar'],
};

const themePersistConfig = {
    key: 'theme',
    storage,
    whitelist: ['theme'],
};

export const store = configureStore({
    reducer: {
        theme: persistReducer(themePersistConfig, themeReducer),
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