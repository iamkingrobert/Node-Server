const http = require("http");

const handleRequest = (req, res) => {
  res.write("Welcome to Backend King Robert");
  res.end();
};

const server = http.createServer(handleRequest);

// Define my server port
const port = 3000;

server.listen(port, () => {
  console.log(`Hey Robert Server is running on http://localhost:${port}`);
});
