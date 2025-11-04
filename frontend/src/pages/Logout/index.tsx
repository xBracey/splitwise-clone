import { useEffect } from "react";
import { useUserStore } from "../../zustand/user";
import { useNavigate } from "@tanstack/react-router";

export const Logout = () => {
  const navigate = useNavigate();
  const { setToken } = useUserStore();

  useEffect(() => {
    setToken("");
    navigate({ to: "/" });
  }, []);

  return <div />;
};
