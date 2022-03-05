import { getDashboardDataApi } from "_services/app/api";

export const getDashboardDataAction = async (): Promise<string> => {
  getDashboardDataApi();
  const dummyApi: Promise<string> = new Promise((resolve) => resolve("TEST"));
  const response = await dummyApi;
  return response;
};
