import { BaseQueryMeta, BaseQueryResult } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { GameState } from '../types/game.types';
import { Player, PostPlayerScore } from '../types/player.types';
import { api } from './api';


export const playerApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPlayer: builder.mutation<Player, string>({
      query: (gameId: string) => `players/${gameId}`,
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