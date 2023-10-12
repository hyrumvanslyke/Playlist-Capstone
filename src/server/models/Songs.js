const db = require("../util/database");
const { DataTypes } = require("sequelize");

const Song = db.define("songs", {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  ShazamId: DataTypes.INTEGER,
});

module.exports = Song;
