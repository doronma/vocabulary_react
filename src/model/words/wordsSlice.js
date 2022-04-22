import { createSlice } from '@reduxjs/toolkit';

const words = [
    { eng: 'red',heb:'אדום' },
    { eng: 'blue',heb: 'כחול' },
    { eng: 'pink',heb: 'ורוד' }

]

const initialState = {
    words: words,

};

const wordsSlice = createSlice({
    name: 'words',
    initialState,
});

console.log(wordsSlice);

export default wordsSlice.reducer;