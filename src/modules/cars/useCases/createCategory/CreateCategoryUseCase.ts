import { ICategoryRepository } from "../../repositories/ICategorieRepositorie";

interface IRequest {
    name: string;
    description: string;
}
class CreateCategoryUseCase {
    constructor(private categoryRepository: ICategoryRepository) {}

    execute({ description, name }: IRequest): void {
        const categoryAlreadyExists = this.categoryRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category already exist!");
        }

        this.categoryRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };
