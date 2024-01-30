import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Player, PlayerState } from '../types/player.types';


const initialState: PlayerState = {
  players: {},
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    addPlayer: (state, action: PayloadAction<Player>) => {
      state.players = {
        ...state.players,
        [action.payload.id]: {
          id: action.payload.id,
          name: action.payload.name,
          color: action.payload.color,
          scores: action.payload.scores,
        }
      }
    },
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
    changeScore: (state, action: PayloadAction<void>) => {
      // todo
    },
  }
});

export const {
  addPlayer,
  updatePlayers,
  changeScore,
} = playerSlice.actions;

export default playerSlice.reducer;