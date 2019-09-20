const { readFile, revokePermission } = Deno;

(async () => {
  try {
    const data = await readFile("simple_server.ts");
    revokePermission("read");
    console.log(data.length);
  } catch {
    console.log("Cannot read file");
  }
})();
