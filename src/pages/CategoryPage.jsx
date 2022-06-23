import { useMemo } from "react";
//import { category } from "./db";

import { useLocation } from "react-router";
import { /*Navigate, */ /*Route, Routes,*/ Link } from "react-router-dom";
import { ProductList } from "../components/ProductList";

import { useParams } from "react-router-dom";
import { getCategoryById } from "../helpers";

interface TestProps {
  categoryListProps?: string;
}

export const CategoryPage = ({ categoryListProps = {} }: TestProps) => {
  let data = useLocation();
  const { id } = useParams();
  const category = useMemo(() => getCategoryById(id), [id]);
  console.log(category);
  const categoryListParam = data?.state?.categoryListParam;
  const productListParam = data?.state?.productListParam;

  const categoryList =
    categoryListParam == undefined ||
    Object.keys(categoryListParam).length === 0
      ? categoryListProps
      : data.state.categoryListParam;

  const categoryListMemo = useMemo(() => categoryList, [categoryList]);

  return (
    <div className="category-list-container">
      {category && <h1 className="description-title center">{category.name}</h1>}
      {categoryListMemo != undefined && categoryListMemo.length > 0 && (
        <div className="category-list-content">
          {categoryListMemo.map((category) => (
            <div className="category-list-item">
              <Link
                to={`/category/${category.id}`}
                key={category.id}
                state={{
                  categoryListParam: category.subcategory,
                  productListParam: category.products,
                }}
              >
                {category.name}
              </Link>
              <p className="category-description">{category.description}</p>
            </div>
          ))}
        </div>
      )}
      {productListParam != undefined && productListParam.length > 0 && (
        <ProductList productList={productListParam} />
      )}
    </div>
  );
};

export default CategoryPage;
