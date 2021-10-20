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
    payOrder: builder.mutation({
      query: (orderId, paymentResult) => ({
        url: `/${orderId}/pay`,
        method: 'PUT',
        body: paymentResult,
      }),
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrderByIdQuery,
  useLazyGetOrderByIdQuery,
  usePayOrderMutation,
} = orderApi;
