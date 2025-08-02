import mongoose from "mongoose";
const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      required: true,
      unique: true,
    },
    totalClicks: [
      {
        timestamp: { type: Number },
      },
    ],
  },
  { visitHistory: { timestamps: true } }
);

export const URL = mongoose.model("url", urlSchema);
