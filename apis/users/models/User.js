const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  name: { type: String },
  password: { type: String },
  session: { type: String },
});

module.exports = model("User", UserSchema);
