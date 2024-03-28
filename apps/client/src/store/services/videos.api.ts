import { serverApi } from './server.api';

export const videosApi = serverApi.injectEndpoints({
  endpoints: (build) => ({
    upload: build.mutation<void, FormData>({
      query: (body) => ({
        url: 'videos/upload',
        body,
        method: 'POST',
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useUploadMutation } = videosApi;
