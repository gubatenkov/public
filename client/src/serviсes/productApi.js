import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const __baseUrl = 'http://localhost:5000';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${__baseUrl}/api/products` }),
  endpoints: (builder) => ({
    getProductById: builder.query({
      query: (id) => `/${id}`,
    }),
    getAllProducts: builder.query({
      query: () => `/`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductByIdQuery } = productApi;
