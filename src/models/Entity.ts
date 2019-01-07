import { JsonObject, JsonProperty } from "json2typescript";
// tslint:disable:max-classes-per-file

@JsonObject
export class Entity {
  @JsonProperty("id", Number, false)
  public id?: number = undefined;
}