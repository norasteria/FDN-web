import axios from "axios";
import type { AxiosResponse } from "axios";

import { BASE_URL } from "_constants/api";
import { DashboardDataResponseDTO } from "_services/app/dto";

export const getDashboardDataApi = async (): Promise<
  AxiosResponse<DashboardDataResponseDTO>
> => await axios.get(BASE_URL);
