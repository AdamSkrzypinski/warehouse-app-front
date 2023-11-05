export interface ProductEntity {
  id: string;
  name: string;
  count: number;
  measure: string;
  createdAt: Date;
}

export interface ProductEntityWithRelations extends ProductEntity {
  productArea: string;
  productPlace: string;
}

export interface CreateProductDto {
  name: string;
  count: number | "";
  measure: string;
}

export interface UpdateProductDto {
  id: string;
  name: string;
  count: number | '';
  measure: string;
  productAreaId: string;
  productPlaceId: string;
}