import { JsonConvert } from "json2typescript";
import { Entity } from "models";

export class EntityConverter {
  protected static converter: any = new JsonConvert();

  public static ConvertJsonArray = (data: object[], Clazz: any): Entity[] => 
    EntityConverter.converter.deserializeArray(data, Clazz)
  
  public static ConvertJson = (data: object, Clazz: any): Entity => 
    EntityConverter.converter.deserialize(data, Clazz);
}