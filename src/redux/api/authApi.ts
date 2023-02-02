import {createApi} from '@reduxjs/toolkit/query/react';
import {getAllPosts, login} from '../features/authSlice';
import {useAppDispatch} from '../store';
import customFetchBase from './customFetchBase';
import {IPostResponse} from './type';

export const authApi = createApi({
  reducerPath: 'postApi',
  baseQuery: customFetchBase,
  tagTypes: ['Posts'],

  endpoints: builder => ({
    createPost: builder.mutation<IPostResponse, FormData>({
      query(post) {
        return {
          url: '/posts',
          method: 'POST',
          credentials: 'include',
          body: post,
        };
      },
      invalidatesTags: ['Posts'],
      transformResponse: (result: {data: {post: IPostResponse}}) =>
        result.data.post,
    }),
    updatePost: builder.mutation<IPostResponse, {id: string; post: FormData}>({
      query({id, post}) {
        return {
          url: `/posts/${id}`,
          method: 'PATCH',
          credentials: 'include',
          body: post,
        };
      },
      invalidatesTags: ['Posts'],

      transformResponse: (response: {data: {post: IPostResponse}}) =>
        response.data.post,
    }),
    getPost: builder.query<IPostResponse, string>({
      query(id) {
        return {
          url: `/posts/${id}`,
          credentials: 'include',
        };
      },
      providesTags: (result, error, id) => [{type: 'Posts', id}],
    }),
    getAllPosts: builder.query<IPostResponse[], object>({
      query(params) {
        return {
          url: `/posts?page=${params?.page}`,
          method: 'get',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer ' + params?.token,
          },
          credentials: 'include',
        };
      },

      providesTags: (result, error, id) => ['Posts'],

      transformResponse: results => {
        return results?.user_posts;
      },
      // transformErrorResponse: error => {
      //   return error;
      // },
      async onQueryStarted(
        arg,
        {
          dispatch,
          getState,
          extra,
          requestId,
          queryFulfilled,
          getCacheEntry,
          updateCachedData,
        },
      ) {
        let data = await queryFulfilled;
        //dispatch(getAllPosts(data));
        console.log('Dispatch:=>   ', getCacheEntry());
      },
    }),
    deletePost: builder.mutation<IPostResponse, string>({
      query(id) {
        return {
          url: `/posts/${id}`,
          method: 'Delete',
          credentials: 'include',
        };
      },
      invalidatesTags: ['Posts'],
    }),
  }),
});

export const {
  useCreatePostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
  useGetAllPostsQuery,
} = authApi;
