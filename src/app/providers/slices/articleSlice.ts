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
        getArticle: (state, action: PayloadAction<string>): ArticleT => {
            return data[action.payload];
        },
        settedArtcile: (action: PayloadAction<string>) => {
            data.
        },
    },
});

// Экспортируем action creator
export const { getArticle } = articleSclice.actions;

// Экспортируем reducer
export default articleSclice.reducer;
