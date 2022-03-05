import { getDashboardDataApi } from "_services/app/api";

export const getDashboardDataAction = async (): Promise<string> => {
  const response = await getDashboardDataApi();

  return response;
};
