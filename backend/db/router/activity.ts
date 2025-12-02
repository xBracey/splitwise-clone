import { addUserActivityHandler, getUserActivitiesHandler } from "../handlers/activity";
import { Router } from "./types";

export const buildActivityRoutes: Router = (fastify, _, done) => {
  fastify.get("/:username", getUserActivitiesHandler);
  fastify.post("/add", addUserActivityHandler(fastify));
  done();
};
