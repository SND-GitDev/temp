const { model, Schema } = require("mongoose");

const IngredientSchema = new Schema({
  name: { type: String },
});

module.exports = model("Ingredient", IngredientSchema);
