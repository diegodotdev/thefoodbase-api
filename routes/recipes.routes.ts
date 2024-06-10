import expres from "express";
import {
  createRecipe,
  getRecipes,
  getRecipe,
} from "../controllers/recipes.controllers";

const router = expres.Router();

router.get("/", getRecipes);
router.get("/:id", getRecipe);
router.post("/add-recipe", createRecipe);

export default router;
