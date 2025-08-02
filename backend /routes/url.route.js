import express, { Router } from "express";
import { handleUrlShortner } from "../controllers/url.controller.js";
import { getAnalytics } from "../controllers/analytics.controller.js";

const urlRouter = Router();

urlRouter.post("/", handleUrlShortner);
urlRouter.get("/analytics/:shortId", getAnalytics)

export { urlRouter };


