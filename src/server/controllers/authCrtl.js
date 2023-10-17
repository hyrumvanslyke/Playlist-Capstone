const User = require("../models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { SECRET } = process.env;

const createToken = (username, id) => {
  return jwt.sign({ username, id }, SECRET, {});
};

module.exports = {
  register: async (req, res) => {
    try {
      let checkUser = await User.findAll({
        where: { username: req.body.username },
      });
      if (checkUser.length !== 0) {
        res.status(401).send("That username is taken");
      } else {
        let salt = bcrypt.genSaltSync(10);
        let passHash = bcrypt.hashSync(req.body.password, salt);
        let newUser = await User.create({
          username: req.body.username,
          password: passHash,
        });
        let token = createToken(newUser.username, newUser.id);
        let secureUser = {
          username: newUser.username,
          id: newUser.id,
          token: token,
        };
        res.status(200).send(secureUser);
      }
    } catch (error) {
      res.satus(200).send(error);
    }
  },
  login: async (req, res) => {
    try {
      let checkUser = await User.findOne({
        where: { username: req.body.username },
      });
      if (!checkUser) {
        return res.status(401).send("User does not exist check your username");
      }
      let checkPass = bcrypt.compareSync(req.body.password, checkUser.password);
      if (checkPass) {
        let token = createToken(checkUser.username, checkUser.id);
        let secureUser = {
          username: checkUser.username,
          id: checkUser.id,
          token: token,
        };
        return res.status(200).send(secureUser);
      } else {
        return res.status(401).send("Password is incorrect");
      }
    } catch (error) {
      res.satus(200).send(error);
    }
  },
  validateToken: async (req, res) => {
    let token;
    try {
      token = jwt.verify(req.params.savedToken, SECRET);
    } catch (error) {
      return res.status(401).send(error);
    }
    if (token) {
      return res.staus(200).send("success");
    } else {
      return res.status(401).send("invalid");
    }
  },
};
