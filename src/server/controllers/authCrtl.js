const User = require("../models/Users");
const bcrypt = require("bcryptjs");

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
        res.status(200).send(newUser);
      }
    } catch (error) {
      res.satus(200).send(error);
    }
  },
  login: async (req, res) => {
    try {
        let checkUser = await User.findOne({where: {username: req.body.username},
        })
        if(!checkUser){
            return res.status(401).send("User does not exist check your username")
        }
        let checkPass =  bcrypt.compareSync(req.body.password, checkUser.password)
        if(checkPass){
            return res.status(200).send(checkUser)
        }else{
            return res.status(401).send("Password is incorrect")
        }
    } catch (error) {
      res.satus(200).send(error);
    }
  },
};
