const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcryptjs");

// Define our model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

// On Save Hook, encrypt password
userSchema.pre("save", async function(next) {
  let user = this;

  if (user.isModified("password") || user.isNew) {
    try {
      let salt = await bcrypt.genSalt(10);

      if (user.password) {
        let hashedPassword = await bcrypt.hash(user.password, salt);

        user.password = hashedPassword;

        next();
      }
    } catch (err) {
      next(err);
    }
  } else {
    next();
  }
});

userSchema.methods.comparePassword = async function(candidatePassword) {
  let user = this;

  try {
    let isMatch = await bcrypt.compare(candidatePassword, user.password);

    return isMatch;
  } catch (err) {
    return false;
  }
};

// Create model class
const ModelClass = mongoose.model("user", userSchema);

// Export the model
module.exports = ModelClass;
