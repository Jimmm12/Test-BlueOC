import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
});

const postSlice = createSlice({
    name: 'posts',
    initialState: { list: [], loading: false },
    reducers: {
        addPost: (state, action) => {
            state.list.unshift(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.list = action.payload;
                state.loading = false;
            });
    },
});

export const { addPost } = postSlice.actions;
export default postSlice.reducer;
