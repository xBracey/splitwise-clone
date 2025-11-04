import { createLazyFileRoute } from "@tanstack/react-router";
import { Logout } from "../pages/Logout";

const Index = () => {
  return <Logout />;
};

export const Route = createLazyFileRoute("/logout")({
  component: Index,
});
