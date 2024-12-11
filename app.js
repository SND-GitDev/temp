const express = require("express");
const connectDB = require("./database");
const app = express();
const port = 8000;

const categoriesrouter = require("./apis/categories/routes");
const ingredientsRouter = require("./apis/ingredients/routes");
const recipesRouter = require("./apis/recipes/routes");
const usersRouter = require("./apis/users/routes");

app.use(express.json());
app.use("/api/categories", categoriesrouter);
app.use("/api/ingredients", ingredientsRouter);
app.use("/api/recipes", recipesRouter);
app.use("/api/users", usersRouter);

connectDB();

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
