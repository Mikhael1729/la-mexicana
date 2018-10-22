import { IBaseEntity } from "./IBaseEntity";
import { Food } from "./Food";
import { Ingredient } from "./Ingredient";
import { IngredientsGroup } from "./IngredientsGroup";

export interface IFoodIngredients extends IBaseEntity{
    food: Food
    ingredients: Ingredient[];
    ingredientsGroup: IngredientsGroup[];
}

