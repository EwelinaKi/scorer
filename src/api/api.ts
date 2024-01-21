import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://scorer-x5lf.onrender.com/api/v1/' }),
  endpoints: () => ({}),
  tagTypes: ['Game', 'Players'],
})