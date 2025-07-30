import express from "express";
import dotenv from "dotenv";
import { connectToDB } from "./connectDb.js ";
import { router } from "./routes/url.route.js";
const app = express();

dotenv.config({
  path: "./.env",
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT;

connectToDB()
  .then(() => {
    app.listen(PORT || 8000, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Something went wrong while connecting ${err}`);
  });


app.use("/url", router)