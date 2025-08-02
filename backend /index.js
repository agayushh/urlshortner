import express from "express";
import dotenv from "dotenv";
import { connectToDB } from "./connectDb.js";
import { urlRouter } from "./routes/url.route.js";
import { URL } from "./models/url.model.js";
const app = express();

dotenv.config({
  path: "./.env",
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/url", urlRouter);
app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

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
