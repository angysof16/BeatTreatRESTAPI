import { Router } from "express";
import {
  getAllTweets,
  createTweet,
  updateTweet,
  deleteTweet,
  getTweetById,
  getTweetReplies
} from "../controller/tweets.controller.js";

const router = Router();

router.get("/tweets", getAllTweets);
router.post("/tweets", createTweet);
router.put("/tweets/:id", updateTweet);
router.delete("/tweets/:id", deleteTweet);

router.get("/tweets/:id", getTweetById);
router.get("/tweets/:id/replies", getTweetReplies);

export default router;