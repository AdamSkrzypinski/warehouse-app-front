import { ProductEntity } from "./product";

export interface PlaceEntity {
  name: string;
  id: string;
}

export interface PlaceEntityWithRelations extends PlaceEntity {
  products: ProductEntity[];
}
