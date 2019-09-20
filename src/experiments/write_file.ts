(async () => {
  const encoder = new TextEncoder();
  const data = encoder.encode("Hello world\n");

  await Deno.writeFile("hello.txt", data);
  await Deno.writeFile("hello2.txt", data);
})();
