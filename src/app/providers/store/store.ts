import { configureStore } from '@reduxjs/toolkit';
import { articleSclice } from '../slices/articleSlice';

export const store = configureStore({
    reducer: {
        article: articleSclice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
