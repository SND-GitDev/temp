const { model, Schema } = require("mongoose");

const RecipeSchema = new Schema({
  name: { type: String },
  ingredients: [
    {
      type: Schema.Types.ObjectId,
      ref: "Ingredient",
    },
  ],
});

module.exports = model("Recipe", RecipeSchema);
