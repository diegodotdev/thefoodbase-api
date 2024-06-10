import { Request, Response } from "express";
import prisma from "../lib/prisma";

export const getRecipes = async (req: Request, res: Response) => {
  try {
    const data = await prisma.recipe.findMany();
    res.send(data).status(200);
  } catch (error) {
    res.send(error).status(500);
  }
};

export const getRecipe = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const data = await prisma.recipe.findUnique({
      where: {
        id: id,
      },
    });
    res.send(data).status(200);
  } catch (error) {
    res.send(error).status(500);
  }
};

export const createRecipe = async (req: Request, res: Response) => {
  const body = req.body;

  try {
    res.send(body).status(200);
  } catch (error) {
    res.send(error).status(500);
  }
};
