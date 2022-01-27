import { Category } from "../model/Category";
import {
    ICategoryRepository,
    ICreateCategoryDTO,
} from "./ICategorieRepositorie";

class PostgresCategoriesRepository implements ICategoryRepository {
    findByName(name: string): Category {
        console.log(`[Postgres] Buscando pela categoria ${name}`);
        return null;
    }
    list(): Category[] {
        console.log("[Postgres] Listagem de categorias");
        return null;
    }
    create({ name, description }: ICreateCategoryDTO) {
        console.log(`[Postgres] Criação de usuário ${name} - ${description}`);
        return null;
    }
}

export { PostgresCategoriesRepository };
