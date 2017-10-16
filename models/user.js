const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

// Generalizing it to have an idea on how and where to start
// Will be working on it with rest of backend team

const userSchema = new Schema({

   firstName: {
    type: String,
    unique: false,
    required: false
   },
   lastName: {
    type: String,
    unique: false,
    required: false
   },
   email: {
     type: String,
     lowercase: true,
     unique: true,
     required: true
   },
   password: {
     type: String,
     required: true
   },
   userCategory: {
    type: String,
    required: false
   },
   categoryDescription: {
    type: String
   },
   zipCode: {
    type: Number,
    required: false
   },
   imagePath: {
    type: String
   },
   sex: {
    type: String,
    required: false
   },
   publicProfile: {
    type: Boolean,
    default: false
   }

});

/**
 * Compare the passed password with the value in the database. A model method.
 *
 * @param {string} password
 * @returns {object} callback
 */
userSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};


/**
 * The pre-save hook method.
 */
userSchema.pre('save', function saveHook(next) {
  const User = this;

  // proceed further only if the password is modified or the user is new
  if (!User.isModified('password')) return next();

  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) { return next(saltError); }

    return bcrypt.hash(User.password, salt, (hashError, hash) => {
      if (hashError) { return next(hashError); }

      // replace a password string with hash value
      User.password = hash;

      return next();
    });
  });
});

const User = mongoose.model("User", userSchema);

module.exports = User;