import { createSlice } from '@reduxjs/toolkit';
import { data } from '../../db/data';

export const articleSclice = createSlice({
    name: 'articlies',
    initialState: data.intialState,
    reducers: {},
});
