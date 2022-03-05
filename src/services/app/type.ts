import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

import { DashboardDataResponseDTO } from "_services/app/dto";
import { getDashboardDataAction } from "_services/app/action";

export const getDashboardDataAsyncType =
  createAsyncThunk<DashboardDataResponseDTO>(
    "@@dashboard/GET_DASHBOARD_DATA",
    getDashboardDataAction
  );
