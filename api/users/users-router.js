const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../auth/restricted-middleware.js");

const only = (role) => (req, res, next) => {
  console.log("decodedToken", req.decodedJwt);
  if (req.decodedJwt.role === role) next();
  else next({ status: 403, message: "this  is not for you" });
};

router.get("/", restricted, only("user"), (req, res, next) => {
  Users.find()
    .then((users) => {
      res.json(users);
    })
    .catch(next); // our custom err handling middleware in server.js will trap this
});
router.post("/auth/user", restricted, only("user"), (req, res, next) => {
  Users.add()
    .then((users) => {
      res.json(users);
    })
    .catch(next); // our custom err handling middleware in server.js will trap this
});

module.exports = router;
