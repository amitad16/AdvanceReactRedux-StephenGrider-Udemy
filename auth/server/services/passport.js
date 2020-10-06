const passport = require("passport");
const { Strategy: JwtStategy, ExtractJwt } = require("passport-jwt");
const LocalStrategy = require("passport-local");

const User = require("../models/user");
const config = require("../config");

const localOptions = { usernameField: "email" };

// Create Local Strategy
const localLogin = new LocalStrategy(
  localOptions,
  async (email, password, done) => {
    // Verify this email and password with, call 'done' with user
    // if it is correct email and password
    // otherwise call 'done' with false
    try {
      let user = await User.findOne({ email });

      if (!user) return done("Invalid email or password", false);

      // Compare passwords - is 'password' === 'user.password' ?
      let isMatch = await user.comparePassword(password);

      if (!isMatch) return done("Invalid email or password", false);

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
);

// Setup options for jwt strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: config.secret
};

// Create jwt strategy
const jwtLogin = new JwtStategy(jwtOptions, async (payload, done) => {
  // See if the userId in payload exists in our database
  // If it does, call 'done' with that user
  // otherwise call 'done' without a user object
  try {
    let user = await User.findById(payload.sub);

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  } catch (err) {
    return done(err, false);
  }
});

// Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);
