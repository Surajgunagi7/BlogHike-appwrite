import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isDarkMode: localStorage.getItem('theme') === 'dark' || false,
}

const darkSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.isDarkMode = !state.isDarkMode;
            localStorage.setItem('theme', state.isDarkMode ? 'dark' : 'light');
        },
    }
})

export const {toggleDarkMode} = darkSlice.actions;
export default darkSlice.reducer;