import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface UserState {
    darkMode: boolean;
    favorites: number[];
}

const initialState: UserState = {
    darkMode: false,
    favorites: [],
};

export const userSlice = createSlice({
    name: 'article',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        upadateDarkMode: (state, action) => {
            state.darkMode = action.payload;
        },
        updateFavorites: (state, { payload }) => {
            const index = state.favorites.indexOf(payload);
            if (index >= 0) {
                state.favorites = state.favorites.filter((id) => id !== payload);
            } else {
                state.favorites.push(payload);
            }
        },
    },
});

export const { upadateDarkMode, updateFavorites } = userSlice.actions;

export const selectDarkMode = (state: RootState) => state.user.darkMode;
export const selectFavorites = (state: RootState) => state.user.favorites;

export default userSlice.reducer;
