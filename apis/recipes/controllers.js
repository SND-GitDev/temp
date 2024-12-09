const Recipe = require("./Recipe");

exports.listRecipe = async (req, res) => {
  const recipe = await Recipe.find();
  res.status(200).json(recipe);
};

exports.createRecipe = async (req, res) => {
  const recipe = new Recipe(req.body);
  const savedRecipe = await recipe.save();
  res.status(201).json(savedRecipe);
};
