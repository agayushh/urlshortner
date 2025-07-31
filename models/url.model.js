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
    },
    totalClicks: [
      {
        timestamp: { type: Number },
      },
    ],
  },
  { timestamps: true }
);

export const URL = mongoose.model("url", urlSchema);
