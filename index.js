import express from "express";
import dotenv from "dotenv";
const app = express();

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT;

app.listen(PORT || 8000, () => {
  console.log(`Server is listening on port ${PORT}`);
});
