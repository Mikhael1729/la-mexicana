import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject
export class Entity {
  @JsonProperty("id", Number, false)
  public id?: number = undefined;
}