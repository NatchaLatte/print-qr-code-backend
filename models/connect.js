import { Sequelize } from "sequelize";

const DB_DATABASE = process.env.DB_DATABASE;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_OPTIONS = {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
};

const sequelize = new Sequelize(
  DB_DATABASE,
  DB_USERNAME,
  DB_PASSWORD,
  DB_OPTIONS
);

export default sequelize;