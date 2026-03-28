import { User } from "../models/User.js";

// GET /users/:id
export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findByPk(id, {
            attributes: ["id", "username", "name", "bio", "profileImage", "email"],
        });

        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        return res.json(user);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
