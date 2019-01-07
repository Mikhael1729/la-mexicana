import { JsonObject, JsonProperty } from "json2typescript";
import { TestConverter } from "./TestConverter";
// tslint:disable:max-classes-per-file

@JsonObject
export class Entities {
  @JsonProperty("value", TestConverter)
  public entities: Entity[] = [];
}

@JsonObject
export class Entity {
  @JsonProperty("id", Number, false)
  public id?: number = undefined;
}