import { PlaceEntity } from "./place";

export interface AreaEntity {
  id: string;
  name: string;
}

export interface AreaEntityWithRelations extends AreaEntity {
  places: PlaceEntity[];
}
