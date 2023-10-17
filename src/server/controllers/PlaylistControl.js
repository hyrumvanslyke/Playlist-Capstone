const Playlist = require("../models/Playlist");
module.exports = {
  createPlaylist: async (req, res) => {
    const { userId, name, img } = req.body;
    await Playlist.create({
      userId: userId,
      name: name,
      img: img,
    });
    res.status(200).send("success");
  },
  getPlaylist: async (req, res) => {
    let { id } = req.params;
    let playlists = await Playlist.findAll({ where: { userId: id } });
    res.status(200).send(playlists);
  },
};
