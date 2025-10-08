import express from "express";
import { connectDB } from "./config/db.js"; // ./ = relative path (same folder)
import dotenv from "dotenv";

import productRoutes from "./routes/product.route.js";

//loads our .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json()); //allows us to accept JSON data in the request's body
app.use("/api/products", productRoutes);

// use Postman desktop application to test without an UI

const server = app.listen(PORT, () => {
  const { address, port } = server.address();
  console.log(`server started at localhost:${port}, you're all set buddy`);
  //  connectDB();
  connectDB().then(() => {
    console.log(`DB connected sucessfully`);
  });
});
//test my IP
// const getIP = async () => {
//   const res = await fetch("https://api.ipify.org?format=json");
//   const data = await res.json();
//   console.log("my IP is: " + data.ip);
// };
// getIP();
