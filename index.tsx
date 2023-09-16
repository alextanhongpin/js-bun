const server = Bun.serve({
  port: 3000,
  fetch(request) {
    return new Response("hello world");
  },
});
console.log(`listening on localhost:${server.port}`);
