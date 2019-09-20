const buf = new Deno.Buffer(new ArrayBuffer(10));

buf.writeSync(["abcd"]);
