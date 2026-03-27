import { User } from "./User.js";
import { Album } from "./Album.js";
import { Review } from "./Review.js";

export function setupRelations() {

    // Un usuario puede escribir muchas reseñas
    User.hasMany(Review, {
        foreignKey: "userId",
        as: "reviews",
        onDelete: "cascade",
        hooks: true,
    });

    // Una reseña pertenece a un usuario
    Review.belongsTo(User, {
        foreignKey: "userId",
        as: "user",
    });

    // Un álbum puede tener muchas reseñas
    Album.hasMany(Review, {
        foreignKey: "albumId",
        as: "reviews",
        onDelete: "cascade",
        hooks: true,
    });

    // Una reseña pertenece a un álbum
    Review.belongsTo(Album, {
        foreignKey: "albumId",
        as: "album",
    });
}
