import { createReducer, Action } from "@reduxjs/toolkit";

import { EditorChoise, LatestArticles, LatestReview } from "_services/app/dto";
import { getDashboardDataAsyncType } from "_services/app/type";

export interface DashboardDataState {
  editorChoise: EditorChoise[];
  latestArticles: LatestArticles[];
  latestReview: LatestReview[];
}

const initialState: DashboardDataState = {
  editorChoise: [],
  latestArticles: [],
  latestReview: [],
};

const dashboardReducer = createReducer(initialState, (builder) => {
  builder.addCase(getDashboardDataAsyncType.fulfilled, (state, action) => ({
    ...state,
    editorChoise: action.payload["editor's choice"],
    latestArticles: action.payload["latest articles"],
    latestReview: action.payload["latest review"],
  }));
});

export default dashboardReducer;
