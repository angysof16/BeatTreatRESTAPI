import { Router } from "express";
import {
    createReview,
    deleteReview,
    updateReview,
} from "../controller/reviews.controller.js";

const router = Router();

// POST /reviews
router.post("/reviews", createReview);

// PUT /reviews/:id
router.put("/reviews/:id", updateReview);

// DELETE /reviews/:id
router.delete("/reviews/:id", deleteReview);

export default router;
