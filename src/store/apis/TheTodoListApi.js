import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3000",
});

export const theTodoListApi = createApi({
  reducerPath: "theTodoListApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getTheTodoListApi: builder.query({
      query: () => ({
        url: `/todoListData`,
        method: "GET",
      }),
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/todoListData/${id}`,
        method: "DELETE",
      }),
    }),
    patchTodo: builder.mutation({
      query: ({ id, todo }) => ({
        url: `/todoListData/${id}`,
        method: "PATCH",
        body: todo,
      }),
    }),
    postTodo: builder.mutation({
      query: (todo) => ({
        url: "/todoListData",
        method: "POST",
        body: todo,
      }),
    }),
  }),
});

export const {
  useGetTheTodoListApiQuery,
  useDeleteTodoMutation,
  usePostTodoMutation,
  usePatchTodoMutation,
} = theTodoListApi;
