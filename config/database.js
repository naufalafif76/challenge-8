// const {
//   DB_USER = "txwdgrnwxhtxri",
//   DB_PASSWORD = "16dc79791fcbe6287dd04a7266b10220ea3c8f6af6cb2f1ed9478c3e14f36add",
//   DB_NAME = "dd69u8auocrltp",
//   DB_HOST = "ec2-3-226-163-72.compute-1.amazonaws.com",
//   DB_PORT = "5432"
// } = process.env;

const DB_USER = process.env.DB_USER || "txwdgrnwxhtxri";
const DB_PASSWORD = process.env.DB_PASSWORD || "16dc79791fcbe6287dd04a7266b10220ea3c8f6af6cb2f1ed9478c3e14f36add";
const DB_NAME = process.env.DB_NAME || "dd69u8auocrltp";
const DB_HOST = process.env.DB_HOST || "ec2-3-226-163-72.compute-1.amazonaws.com";
const DB_PORT = process.env.DB_PORT || "5432";

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}_development`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres"
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}_test`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres"
  },
  production: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres"
  }
}
