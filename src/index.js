import app from "./app.js";
import { sequelize } from "./database/database.js";
import { setupRelations } from "./models/relations.js";
import { loadInitialUsers } from "./database/initUsers.js";
import { loadInitialAlbums } from "./database/initAlbums.js";

// Importamos los modelos para que Sequelize los registre antes del sync
import "./models/User.js";
import "./models/Album.js";
import "./models/Review.js";

async function init() {
    try {
        await sequelize.authenticate();
        console.log("Connection established successfully.");

        // force: true recrea las tablas cada vez — útil en desarrollo
        await sequelize.sync({ force: true });

        // Relaciones entre modelos
        setupRelations();

        // Datos iniciales
        await loadInitialUsers();
        await loadInitialAlbums();

        app.listen(3000, () => {
            console.log("Server running on port 3000");
        });

    } catch (error) {
        console.log(error);
    }
}

init();
