import { combineReducers, configureStore } from '@reduxjs/toolkit';
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

const rootReducer = combineReducers({
    items: carsReducer
})

const favoritePersistConfig = {
    key: 'camper',
    storage,
    whitelist: ['favorite'],
};

export const store = configureStore({
    reducer: persistReducer(favoritePersistConfig, rootReducer),

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);