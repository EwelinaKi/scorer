import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Player, PlayerState } from '../types/player.types';


const initialState: PlayerState = {
  players: {},
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    updatePlayers: (state, action: PayloadAction<Player[]>) => {
      const playersToUpdate = action.payload.reduce( (acc, curr) => {
        return {
          ...acc,
          [curr.id]: curr
        }
      }, {});
      
      state.players = {
        ...state.players,
        ...playersToUpdate,
      }
    },
  }
});

export const {
  updatePlayers,
} = playerSlice.actions;

export default playerSlice.reducer;