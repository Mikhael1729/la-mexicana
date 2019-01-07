import { Entity } from 'models/Entity';
import { JsonConvert, JsonCustomConvert, JsonConverter } from 'json2typescript';
import { TestModel } from './TestModel';
// tslint:disable:no-string-literal

@JsonConverter
export class TestConverter implements JsonCustomConvert<Entity[]> {

  public serialize(data: Entity[]): any {
    const converter = new JsonConvert();
    console.log(data);
    return converter.serialize(data);
  }
  public deserialize(data: any): Entity[] {
    const converter: any = new JsonConvert();

    const entities = new Array<Entity>();
    console.log(data);

    for (const entity of data) {
      console.log(entity);

      const temp: Entity = converter.deserialize(entity, TestModel);
      entities.push(temp);
    }

    return entities;
  }

}