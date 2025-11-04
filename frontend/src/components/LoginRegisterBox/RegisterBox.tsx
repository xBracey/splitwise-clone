import { FormEvent, useState } from "react";
import { Input } from "../Input";
import { Button } from "../Button";
import { LoginResponse, useRegisterUser } from "../../queries/useRegisterUser";
import { useUserStore } from "../../zustand/user";
import { ErrorResponse } from "../../queries/utils";

export const RegisterBox = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { setToken } = useUserStore();

  const onSuccess = (resp: LoginResponse | ErrorResponse | null) => {
    if (resp === null) {
      setError("Unknown error");
      return;
    }

    if ("error" in resp) {
      setError(resp.error);
      return;
    }

    setToken(resp.token);
  };

  const { register } = useRegisterUser(onSuccess);

  const onRegister = (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (username.trim() === "") {
      setError("Username cannot be empty");
      return;
    }

    if (password.trim() === "") {
      setError("Password cannot be empty");
      return;
    }

    register({ username, password });
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Input
        value={username}
        label={"Username"}
        setValue={setUsername}
        name={"Username"}
      />
      <Input
        value={password}
        label={"Password"}
        setValue={setPassword}
        name={"Password"}
        type="password"
      />
      <Input
        value={confirmPassword}
        label={"Confirm Password"}
        setValue={setConfirmPassword}
        name={"Confirm Password"}
        type="password"
      />

      {error && <p className="text-sm text-red-500">{error}</p>}

      <Button
        className="bg-peach-yellow-300 hover:bg-peach-yellow-100 text-contessa-900"
        onClick={onRegister}
      >
        Submit
      </Button>
    </div>
  );
};
