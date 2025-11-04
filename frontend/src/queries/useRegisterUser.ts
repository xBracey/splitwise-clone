import { useMutation } from "react-query";
import axios from "axios";
import { apiRequest, ErrorResponse } from "./utils";

interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export const registerUser = async ({ username, password }: LoginRequest) => {
  return apiRequest<LoginResponse>("/users/register", {
    method: "POST",
    data: {
      username,
      password,
    },
  });
};

export const useRegisterUser = (
  onSuccess: (resp: LoginResponse | ErrorResponse | null) => void
) => {
  const { mutate, isLoading, isError, data } = useMutation(registerUser, {
    onSuccess,
  });
  return { data, register: mutate, isLoading, isError };
};
