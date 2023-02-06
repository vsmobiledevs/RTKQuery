import {createSlice} from '@reduxjs/toolkit';



const initialState = {
  user: null,
  posts: null,
};

export const authSlice = createSlice({
  name: 'authSlice',

  initialState: {
    user: null,
    posts: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: () => initialState,

    getAllPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const {logout, login, getAllPosts} = authSlice.actions;

export default authSlice.reducer;
