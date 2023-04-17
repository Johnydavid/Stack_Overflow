const User = require("../model/user");
const jwt = require("jsonwebtoken");

exports.loginBefore = async (req, res, next) => {
  const tokenFind = () => {
    try {
      // check if token found in cookies
      if (req.cookies.token) {
        return req.cookies.token;
      }
      // check if token found body
      if (req.body.token) {
        return req.body.token;
      }
      //check if token found in header
      if (req.header("Authorization")) {
        return req.header("Authorization").replace("Bearer ", "");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const token = tokenFind();

  if (token) {
    // decoding the token with scerect key
    const decoded = jwt.verify(token, process.env.JWTSECRETWORD);

    // asign to a var
    const found = await User.findById(decoded.id);

    if (found) {
      return res.status(200).redirect("/question");
    } else {
  return res.status(400).redirect("/user");
}
  }
  next();
};