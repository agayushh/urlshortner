import express, { Router } from "express";
import { handleUrlShortner } from "../controllers/url.controller.js";

const urlRouter = Router();

urlRouter.post("/", handleUrlShortner);

export { urlRouter };
