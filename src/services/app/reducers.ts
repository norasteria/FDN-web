import { createReducer } from "@reduxjs/toolkit";

import { EditorChoise, LatestArticles, LatestReview } from "_services/app/dto";
import { getDashboardDataAsyncType } from "_services/app/type";

export interface DashboardDataState {
  editorChoise: EditorChoise[];
  latestArticles: LatestArticles[];
  latestReview: LatestReview[];
  test?: string;
}

const initialState: DashboardDataState = {
  editorChoise: [],
  latestArticles: [],
  latestReview: [],
};

const dashboardReducer = createReducer(initialState, (builder) => {
  builder.addCase(getDashboardDataAsyncType.fulfilled, (state, action) => ({
    ...state,
    test: action.payload,
  }));
});

export default dashboardReducer;
