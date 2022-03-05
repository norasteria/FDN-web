import { createAsyncThunk } from "@reduxjs/toolkit";

import { DashboardDataResponseDTO } from "_services/app/dto";
import { getDashboardDataAction } from "_services/app/action";

export const getDashboardDataAsyncType = createAsyncThunk<string>(
  "@@dashboard/GET_DASHBOARD_DATA",
  getDashboardDataAction
);
