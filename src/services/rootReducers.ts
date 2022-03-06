import { combineReducers } from "redux";

import type { DashboardDataState } from "_services/app/reducers";
import dashboard from "_services/app/reducers";

export interface RootState {
  dashboard: DashboardDataState;
}

const rootReducer = combineReducers({
  dashboard,
});

export default rootReducer;
