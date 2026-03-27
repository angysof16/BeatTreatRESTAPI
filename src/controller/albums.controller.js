import { Album } from "../models/Album.js";

// GET /albums  →  traer todos los álbumes
export const getAllAlbums = async (req, res) => {
    try {
        const albums = await Album.findAll();
        return res.json(albums);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// GET /albums/:id  →  detalle de un álbum por id
export const getAlbumById = async (req, res) => {
    try {
        const { id } = req.params;

        const album = await Album.findByPk(id);

        if (!album) {
            return res.status(404).json({ error: "Álbum no encontrado" });
        }

        return res.json(album);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
