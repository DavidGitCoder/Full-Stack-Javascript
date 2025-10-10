import express from "express";
import { connectDB } from "./config/db.js"; // ./ = relative path (same folder)
import dotenv from "dotenv";
import path from "path";

import productRoutes from "./routes/product.route.js";

//loads our .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT;

//get the absolute path of the project folder
const __dirname = path.resolve();

app.use(express.json()); //allows us to accept JSON data in the request's body
app.use("/api/products", productRoutes);

// use Postman desktop application to test without an UI

// if in production then deploy
if (process.env.NODE_ENV === "production") {
  //makes our /dist folder (created by Vite: npm run build in /frontend)
  //our static assets
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  //any route that doesn't include /api/products will go here (our frontend in this case)
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

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
