import { DashboardDataResponseDTO } from "_services/app/dto";
import { getDashboardDataApi } from "_services/app/api";

export const getDashboardDataAction =
  async (): Promise<DashboardDataResponseDTO> => {
    const response = await getDashboardDataApi();

    return response.data;
  };
