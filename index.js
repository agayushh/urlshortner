import express from "express";
import dotenv from "dotenv";
import { connectToDB } from "./connectDb.js";
import { urlRouter } from "./routes/url.route.js";
const app = express();

dotenv.config({
  path: "./.env",
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/url", urlRouter);
const PORT = process.env.PORT;

app.get("/test", (req, res) => {
  res.send("hi there");
});

connectToDB()
  .then(() => {
    app.listen(PORT || 8000, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Something went wrong while connecting ${err}`);
  });
