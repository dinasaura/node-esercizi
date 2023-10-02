import { createServer } from "node:http";
import axios from "axios";

const server = createServer(async (request, response) => {
  try {

    const apiResponse = await axios.get("https://rickandmortyapi.com/api/character/195");

    const characterData = apiResponse.data;

    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(characterData));
  } catch (error) {
    console.error("Error fetching API", error);
    response.statusCode = 500;
    response.end("Internal Server Error");
  }
});

server.listen(3111, () => {
  console.log(`Server running at http://localhost:3111`);
});
