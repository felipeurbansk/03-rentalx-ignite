import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
    handle(request: Request, response: Response): Response {
        const { name, description } = request.body;
        const specificationsUseCase = container.resolve(
            CreateSpecificationUseCase
        );
        specificationsUseCase.execute({
            name,
            description,
        });

        return response.status(201).send();
    }
}

export { CreateSpecificationController };
