import { combineReducers } from "redux";

import dashboard from "_services/app/reducers";

const rootReducer = combineReducers({
  dashboard,
});

export default rootReducer;
