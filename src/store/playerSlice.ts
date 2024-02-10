import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Player, PlayerState, UpdatePlayerScore } from '../types/player.types';
import { revertAll } from './store';


const initialState: PlayerState = {
  players: {},
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  extraReducers: (builder) => builder.addCase(revertAll, () => initialState),
  reducers: {
    updatePlayers: (state, action: PayloadAction<Player[]>) => {
      const playersToUpdate = action.payload.reduce((acc, curr) => {
        return {
          ...acc,
          [curr.id]: curr
        };
      }, {});
      
      state.players = {
        ...state.players,
        ...playersToUpdate,
      };
    },
    updatePlayerScore: (state, action: PayloadAction<UpdatePlayerScore>) => {
      const id = action.payload.id;
      const playerToUpdate = {
        [id]: {
          ...state.players[id],
          scores: action.payload.scores,
          totalScore: action.payload.totalScore,
        }
      };
      
      state.players = {
        ...state.players,
        ...playerToUpdate,
      };
    },
  }
});

export const {
  updatePlayers,
  updatePlayerScore,
} = playerSlice.actions;

export default playerSlice.reducer;