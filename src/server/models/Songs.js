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
  img: DataTypes.STRING,
  title: DataTypes.STRING,
  artist: DataTypes.STRING,
});

module.exports = Song;
