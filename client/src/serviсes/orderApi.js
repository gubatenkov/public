import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const __baseUrl = 'http://localhost:5000';

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${__baseUrl}/api/orders`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState()?.auth?.user?.token;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = orderApi;
