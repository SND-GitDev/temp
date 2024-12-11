const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  name: { type: String },
  password: { type: String },
  session: { type: String },
  myRecipes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Recipe",
    },
  ],
  favouriteRecipe: [
    {
      type: Schema.Types.ObjectId,
      ref: "Recipe",
    },
  ],
});

module.exports = model("User", UserSchema);
