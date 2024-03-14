import { serverApi } from './server.api';

export const usersApi = serverApi.injectEndpoints({
  endpoints: (builder) => ({
    findOrCreate: builder.mutation({ query: () => 'find-or-create' }),
  }),
});
