import { ICategoryRepository } from "../repositories/ICategorieRepositorie";

interface IRequest {
    name: string;
    description: string;
}
class CreateCategoryService {
    constructor(private categoriesRepository: ICategoryRepository) {}

    execute({ description, name }: IRequest): void {
        const categoryAlreadyExists =
            this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category already exist!");
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryService };
