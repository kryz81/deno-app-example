const permissions = Deno.permissions();

console.log(permissions.read);

// run, read, write, net, env, hrtime

// run with --allow-read
