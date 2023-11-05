import { apiUrl } from "../config/api";
import { ProductEntity } from "../types/product";

export const getProduct = async (id: string): Promise<ProductEntity> => {
  const res = await fetch(`${apiUrl}/product/${id}`);
  return await res.json();
};
