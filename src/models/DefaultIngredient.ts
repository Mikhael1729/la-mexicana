import { IBaseEntity } from "./IBaseEntity";
import { Food, Ingredient } from "models";
import { init } from "helpers/Init";

export interface IDefaultIngredient extends IBaseEntity {
    foodId: number;
    food: Food
    ingredientId: number;
    ingredient: Ingredient;
}

export interface DefaultIngredient extends IDefaultIngredient { }

export class DefaultIngredient implements DefaultIngredient {
    constructor(selectedFoodIngredients: DefaultIngredient) 
    {
        init<DefaultIngredient>(this, selectedFoodIngredients);
    }
}