import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
    constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const categories = await this.listCategoriesUseCase.execute();
            return response.status(200).json(categories);
        } catch (e) {
            return response.status(500).json({ error: e.message });
        }
    }
}

export { ListCategoriesController };
