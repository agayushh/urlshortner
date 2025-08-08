import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectToDB } from "./connectDb.js";
import { URL } from "./models/url.model.js";
import { urlRouter } from "./routes/url.route.js";
import userRoute from "./routes/user.route.js";
const app = express();

dotenv.config({
  path: "./.env",
});

// Enable CORS for all routes
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/url", urlRouter);
app.use("/user", userRoute);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        totalClicks: {
          timestamp: Date.now(),
        },
      },
    }
  );
  if (!entry) {
    return res.status(404).json({ error: "URL not found" });
  }
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
