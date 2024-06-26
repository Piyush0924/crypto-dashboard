import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const coinApi = createApi({
  reducerPath: "coinApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.coingecko.com/api/v3" }),
  endpoints: (builder) => ({
    getTrendingCoins: builder.query({
      query: () => "/search/trending",
    }),
    getMarkets: builder.query({
      query: (currency, page = 1) =>
        `coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=13&page=${page}&sparkline=false`,
    }),

    getAllCoins: builder.query({
      query: () => "/coins/list",
    }),
  }),
});

<<<<<<< HEAD

export const {
  useGetTrendingcoinsQuery,
  useGetMarketsQuery,
  useGetAllCoinsQuery
} = coinApi;

=======
export const { useGetTrendingCoinsQuery, useGetMarketsQuery, useGetAllCoinsQuery } = coinApi;
>>>>>>> 0d87544e65b816a5b08f8fe7f63ce44e7703e879
