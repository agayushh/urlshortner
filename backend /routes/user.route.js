import express from "express";
import { handleUserSignup } from "../controllers/user.controller";
const router = express.Router();


router.post("/", handleUserSignup)

module.exports = router;
