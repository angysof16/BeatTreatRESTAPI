import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Album = sequelize.define("albums", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    artist: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    genre: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    releaseYear: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    coverImage: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING(500),
        allowNull: true,
    },
});
