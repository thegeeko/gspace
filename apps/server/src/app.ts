import Fastify from "fastify";
import env from "./utils/env";

const server = Fastify();

async function main() {
  server.get("/", async (request, reply) => {
    return { hello: "world" };
  });

  try {
    await server.listen({
      port: env.PORT,
    });
    console.log(`Server listening on port http://localhost:${env.PORT} 🚀`);
  } catch (error) {
    console.error(error);
  }
}

main();
