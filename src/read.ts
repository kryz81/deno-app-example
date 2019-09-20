const { readFile, revokePermission } = Deno;

(async () => {
  try {
    const data = await readFile("data.txt");
    revokePermission("read");
    console.log(data.length);
  } catch {
    console.log("Cannot read file");
  }
})();
