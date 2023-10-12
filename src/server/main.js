const express = require("express");
const ViteExpress = require("vite-express");
const db = require("./util/database");
const app = express();
const User = require("./models/Users.js");
const Playlist = require("./models/Playlist.js");
const Song = require("./models/Songs.js");
const { register, login, validateToken } = require("./controllers/authCrtl");

app.use(express.json());

User.hasMany(Playlist);
Playlist.belongsTo(User);

Playlist.hasMany(Song);
Song.belongsTo(Playlist);

app.post("/api/register", register);
app.post("/api/login", login);
app.get('/api/validate', validateToken )
db.sync();

ViteExpress.listen(app, 3000, () => {
  User.create({ username: "hyrumvan", password: "bigballin" });
  console.log("Server is listening on port 3000...");
});
