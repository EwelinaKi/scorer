import { GameState } from '../types/game.types';
import { Player } from '../types/player.types';
import { api } from './api';


export const playerApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPlayer: builder.mutation<Player, string>({
      query: (gameId) => `players/${gameId}`,
    }),
    changePlayersScore: builder.mutation<GameState, void>({
      query: () => {
        return {
          url: 'games',
          method: 'POST',
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetPlayerMutation,
  useChangePlayersScoreMutation,
} = playerApi;