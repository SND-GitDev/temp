const Category = require("./models/Category");

exports.listCategories = async (req, res) => {
  const categories = await Category.find();
  res.status(200).json();
};

exports.createCategory = async (req, res) => {
  const category = new Category(req.body);
  const savedCAtegory = category.save();
  res.status(201).json(savedCAtegory);
};
