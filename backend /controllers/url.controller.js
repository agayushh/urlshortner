// // controllers/url.controller.js
import { URL } from "../models/url.model.js";

const handleUrlShortner = async (req, res) => {
  const { url } = req.body;

  if (!url || typeof url !== "string") {
    return res.status(400).json({ message: "Invalid Url" });
  }
  const existing = await URL.findOne({ redirectURL: url });
  if (existing) {
    return res.status(200).json({ 
      message: "URL already exists",
      shortId: existing.shortId,
      shortURL: `http://localhost:8000/${existing.shortId}`
    });
  }
  const chars =
    "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";
  let shortId = "";
  for (let index = 0; index < 6; index++) {
    shortId += chars[Math.floor(Math.random() * chars.length)];
  }

  try {
    const newEntry = await URL.create({
      shortId: shortId,
      redirectURL: url,
      totalClicks: [],
    });

    return res.status(201).json({
      message: "url created successfully",
      shortId,
      shortURL: `http://localhost:8000/${shortId}`,
    });
  } catch (error) {
    console.log("Cannot add entry due to: ", error);
    return res.status(501).json({ message: "Server issue" });
  }
};

export { handleUrlShortner };
