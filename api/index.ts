import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import recipesRouter from "../routes/recipes.routes";

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/recipes", recipesRouter);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
