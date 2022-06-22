import { product } from "../db";

export const getProductById = (id) => {
  return product.find((product) => product.id == id);
};
