import { JsonObject, JsonProperty, JsonConvert } from "json2typescript";

@JsonObject
export class Entity {
  @JsonProperty("id", Number, false)
  public id?: number = undefined;
}