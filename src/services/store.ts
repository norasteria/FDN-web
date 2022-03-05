import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import rootReducer from "_services/rootReducers";

export function makeStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
