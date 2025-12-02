import { Router } from "./types";
import { buildUserRoutes } from "./users";
import { buildActivityRoutes } from "./activity";

export const buildApiRoutes: Router = (fastify, _, done) => {
  fastify.register(buildUserRoutes, { prefix: "/users" });
  fastify.register(buildActivityRoutes, { prefix: "/activity" });
  done();
};

