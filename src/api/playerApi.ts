import { Player, PostPlayerScore } from '../types/player.types';
import { api } from './api';


export const playerApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPlayer: builder.mutation<Player, string>({
      query: (gameId: string) => `players/${gameId}`,
      // todo transform resp to return players object with avatars
    }),
    changePlayersScore: builder.mutation<Player, PostPlayerScore>({
      query: ({playerId, score}) => {
        return {
          url: `players/${playerId}/score`,
          method: 'POST',
          body: {
            score
          }
        };
      },
      // fix for existing api bug which returns nullish id
      transformResponse: (resp: Player, meta, arg): Player => {
        return {
          ...resp,
          id: arg.playerId,
        }
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetPlayerMutation,
  useChangePlayersScoreMutation,
} = playerApi;