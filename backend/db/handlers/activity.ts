import { FastifyInstance } from "fastify";
import { ServiceHandler } from "./types";
import { addUserActivity, getUserActivities } from "../services/activity";

export interface UserActivityAdd {
  title: string;
  amount: number;
  split: { username: string; value: number }[];
}

export const getUserActivitiesHandler: ServiceHandler = async (
  request,
  reply
) => {
  const { username } = request.params as { username: string };
  const userActivities = await getUserActivities(username);

  if (userActivities.length === 0) {
    reply.status(404).send({ error: "No user activities found" });
    return;
  }

  reply.send({ userActivities });
};

export const addUserActivityHandler =
  (server: FastifyInstance): ServiceHandler =>
  async (request, reply) => {
    const body = request.body as UserActivityAdd;

    let sum = 0
    for (let index = 0; index < body.split.length; index++) {
      const element = body.split[index];
      const value = element.value;
      sum = sum + value 
    }
    if (sum != 1) {
      reply.status(400).send({ error: "Sum of values does not equal 1" });
      return 
    }

    await addUserActivity(body)

    reply.send({ success: true });

  };
