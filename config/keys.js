module.exports = {
  PORT: process.env.PORT || 5001,
  DB: {
    name: process.env.NAMEDB || "school",
    user: process.env.USERDB || "postgres",
    password: process.env.PASSWORDDB || "postgres",
    dialect: process.env.DIALECTDB || "postgres",
    host: process.env.HOSTDB || "localhost",
    port: process.env.PORTDB || 5432,
  },
};
