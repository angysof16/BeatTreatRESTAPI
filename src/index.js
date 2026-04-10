import app from "./app.js";
import { sequelize } from "./database/database.js";
import { setupRelations } from "./models/relations.js";
import { loadInitialUsers } from "./database/initUsers.js";
import { loadInitialAlbums } from "./database/initAlbums.js";
import { loadInitialReviews } from "./database/initReviews.js";

import "./models/User.js";
import "./models/Album.js";
import "./models/Review.js";

async function init() {
    try {
        await sequelize.authenticate();
        console.log("Connection established successfully.");

        // Las relaciones ANTES del sync
        setupRelations();

        await sequelize.sync({ force: true });

        await loadInitialUsers();
        await loadInitialAlbums();
        await loadInitialReviews();   // ← nuevo: carga reseñas de prueba

        app.listen(3000, () => {
            console.log("Server running on port 3000");
        });

    } catch (error) {
        console.log(error);
    }
}

init();