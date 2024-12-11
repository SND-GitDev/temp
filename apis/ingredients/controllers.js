const Ingredient = require("./models/Ingredient");

exports.listIngredient = async (req, res) => {
  const ingredient = await Ingredient.find();
  res.status(200).json(ingredient);
};

exports.createIngredient = async (req, res) => {
  const ingredient = new Ingredient(req.body);
  const savedIngredient = await ingredient.save();
  res.status(201).json(savedIngredient);
};
