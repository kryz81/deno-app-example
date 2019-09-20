import { bgBlue, red, bold } from "colors/mod.ts";

console.log(bgBlue(red(bold("Hello world!"))));

// run: deno --importmap=import_map.json using_import_map.ts
