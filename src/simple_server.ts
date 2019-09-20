// import lib
import uuid from "https://deno.land/std/uuid/mod.ts";

// import external lib, but use import map
import { listenAndServe } from "http";

// import external 3rd party lib
// import { getUsers } from "https://kryz.dev/deno/users.js";

// import local module
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
