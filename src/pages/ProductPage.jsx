import { useMemo } from "react";
//import { category } from "./db";

import { useParams } from "react-router-dom";
import { getProductById } from "../helpers";

export const ProductPage = () => {
  const { id } = useParams();

  const product = useMemo(() => getProductById(id), [id]);
  console.log(product);
  return (
    <div className="product-page-container">
      {product.img != undefined && product.img.length > 1 && (
        <>
          <span>Carrusel</span>
          {product.img.map((imgproduct) => (
            <img className="product-img" width="100%" src={imgproduct}></img>
          ))}
        </>
      )}
      {product.img != undefined && product.img.length == 1 && (
        <img className="product-img" width="100%" src={product.img[0]}></img>
      )}

      <h1 className="product-name center">{product.name}</h1>
      <p className="product-price center">
        {product.price} €
      </p>
      <p className="product-description center">{product.description}</p>
      <div className="center">
        <span> - </span>
        <input type="number"></input>
        <span> + </span>
      </div>
      <div className="add-to-cart-container">
        <button className="btn btn-primary w100 add-to-cart">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
