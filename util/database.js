const Sequelize = require("sequelize");

const sequelize = new Sequelize("aim", "aim", "wahid@#@#@#", {
  dialect: "mysql",
  host: "128.199.176.47",
  logging: false,
  define: {
    freezeTableName: true
  },
});

module.exports = sequelize;