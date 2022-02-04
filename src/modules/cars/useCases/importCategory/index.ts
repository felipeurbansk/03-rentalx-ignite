import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

export default (): ImportCategoryController => {
    const importCategorieRepository = new CategoriesRepository();
    const importCategoryUseCase = new ImportCategoryUseCase(
        importCategorieRepository
    );
    const importCategoryController = new ImportCategoryController(
        importCategoryUseCase
    );

    return importCategoryController;
};
