import { FastifyInstance, FastifyRequest } from "fastify";

export const getMe = (server: FastifyInstance, request: FastifyRequest) => {
  const token = request.headers.authorization?.split(" ")[1];

  if (!token) {
    return undefined;
  }

  const verified = server.jwt.verify(token);

  if (!verified) {
    return undefined;
  }

  const user = server.jwt.decode(token) as { username: string };

  return user;
};
