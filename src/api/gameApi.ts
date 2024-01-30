import { GameState } from '../types/game.types';
import { Player, PostNewPlayerBody } from '../types/player.types';
import { api } from './api';


const GAME_KEY = 'gameId';

export const getCurrentGameId = (): string => localStorage.getItem(GAME_KEY) || '';
export const resetCurrentGameId = (): void => localStorage.removeItem(GAME_KEY);
export const setCurrentGameId = (gameId: string): void => localStorage.setItem(GAME_KEY, gameId);

export const gameApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getGameData: builder.mutation<GameState, string>({
      query: (gameId) => `games/${gameId}`,
    }),
    postNewGame: builder.mutation<GameState, void>({
      query: () => {
        return {
          url: 'games',
          method: 'POST',
        };
      },
    }),
    addPlayer: builder.mutation<Player, { gameId: string, body: PostNewPlayerBody }>({
      query: ({gameId, body}) => {
        return {
          url: `games/${gameId}/player`,
          method: 'POST',
          body,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetGameDataMutation,
  usePostNewGameMutation,
  useAddPlayerMutation,
} = gameApi;
