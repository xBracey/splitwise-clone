import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "../components/Header";

export const Route = createRootRoute({
  component: () => (
    <div className="bg-peach-yellow-200 text-contessa-800 min-h-screen">
      <Header />
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
});
