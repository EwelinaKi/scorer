import { api } from './api';


export const healthCheckApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getHealthCheck: builder.mutation<void, void>({
      query: () => `hc`,
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetHealthCheckMutation,
} = healthCheckApi;