import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Review = sequelize.define("reviews", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "users",
            key: "id",
        },
    },
    albumId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "albums",
            key: "id",
        },
    },
    rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: { min: 1, max: 5 },
    },
    content: {
        type: DataTypes.STRING(1000),
        allowNull: false,
    },
});
