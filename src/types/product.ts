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
