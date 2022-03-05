import axios from "axios";

export const getDashboardDataApi = async (): Promise<string> => {
  //   console.log(process.env.API_URL);
  const response = new Promise<string>((resolve) =>
    resolve(process.env.API_URL as string)
  );
  return response;
};
