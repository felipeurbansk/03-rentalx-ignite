import { inject, injectable } from "tsyringe";

import { ICategoryRepository } from "../../repositories/ICategorieRepositorie";

interface IRequest {
    name: string;
    description: string;
}
@injectable()
class CreateCategoryUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoryRepository: ICategoryRepository
    ) {}

    async execute({ description, name }: IRequest): Promise<void> {
        const categoryAlreadyExists = await this.categoryRepository.findByName(
            name
        );
        console.log({ categoryAlreadyExists });

        if (categoryAlreadyExists) {
            throw new Error("Category already exist!");
        }

        await this.categoryRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };
