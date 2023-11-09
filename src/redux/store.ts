import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import articleReducer from './articleSlice';
import userReducer from './userSlice';

export const store = configureStore({
    reducer: {
        articles: articleReducer,
        user: userReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
