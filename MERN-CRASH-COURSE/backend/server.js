import express from "express";

const app = express();
//routes
app.get("/products", (req, res) => {
  res.send("Server is ready 123");
});
const server = app.listen(5000, "127.0.0.1", () => {
  const { address, port } = server.address();
  console.log(`server started at ${address}:${port}, you're all set buddy`);
  //console.log(server.address());
});
