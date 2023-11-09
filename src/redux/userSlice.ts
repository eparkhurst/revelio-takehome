import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface UserState {
    darkMode: boolean;
}

const initialState: UserState = {
    darkMode: false,
};

export const userSlice = createSlice({
    name: 'article',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        upadateDarkMode: (state, action) => {
            state.darkMode = action.payload;
        },
    },
});

export const { upadateDarkMode } = userSlice.actions;

export const selectDarkMode = (state: RootState) => state.user.darkMode;

export default userSlice.reducer;
