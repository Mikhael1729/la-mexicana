import { init } from "helpers/Init";
import { JsonObject, JsonProperty, JsonConvert } from "json2typescript";
import { Entity } from "models/Entity";

@JsonObject
export class TestModel extends Entity {

  @JsonProperty("description", String, false)
  public description?: string = undefined;

  @JsonProperty("name", String, false)
  public namesito?: string = undefined;

  @JsonProperty("photoUrl", String, false)
  public photo?: string = undefined;

  @JsonProperty("price", Number, false)
  public price?: number = undefined;

  constructor(data: TestModel) {
    super();
    init<TestModel>(this, data);
  }
}