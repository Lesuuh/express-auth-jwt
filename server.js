const http = require("http");
require("dotenv").config;
const connectDB = require("./src/db/connectDB");
const app = require("./src/app");
const PORT = process.env.PORT || 4000;

const server = http.createServer(app);

async function ServerListen() {
  await connectDB();

  server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
}

ServerListen();
