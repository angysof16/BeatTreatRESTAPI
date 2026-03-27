import { Router } from "express";
import { getAllAlbums, getAlbumById } from "../controller/albums.controller.js";
import { getReviewsByAlbum } from "../controller/reviews.controller.js";

const router = Router();

// GET /albums  →  todos los álbumes
router.get("/albums", getAllAlbums);

// GET /albums/:id  →  detalle de álbum por id
router.get("/albums/:id", getAlbumById);

// GET /albums/:albumId/reviews  →  reseñas de un álbum
router.get("/albums/:albumId/reviews", getReviewsByAlbum);

export default router;
