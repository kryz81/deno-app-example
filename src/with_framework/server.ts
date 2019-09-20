import { Application, Router } from "https://deno.land/x/oak/mod.ts";

import { APP_HOST, APP_PORT } from "./config.ts";

import loggerMiddleware from "./middleware/logger.ts";

import homeHandler from "./handlers/home.ts";

const bootstrapApp = (): Application => {
  const app = new Application();

  // global middleware
  app.use(loggerMiddleware);

  // routes
  const router = new Router();

  router.get("/home", homeHandler);

  app.use(router.routes());
  app.use(router.allowedMethods());

  app.use(({ response }) => {
    response.body = { msg: "API", version: "1" };
  });

  return app;
};

const runServer = async app => {
  const address = `${APP_HOST}:${APP_PORT}`;

  console.log(`Listening on: ${address}`);
  await app.listen(address);
};

const app = bootstrapApp();

runServer(app);
