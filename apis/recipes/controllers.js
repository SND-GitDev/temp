const Recipe = require("./models/Recipe");

exports.listRecipe = async (req, res) => {
  const recipe = await Recipe.find().populate("ingredients");
  res.status(200).json(recipe);
};

exports.createRecipe = async (req, res) => {
  const recipe = new Recipe(req.body);
  const savedRecipe = await recipe.save();
  res.status(201).json(savedRecipe);
};

exports.updateRecipe = async (req, res) => {
  const { recipeId } = req.params;
  const recipe = await Recipe.findById(recipeId);
  const updatedRecipe = await recipe.updateOne(req.body);
  res.status(200).json(updatedRecipe);
};
