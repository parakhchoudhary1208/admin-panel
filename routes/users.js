const mongoose = require("mongoose");
const plm = require("passport-local-mongoose")
mongoose.connect("mongodb://127.0.0.1/admin-panel");

const userSchema = mongoose.Schema({
  fullname: String,
  username: {
    type:String,
    unique: true  
  },
  password: String,
  email: {
    type:String,
    unique: true  
  },
});

userSchema.plugin(plm);

module.exports = mongoose.model("user", userSchema)
