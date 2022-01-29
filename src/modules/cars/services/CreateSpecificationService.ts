import { SpecificationsRepository } from "../repositories/SpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}
class CreateSpecificationService {
    constructor(private specificationsRepository: SpecificationsRepository) {}

    execute({ description, name }: IRequest): void {
        const specificationAlreadyExists =
            this.specificationsRepository.findByName(name);

        if (specificationAlreadyExists)
            throw new Error("Specification already exist!");

        this.specificationsRepository.create({ description, name });
    }
}

export { CreateSpecificationService };
