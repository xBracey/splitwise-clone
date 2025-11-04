import { useQuery } from "react-query";
import { apiRequest } from "./utils";
import { useUserStore } from "../zustand/user";

export type User = {
  username: string;
};

export const getMe = async (token: string) => {
  return apiRequest<User>(`/users/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    validateStatus: (status) => status === 200,
  });
};

export const useGetMe = () => {
  const { token } = useUserStore();

  const { data } = useQuery(["getMe", token], () => getMe(token));

  return data;
};
