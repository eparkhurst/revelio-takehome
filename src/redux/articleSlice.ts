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

export const fetchArticles = createAsyncThunk(
    'counter/fetchCount',
    async ({ amount = 12, start = 0 }: { amount: number; start?: number }, { getState }) => {
        let previousArticles: any[] = [];
        const currentArticleIds = previousArticles.map((article) => article.id);
        if (start) {
            const state = getState() as RootState;
            previousArticles = state.articles.articles;
        }
        const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
        const articleIds = await response.json();
        const promises = articleIds
            .slice(start, start + amount)
            .map((id: string) =>
                fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((response) => response.json()),
            );
        const result = await Promise.all(promises);

        // this is to add the domain ie https://su.domain.com/cool => domain.com
        // it also filteres out articles that we already have to prevent duplicates
        let formattedResults = [];
        for (let i = 0; i < result.length; i++) {
            const article = result[i];
            if (currentArticleIds.includes(article.id)) continue;
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
            formattedResults.push(article);
        }

        return [...previousArticles, ...formattedResults];
    },
);

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
export const selectFavoriteArticles = (ids: number[]) => (state: RootState) => {
    return state.articles.articles.filter((article) => {
        return ids.includes(article.id);
    });
};

export default articleSlice.reducer;
