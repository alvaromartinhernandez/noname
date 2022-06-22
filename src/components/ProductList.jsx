import { useMemo } from "react";
//import { category } from "./db";
import { /*Navigate, */ /*Route, Routes,*/ Link } from "react-router-dom";
import { ProductListItem } from "./ProductListItem";

export const ProductList = ({productList}) => {
  const productListMemo = useMemo(() => productList, [productList]);

  return (
    <div className="productListContainer">
      <h2>Productos:</h2>
      {productListMemo != undefined && productListMemo.length > 0 && (
        <ul>
          {productListMemo.map((product) => (
            <ProductListItem product={product} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
