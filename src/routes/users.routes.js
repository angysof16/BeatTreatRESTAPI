import { Router } from "express";
import { getUserById } from "../controller/users.controller.js";
import { getReviewsByUser } from "../controller/reviews.controller.js";

const router = Router();

// GET /users/:id
router.get("/users/:id", getUserById);

// GET /users/:userId/reviews
router.get("/users/:userId/reviews", getReviewsByUser);

export default router;