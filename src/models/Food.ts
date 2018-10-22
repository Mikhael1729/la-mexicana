import { IBaseEntity } from './IBaseEntity';
import { Ingredient } from './Ingredient';
import { IngredientsGroup } from './IngredientsGroup';
import { init } from 'helpers/Init';

export interface IFood extends IBaseEntity {
	name: string;
	description: string;
	price: number;
	photo: any;
}
export interface Food extends IFood { }

export class Food implements Food {
	public constructor(food: IFood) {
        init<IFood>(this, food);
    }
}
