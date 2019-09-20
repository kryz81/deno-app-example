import { listenAndServe } from "http";
import uuid from "https://deno.land/std/uuid/mod.ts";

// import { getUsers } from "https://kryz.dev/deno/users.js";
import { getUsers } from "./lib/users.ts";

const host = "0.0.0.0";
const port = 3030;

const createResponse = req => {
  let body;
  if (req.url === "/users") {
    body = JSON.stringify(getUsers());
  } else {
    body = `${req.method} | ${req.url}, (id: ${uuid()})`;
  }

  return new TextEncoder().encode(body);
};

listenAndServe(`${host}:${port}`, async req => {
  await req.respond({
    body: createResponse(req)
  });
});
