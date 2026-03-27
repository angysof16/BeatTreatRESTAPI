import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("beatTreat", "postgres", "password", {
    port: 5432,
    host: "localhost",
    dialect: "postgres",
});
