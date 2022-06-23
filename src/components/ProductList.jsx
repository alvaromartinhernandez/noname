import { useMemo } from "react";
//import { category } from "./db";
import { /*Navigate, */ /*Route, Routes,*/ Link } from "react-router-dom";
import { ProductListItem } from "./ProductListItem";

export const ProductList = ({productList}) => {
  const productListMemo = useMemo(() => productList, [productList]);

  return (
    <div className="product-list-container">
      <h2 className="product-list-title">Productos:</h2>
      {productListMemo != undefined && productListMemo.length > 0 && (
        <div className="product-list-content">
          {productListMemo.map((product) => (
            <ProductListItem product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
