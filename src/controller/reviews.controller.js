import { Review } from "../models/Review.js";
import { User } from "../models/User.js";
import { Album } from "../models/Album.js";

// POST /reviews  →  crear reseña asociada a usuario y álbum
export const createReview = async (req, res) => {
    try {
        const { userId, albumId, rating, content } = req.body;

        const user = await User.findByPk(userId);
        if (!user) return res.status(404).json({ error: "Usuario no encontrado" });

        const album = await Album.findByPk(albumId);
        if (!album) return res.status(404).json({ error: "Álbum no encontrado" });

        const review = await Review.create({ userId, albumId, rating, content });
        return res.status(201).json(review);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// GET /albums/:albumId/reviews  →  todas las reseñas de un álbum
export const getReviewsByAlbum = async (req, res) => {
    try {
        const { albumId } = req.params;

        const reviews = await Review.findAll({
            where: { albumId },
            include: {
                model: User,
                as: "user",
                attributes: ["id", "username", "name", "profileImage"],
            },
        });

        return res.json(reviews);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// GET /users/:userId/reviews  →  todas las reseñas de un usuario
export const getReviewsByUser = async (req, res) => {
    try {
        const { userId } = req.params;

        const reviews = await Review.findAll({
            where: { userId },
            include: {
                model: Album,
                as: "album",
                attributes: ["id", "title", "artist", "coverImage"],
            },
        });

        return res.json(reviews);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// DELETE /reviews/:id  →  eliminar reseña por id
export const deleteReview = async (req, res) => {
    try {
        const { id } = req.params;

        const review = await Review.findByPk(id);
        if (!review) return res.status(404).json({ error: "Reseña no encontrada" });

        await review.destroy();
        return res.sendStatus(204);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// PUT /reviews/:id  →  modificar reseña por id
export const updateReview = async (req, res) => {
    try {
        const { id } = req.params;

        const review = await Review.findByPk(id);
        if (!review) return res.status(404).json({ error: "Reseña no encontrada" });

        await review.update(req.body);
        return res.json(review);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
