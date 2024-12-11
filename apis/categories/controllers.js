const Category = require("./models/Category");

exports.listCategories = async (req, res) => {
  const categories = await Category.find().populate("recipes");
  res.status(200).json(categories);
};

exports.createCategory = async (req, res) => {
  const category = new Category(req.body);
  const savedCAtegory = category.save();
  res.status(201).json(savedCAtegory);
};

exports.updateCategory = async (req, res) => {
  const { categoryId } = req.params;
  const category = await Category.findById(categoryId);
  const updatedCategory = await category.updateOne(req.body);
  console.log("updatedCategory", updatedCategory);
  res.status(200).json(updatedCategory);
};

exports.addRecipe = async (req, res) => {
  const { categoryId, recipeId } = req.params;
  const category = await Category.findById(categoryId);
  const updatedCategory = await category.updateOne({
    $push: { recipes: recipeId },
  });
  res.status(200).json(updatedCategory);
};
