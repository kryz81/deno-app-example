async function readFileTest() {
  const data1 = await Deno.readFile("lib_from_github.ts");
  const data2 = await Deno.readFile("module_from_std.ts");

  console.log(data1.length, data2.length);
}

readFileTest();

// run: deno --allow-read read_file.ts
