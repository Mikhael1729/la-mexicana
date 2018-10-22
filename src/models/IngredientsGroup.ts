import { Ingredient } from './Ingredient';
import { init } from 'helpers/Init';
import { IBaseEntity } from 'models';

export interface IIngredientsGroup extends IBaseEntity {
    title: string;
    ingredients: Ingredient[];
}
export interface IngredientsGroup extends IIngredientsGroup { }

export class IngredientsGroup implements IngredientsGroup{
	constructor(ingredientsGroup: IngredientsGroup) {
        init<IngredientsGroup>(this, ingredientsGroup);
    }
}