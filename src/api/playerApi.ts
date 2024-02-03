import { Player, PostPlayerScore } from '../types/player.types';
import { api } from './api';
import { createAvatar } from '@dicebear/core';
import { bottts } from '@dicebear/collection';
import { GameColors } from '../types/color.types';

const countTotalScore = (scores: number[]) => scores.reduce((acc, curr) => acc + curr, 0);

export const playerApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPlayer: builder.mutation<Player, string>({
      query: (gameId: string) => `players/${gameId}`,
      transformResponse: (resp: Player): Player => {
        const avatar = createAvatar(bottts, {
          seed: resp.name,
          randomizeIds: true,
          baseColor: [GameColors[resp.color].avatar],
        }).toDataUriSync();
        return {
          ...resp,
          avatar,
          totalScore: countTotalScore(resp.scores),
        };
      }
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
          totalScore: countTotalScore(resp.scores),
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