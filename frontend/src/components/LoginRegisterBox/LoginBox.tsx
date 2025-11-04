import { FormEvent, useState } from "react";
import { Input } from "../Input";
import { useUserStore } from "../../zustand/user";
import { Button } from "../Button";
import { useLoginUser } from "../../queries/useLoginUser";
import { LoginResponse } from "../../queries/useRegisterUser";
import { ErrorResponse } from "../../queries/utils";

export const LoginBox = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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

  const { login } = useLoginUser(onSuccess);

  const onLogin = (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    if (username.trim() === "") {
      setError("Username cannot be empty");
      return;
    }

    if (password.trim() === "") {
      setError("Password cannot be empty");
      return;
    }

    login({ username, password });
  };

  return (
    <form className="flex flex-col items-center gap-4" onSubmit={onLogin}>
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
      {error && <p className="text-sm text-red-500">{error}</p>}
      <Button
        className="bg-peach-yellow-300 hover:bg-peach-yellow-100 text-contessa-900"
        onClick={onLogin}
      >
        Submit
      </Button>
    </form>
  );
};
