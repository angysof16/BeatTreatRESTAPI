import { Router } from "express";
import { getAllAlbums, getAlbumById } from "../controller/albums.controller.js";
import { getReviewsByAlbum } from "../controller/reviews.controller.js";

const router = Router();

// GET /albums
router.get("/albums", getAllAlbums);

// GET /albums/:id
router.get("/albums/:id", getAlbumById);

// GET /albums/:albumId/reviews
router.get("/albums/:albumId/reviews", getReviewsByAlbum);

export default router;
