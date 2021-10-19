import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import __baseUrl from './config';

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
    getOrderById: builder.query({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useCreateOrderMutation, useGetOrderByIdQuery } = orderApi;
