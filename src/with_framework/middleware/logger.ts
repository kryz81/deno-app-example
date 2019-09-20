import { green, cyan, bold } from "https://deno.land/std@v0.17.0/fmt/colors.ts";

export default async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(
    `${green(ctx.request.method)} ${cyan(ctx.request.url)} - ${bold(
      String(rt)
    )}`
  );
};
