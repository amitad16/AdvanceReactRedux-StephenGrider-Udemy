const jwt = require("jwt-simple");

const config = require("../config");

const User = require("../models/user");

function tokenForUser(user) {
  return jwt.encode(
    { sub: user.id, timestamp: new Date().getTime() },
    config.secret
  );
}

exports.signup = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(422).send({ error: "Email and Password are required" });

  try {
    let existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(422).send({ error: "Email is in use" });
    }

    const user = new User({
      email,
      password
    });

    await user.save();

    res.json({ token: tokenForUser(user) });
  } catch (err) {
    if (err) return next(err);
  }
};
