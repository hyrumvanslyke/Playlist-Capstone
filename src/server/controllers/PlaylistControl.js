const Playlist = require("../models/Playlist");
const Songs = require("../models/Songs")
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
  getPlaylist: async (req, res) =>{
    let {id} = req.params
    let details = await Playlist.findOne({where: {id: id}, include: Songs })
    res.status(200).send(details)
  },
  getPlaylists: async (req, res) => {
    let { id } = req.params;
    let playlists = await Playlist.findAll({ where: { userId: id } });
    res.status(200).send(playlists);
  },
  addToPlaylist: async (req, res) =>{
    let {songId, playlistId} = req.body
    await Songs.create({playlistId: playlistId, songId: songId})
    res.status(200).send("Successfully added!")

  }
};
