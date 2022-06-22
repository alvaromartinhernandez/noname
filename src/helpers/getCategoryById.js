import { category } from "../db";

export const getCategoryById = (id) => {
  return category.find((category) => category.id == id);
};
