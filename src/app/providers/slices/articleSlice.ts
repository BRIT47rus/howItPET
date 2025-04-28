import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { data as importedData } from '../../db/data';
import { ArticleT } from '../../db/howDates/types';

// Определения интерфейсов

interface Data {
    intialState: ArticleT;
    [key: string]: ArticleT;
}

// Явно типизируем импортированные данные
const data: Data = importedData;

// Определяем тип для initialState
const initialState: ArticleT = data.intialState;

export const articleSclice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        getArticleTitle: (state, action: PayloadAction<string>) => {
            const selectedCategory = data[action.payload];
            if (selectedCategory) {
                state.titleData = selectedCategory.titleData;
                state.info = selectedCategory.info;
            } else {
                // state.titleData = null;
                state.info = [];
            }
        },
    },
});

// Экспортируем action creator
export const { getArticleTitle } = articleSclice.actions;

// Экспортируем reducer
export default articleSclice.reducer;
