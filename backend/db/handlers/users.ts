import { FastifyInstance } from "fastify";
import { getUser, insertUser } from "../services/users";
import { ServiceHandler } from "./types";
import bcrypt from "bcrypt";
import { getMe } from "../utils/getMe";

export const getUserHandler: ServiceHandler = async (request, reply) => {
  const { username } = request.params as { username: string };
  const user = await getUser(username);

  if (!user) {
    reply.status(404).send({ error: "User not found" });
    return;
  }

  reply.send({ username: user.username });
};

export const getMeHandler: (server: FastifyInstance) => ServiceHandler =
  (server) => async (request, reply) => {
    const user = getMe(server, request);

    if (!user) {
      reply.status(401).send({ error: "Unauthorized" });
      return;
    }

    reply.send({ username: user.username });
  };

export const registerUserHandler: (server: FastifyInstance) => ServiceHandler =
  (server) => async (request, reply) => {
    const { username, password } = request.body as {
      username: string;
      password: string;
    };

    const user = await getUser(username);

    if (user) {
      reply.status(400).send({ error: "User already exists" });
    }

    await insertUser({ username, password });

    const token = server.jwt.sign({ username });
    reply.send({ token });
  };

export const loginUserHandler: (server: FastifyInstance) => ServiceHandler =
  (server) => async (request, reply) => {
    const { username, password } = request.body as {
      username: string;
      password: string;
    };

    const user = await getUser(username);

    if (!user) {
      reply.status(404).send({ error: "User not found" });
      return;
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      reply.status(401).send({ error: "Invalid password" });
      return;
    }

    const token = server.jwt.sign({ username });
    reply.send({ token });
  };
