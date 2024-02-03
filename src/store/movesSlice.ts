import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Move, MovesState } from '../types/moves.types';


const initialState: MovesState = {
  moves: [],
};

export const movesSlice = createSlice({
  name: 'moves',
  initialState,
  reducers: {
    addMove: (state, action: PayloadAction<Move>) => {
      state.moves = [
        ...state.moves,
        action.payload,
      ];
    },
  }
});

export const {
  addMove,
} = movesSlice.actions;

export default movesSlice.reducer;