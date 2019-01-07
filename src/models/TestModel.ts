import { init } from "helpers/Init";
import { JsonObject, JsonProperty } from "json2typescript";
import { Entity } from "models/Entity";

@JsonObject
export class TestModel extends Entity {
  public static type = "TestModel";

  @JsonProperty("description", String, false)
  public description?: string = undefined;

  @JsonProperty("name", String, false)
  public namesito?: string = undefined;

  @JsonProperty("photoUrl", String, false)
  public photo?: string = undefined;

  @JsonProperty("price", Number, false)
  public price?: number = undefined;

  public constructor(id: number, description: string, namesito: string, photo: string, price: number) {
    super();
    
    this.id = id;
    this.description = description;
    this.namesito = namesito;
    this.photo = photo;
    this.price = price;
  }
}