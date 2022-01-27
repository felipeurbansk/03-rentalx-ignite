import { Category } from "../model/Category";
import {
    ICategoryRepository,
    ICreateCategoryDTO,
} from "./ICategorieRepositorie";

class MysqlCategoriesRepository implements ICategoryRepository {
    findByName(name: string): Category {
        console.log(`[MYSQL] Buscando pela categoria ${name}`);
        return null;
    }
    list(): Category[] {
        console.log("[MYSQL] Listagem de categorias");
        return null;
    }
    create({ name, description }: ICreateCategoryDTO) {
        console.log(`[MYSQL] Criação de usuário ${name} - ${description}`);
        return null;
    }
}

export { MysqlCategoriesRepository };
