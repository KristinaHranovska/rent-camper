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

import { authReducer } from './auth/slice';
import { setupAxiosInterceptors } from './auth/operation';

const favoritePersistConfig = {
    key: 'favorite',
    storage,
    whitelist: ['favorite'],
};

export const store = configureStore({
    reducer: {
        favorite: persistReducer(favoritePersistConfig, authReducer),
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

setupAxiosInterceptors(store);

export const persistor = persistStore(store);