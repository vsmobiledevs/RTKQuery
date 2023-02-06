import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const PostApi = createApi({
  reducerPath: 'postApi',
  baseQuery:fetchBaseQuery({
    baseUrl:'https://jsonplaceholder.typicode.com',
  prepareHeaders:(headers,{getState})=>{
    const stateInfo=getState()
    
    headers.set('authoriztion',"aksjlafhal")
    return headers
  }
  }),
  tagTypes: ['Posts','postList'],
  endpoints: builder => ({
   
    getAllPosts: builder.query({
      query:()=> {
        return {
          url: `posts`,
          method: 'get',
        };
      },
      providesTags:['postList'],
    }),

    createPost:builder.mutation({
     query:(data)=>({
          url: `posts`,
          method: 'post',
          body:data
     }),
     invalidatesTags:['postList']
    }),
    updatePost:builder.mutation({
     query:(data)=>({
          url: `posts`,
          method: 'UPDATE',
          body:data
     }),
     invalidatesTags:['postList']
    }),
    deletePost:builder.mutation({
     query:(data)=>({
          url: `posts`,
          method: 'DELETE',
          body:data
     }),
     invalidatesTags:['postList']
    }),
  }),
});

export const {
useCreatePostMutation,
useGetAllPostsQuery,
useDeletePostMutation,
useUpdatePostMutation,
} = PostApi;
