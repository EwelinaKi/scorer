import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { resetCurrentGameId, setCurrentGameId } from '../api/gameApi';
import { GameState } from '../types/game.types';


const initialState: GameState = {
  gameId: '',
  playerIds: [],
  startedAt: 0,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    createNew: (state, action: PayloadAction<GameState>) => {
      state.gameId = action.payload.gameId;
      state.playerIds = action.payload.playerIds;
      state.startedAt = action.payload.startedAt;
      setCurrentGameId(action.payload.gameId);
    },
  }
});

export const {
  createNew,
} = gameSlice.actions;

export default gameSlice.reducer;