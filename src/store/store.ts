import { configureStore } from '@reduxjs/toolkit';
import { api } from '../api/api';
import counterReducer from './counterSlice';
import gameReducer from './gameSlice';
// import playersReducer from './playersSlice';
// import movesReducer from './movesSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    game: gameReducer,
    // players: playersReducer,
    // moves: movesReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
    getDefaultMiddleware().concat(api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch