import { useMemo } from "react";
//import { category } from "./db";
import { /*Navigate, */ /*Route, Routes,*/ Link } from "react-router-dom";

import { getProductById } from "../helpers";

export const ProductListItem = ({ product }) => {
  const productId = product;

  const productMemo = useMemo(() => getProductById(productId), [productId]);
  return (
    <div className="product-list-item">
      <Link className="product-list-item-link" to={`/product/${productId}`} key={productId} state={{id: productId}}>
        {productMemo.name}
      </Link>
      <p className="product-list-item-price">
        {productMemo.price} €
      </p>
      <button className="btn-small btn-primary product-list-add-to-cart">Add to cart x1</button>
    </div>
  );
};

export default ProductListItem;
