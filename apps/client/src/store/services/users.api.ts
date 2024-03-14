import { users, Prisma } from '@prisma/client';
import { serverApi } from './server.api';

export const usersApi = serverApi.injectEndpoints({
  endpoints: (builder) => ({
    findOrCreate: builder.mutation<users, Prisma.usersCreateInput>({
      query: (body) => ({ url: 'users/find-or-create', body, method: 'POST' }),
    }),
  }),
});

export const { useFindOrCreateMutation } = usersApi;
