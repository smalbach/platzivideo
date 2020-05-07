require("dotenv").config();

const config = {
  div: process.env.NODE_ENV !== "PRODUCCION",
  port: process.env.PORT || 3000,
};

module.exports = { config };
