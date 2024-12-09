const express = require("express");
const app = express();
const port = 8000;

const categoriesrouter = require("./apis/categories/routes");
const ingredientsRouter = require("./apis/ingredients/routes");
const recipesRouter = require("./apis/recipes/routes");

app.use("/api/categories", categoriesrouter);
app.use("/api/ingredients", ingredientsRouter);
app.use("/api/recipes", recipesRouter);

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
