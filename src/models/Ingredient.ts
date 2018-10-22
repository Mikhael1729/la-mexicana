import { IBaseEntity } from './IBaseEntity';
import { init } from 'helpers/Init';

export interface IIngredient extends IBaseEntity{
    name: string;
    photo?: any;
    description?: string;
}
export interface Ingredient extends IIngredient { }

export class Ingredient implements Ingredient {
	constructor(ingredient: Ingredient) {
        init<Ingredient>(this, ingredient);
    }
}