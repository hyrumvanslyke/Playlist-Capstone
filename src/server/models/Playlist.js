const db = require("../util/database");
const { DataTypes } = require("sequelize");

const Playlist = db.define("playlist", {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  name: DataTypes.STRING({ length: 40 }),
  img: DataTypes.STRING,
});

module.exports = Playlist;
