import { createServer } from "node:http";

const server = createServer((req, res) => {
  console.log("Richiesta");

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  res.end(
    "<html><body><h1> Server Node</h1></body></html>"
  );
});

server.listen(3000, () => {
  console.log("Server su http://localhost:3000");
});
