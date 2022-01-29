import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (req, res) => {
    const { name, description } = req.body;

    const createSpecificationService = new CreateSpecificationService(
        specificationsRepository
    );

    createSpecificationService.execute({ description, name });

    return res.status(201).send();
});

specificationsRoutes.get("/", (req, res) => {
    const specifications = specificationsRepository.list();
    return res.status(200).json(specifications);
});

export { specificationsRoutes };
