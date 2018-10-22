import { Ingredient } from './Ingredient';
import { init } from 'helpers/Init';

export interface IIngredientsGroup {
    id? : number;
    title? : string;
    ingredients? : Ingredient[];
}
export interface IngredientsGroup extends IIngredientsGroup { }

export class IngredientsGroup implements IngredientsGroup{
	constructor(ingredientsGroup: IngredientsGroup) {
        init<IngredientsGroup>(this, ingredientsGroup);
    }
}