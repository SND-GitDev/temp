const { model, Schema } = require("mongoose");

const RecipeSchema = new Schema({
  reason: { type: String },
  recipe: {
    type: Schema.Types.ObjectId,
    ref: "Recipe",
  },
});

module.exports = model("Recipe", RecipeSchema);
