import { useMemo } from "react";
//import { category } from "./db";

import { useParams } from "react-router-dom";
import { getProductById } from "../helpers";

export const ProductPage = () => {
  const { id } = useParams();

  const product = useMemo(() => getProductById(id), [id]);
  console.log(product);
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {product.img != undefined && product.img.length > 1 && (
        <>
        <span>Carrusel</span>
         {product.img.map((imgproduct) => (
            <img width="100%" src={imgproduct}></img>
         ))}
         </>
      )}
      {product.img != undefined && product.img.length == 1 && (
        <img width="100%" src={product.img[0]}></img>
      )}

      <h1>{product.name}</h1>
      <p>
        <strong>{product.price}</strong>
      </p>
      <p>{product.description}</p>
      <div>
        <span> - </span>
        <input type="number"></input>
        <span> + </span>
      </div>
      <button>ADD TO CART</button>
    </div>
  );
};

export default ProductPage;
