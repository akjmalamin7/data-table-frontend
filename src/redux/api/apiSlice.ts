import { createApi, fetchBaseQuery, RootState } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath:'api',
    baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const token = state?.auth?.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
    tagTypes:[],
    endpoints:(builder)=>({})
})