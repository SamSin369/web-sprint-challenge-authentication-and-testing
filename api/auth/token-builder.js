const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

function tokenBuilder(user) {
  // { id, username, role }
  const payload = {
    sub: user.id,
    username: user.username,
    role: user.role,
  };
  const options = {
    expiresIn: "1d",
  };
  const token = jwt.sign(payload, JWT_SECRET, options);
  return token;
}

module.exports = tokenBuilder;
