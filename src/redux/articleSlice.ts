import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface ArticleState {
    status: 'idle' | 'loading' | 'failed';
    articles: Article[];
}

export type Article = {
    by: string;
    descendants: number;
    id: number;
    kids: number[];
    score: number;
    time: number;
    title: string;
    type: string;
    url: string;
    domain: string;
};

const initialState: ArticleState = {
    status: 'idle',
    articles: [],
};

export const fetchArticles = createAsyncThunk('counter/fetchCount', async (amount: number) => {
    const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
    const json = await response.json();
    const promises = json
        .slice(0, amount)
        .map((id: string) =>
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((response) => response.json()),
        );
    const result = await Promise.all(promises);
    return result.map((article) => {
        const regex = /^(https?:\/\/)?([a-zA-Z0-9.-]+)/;

        const match = regex.exec(article.url) || [];
        if (match) {
            let domain = match[2];
            const domainParts = domain.split('.');
            if (domainParts.length > 2) {
                domain = domainParts.slice(1).join('.');
            }
            article.domain = domain;
        }
        return article;
    });
});

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        articleItem: (state, action) => {
            state.articles.push(action.payload);
        },
        unarticleItem: (state, action) => {
            state.articles = state.articles.filter((item) => item !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.status = 'idle';
                state.articles = action.payload;
            })
            .addCase(fetchArticles.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const { articleItem, unarticleItem } = articleSlice.actions;

export const selectArticles = (state: RootState) => state.articles.articles;

export default articleSlice.reducer;
