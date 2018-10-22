import { IBaseEntity } from "./IBaseEntity";
import { Food } from "./Food";
import { Ingredient } from "./Ingredient";
import { IngredientsGroup } from "./IngredientsGroup";
import { init } from "helpers/Init";

export interface IFoodIngredients extends IBaseEntity{
    food: Food
    ingredients: Ingredient[];
    ingredientsGroups: IngredientsGroup[];
}
export interface FoodIngredients extends IFoodIngredients { }

export class FoodIngredients implements FoodIngredients {
    public constructor(foodIngredients: IFoodIngredients) {
        init<IFoodIngredients>(this, foodIngredients);
    }
} 