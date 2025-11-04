import { useMutation } from "react-query";
import axios from "axios";
import { apiRequest, ErrorResponse } from "./utils";

interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

export const loginUser = async ({ username, password }: LoginRequest) => {
  return apiRequest<LoginResponse>("/users/login", {
    method: "POST",
    data: {
      username,
      password,
    },
  });
};

export const useLoginUser = (
  onSuccess: (resp: LoginResponse | ErrorResponse | null) => void
) => {
  const { mutate, isLoading, isError, data } = useMutation(loginUser, {
    onSuccess,
  });
  return { data, login: mutate, isLoading, isError };
};
