import { useMemo } from "react";
//import { category } from "./db";

import { useLocation } from "react-router";
import { /*Navigate, */ /*Route, Routes,*/ Link } from "react-router-dom";
import {ProductList} from "../components/ProductList"

interface TestProps {
  categoryListProps?: string;
}

export const CategoryPage = ({ categoryListProps = {} }: TestProps) => {
  let data = useLocation();
  const categoryListParam = data?.state?.categoryListParam;
  const productListParam = data?.state?.productListParam;
  
  const categoryList =
    categoryListParam == undefined ||
    Object.keys(categoryListParam).length === 0
      ? categoryListProps
      : data.state.categoryListParam;

  const categoryListMemo = useMemo(() => categoryList, [categoryList]);
  
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {categoryListMemo != undefined && categoryListMemo.length > 0 && (
        <>
          <h2>Categorias:</h2>
          <ul>
            {categoryListMemo.map((category) => (
              <li>
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
              </li>
            ))}
          </ul>
        </>
      )}
      {productListParam != undefined && productListParam.length > 0 && (
        <ProductList productList={productListParam}/>
      )}
    </div>
  );
};

export default CategoryPage;
