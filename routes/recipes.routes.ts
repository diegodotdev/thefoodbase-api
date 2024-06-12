import expres from "express";
import {
  createRecipe,
  getRecipes,
  getRecipe,
  getRecipesByCategory,
} from "../controllers/recipes.controllers";

const router = expres.Router();

router.get("/", getRecipes);
router.get("/:id", getRecipe);
router.get("/category/:id", getRecipesByCategory);
router.post("/add-recipe", createRecipe);

export default router;
