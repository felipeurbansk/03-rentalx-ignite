import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { MysqlCategoriesRepository } from "../repositories/MysqlCategoriesRepository";
import { PostgresCategoriesRepository } from "../repositories/PostgresCategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();
// const categoriesRepository = new PostgresCategoriesRepository();
// const categoriesRepository = new MysqlCategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
    const { name, description } = req.body;

    const createCategoryService = new CreateCategoryService(
        categoriesRepository
    );

    createCategoryService.execute({ description, name });

    return res.status(201).send();
});

categoriesRoutes.get("/", (req, res) => {
    const categories = categoriesRepository.list();
    return res.status(200).json(categories);
});

export { categoriesRoutes };
