import axios, { AxiosRequestConfig } from "axios";

export interface ErrorResponse {
  error: string;
}

export const apiRequest = async <T>(
  url: string,
  options: AxiosRequestConfig = {}
): Promise<T | null | ErrorResponse> => {
  try {
    const isDev = process.env.NODE_ENV === "development";

    const prefix = isDev
      ? "http://localhost:7231"
      : "https://footyapi.tombrace.co.uk";

    const response = await axios<T>(`${prefix}/api${url}`, {
      validateStatus: (status: number) => status < 500,
      ...options,
    });

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
