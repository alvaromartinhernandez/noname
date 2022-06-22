import { useMemo } from "react";
//import { category } from "./db";
import { /*Navigate, */ /*Route, Routes,*/ Link } from "react-router-dom";

export const ProductListItem = ({ product }) => {
  const productId = useMemo(() => product, [product]);

  return (
    <>
      <Link to={`/product/${productId}`} key={productId} state={{id: productId}}>
        producto id {productId}
      </Link>
      <button>Add to cart x1</button>
    </>
  );
};

export default ProductListItem;
