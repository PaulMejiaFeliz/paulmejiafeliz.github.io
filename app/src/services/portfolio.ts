import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { REHYDRATE } from 'redux-persist';
import { API_BASE_URL } from '../constants';
import { PortfolioUser } from '../types';

export const portfolioApi = createApi({
  reducerPath: 'portfolioApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getPortfolioUser: builder.query<PortfolioUser, string>({
      query: (lang: string) =>
        lang ? `portfolio-user?lang=${lang}` : 'portfolio-user',
    }),
  }),
  // extractRehydrationInfo(action, { reducerPath }) {
  //   if (action.type === REHYDRATE) {
  //     console.log(action);
  //     console.log(reducerPath);
  //     // when persisting the api reducer
  //     if (action.key === reducerPath) {
  //       return action.payload;
  //     }

  //     console.log(action.payload[reducerPath]);

  //     // When persisting the root reducer
  //     // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  //     return action.payload[reducerPath];
  //   }
  // },
});

export const { useGetPortfolioUserQuery } = portfolioApi;
