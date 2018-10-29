import { Food as FoodModel, FoodIngredients as FoodIngredientsModel, Ingredient } from 'models';
import food_image from 'images/taco.jpg';

export class FoodData {
    public static generateData(): FoodIngredientsModel[]{
        const foods: FoodIngredientsModel[] = [
            new FoodIngredientsModel({
                food: new FoodModel({ id:1, name: 'Comida 1', description: 'Descripción 1', photo: food_image, price: 40 }),
                ingredients: [
                    new Ingredient({ id: 1, name: 'Ingrediente 1', description: 'Ingrediente, descripción 1' }),
                    new Ingredient({ id: 2, name: 'Ingrediente 2', description: 'Ingrediente, descripción 2'})
                ],
            }),
            new FoodIngredientsModel({
                food: new FoodModel({ id:2, name: 'Comida 2', description: 'Descripción 2', photo: food_image, price: 80 }),
                ingredients: [
                    new Ingredient({ id: 1, name: 'Ingrediente 2', description: 'Ingrediente, descripción 2' }),
                    new Ingredient({ id: 2, name: 'Ingrediente 1', description: 'Ingrediente, descripción 1'})
                ],
            }),
        ]
        return foods; 
    }
}