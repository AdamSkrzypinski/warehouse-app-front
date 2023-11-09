import { ProductEntity } from "./product";
import { AreaEntity } from "./area";

export interface PlaceEntity {
  name: string;
  id: string;
}

export interface PlaceEntityWithRelations extends PlaceEntity {
  products: ProductEntity[];
  placeArea: AreaEntity;
}
