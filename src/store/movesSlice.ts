import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Move, MovesState } from '../types/moves.types';
import { revertAll } from './store';


const initialState: MovesState = {
  moves: [],
};

export const movesSlice = createSlice({
  name: 'moves',
  initialState,
  extraReducers: (builder) => builder.addCase(revertAll, () => initialState),
  reducers: {
    addMove: (state, action: PayloadAction<Move>) => {
      state.moves = [
        action.payload,
        ...state.moves,
      ];
    },
  }
});

export const {
  addMove,
} = movesSlice.actions;

export default movesSlice.reducer;