const { model, Schema } = require("mongoose");

const RecipeSchema = new Schema({
  name: { type: String },
  rating: Number,
  ingredients: [
    {
      type: Schema.Types.ObjectId,
      ref: "Ingredient",
    },
  ],
  reports: [
    {
      type: Schema.Types.ObjectId,
      ref: "Report",
    },
  ],
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = model("Recipe", RecipeSchema);
