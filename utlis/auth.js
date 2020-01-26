// Require jwt
const jwt = require("jsonwebtoken");

function genToken(payload) {
  return jwt.sign({ payload }, "piyush", {
    expiresIn: "5d"
  });
}

module.exports = { genToken };
