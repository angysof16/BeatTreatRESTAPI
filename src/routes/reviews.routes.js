import { Router } from "express";
import {
    createReview,
    deleteReview,
    updateReview,
} from "../controller/reviews.controller.js";

const router = Router();

// POST /reviews  →  crear reseña (body: userId, albumId, rating, content)
router.post("/reviews", createReview);

// PUT /reviews/:id  →  modificar reseña
router.put("/reviews/:id", updateReview);

// DELETE /reviews/:id  →  eliminar reseña
router.delete("/reviews/:id", deleteReview);

export default router;
