import {createSlice} from '@reduxjs/toolkit';

export interface IUser {
  _id: string;
  name: string;
  email: string;
  photo: string;
  role: string;
  provider?: string;
  active?: boolean;
  verified?: boolean;
  createdAt: Date;
  updatedAt: Date;
  token: string;
}

interface AuthState {
  user?: IUser | null;
  posts?: [] | null;
}

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
