require("dotenv").config();

module.exports = {
  local: {
    username: process.env.POSTGRES_USER || "",
    password: process.env.POSTGRES_PASSWORD || "",
    database: process.env.DB_NAME || "",
    host: process.env.DB_HOST || "",
    dialect: process.env.DB_DIALECT || "",
  },
  develop: {
    username: process.env.POSTGRES_USER || "",
    password: process.env.POSTGRES_PASSWORD || "",
    database: process.env.DB_NAME || "",
    host: process.env.DB_HOST || "",
    dialect: process.env.DB_DIALECT,
  },
  prod: {
    username: process.env.POSTGRES_USER || "",
    password: process.env.POSTGRES_PASSWORD || "",
    database: process.env.DB_NAME || "",
    host: process.env.DB_HOST || "",
    dialect: process.env.DB_DIALECT,
  },
}