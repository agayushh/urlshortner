import { URL } from "../models/url.model.js";

const getAnalytics = async (req, res) => {
  const shortId = req.params.shortId;
  const urlEntry = await URL.findOne({ shortId });
  console.log(urlEntry)
  return res.json({
    totalClicks: urlEntry.totalClicks.length,
    analytics: urlEntry.totalClicks,
  });
};

export { getAnalytics };
