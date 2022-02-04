import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../../repositories/ICategorieRepositorie";

class ListCategoriesUseCase {
    constructor(private categoriesRepository: ICategoryRepository) {}

    async execute(): Promise<Category[]> {
        const categories = await this.categoriesRepository.list();

        return categories;
    }
}

export { ListCategoriesUseCase };
