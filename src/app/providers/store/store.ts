import { configureStore } from '@reduxjs/toolkit';
import { articleSclice } from '../slices/articleSlice';

export const store = configureStore({
    reducer: {
        article: articleSclice,
    },
});
