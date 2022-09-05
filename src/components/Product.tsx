import { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct;
}

const Product = ({ product }: ProductProps) => {
  const [details, setDetails] = useState(false);
  const btnClassName = details ? "bg-yellow-400" : "bg-blue-400";

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} className="w-1/6" alt={product.title} />
      <p>{product.title}</p>
      <span className="font-bold">{product.price}$</span>
      <button
        className={`py-2 px-4 border ${btnClassName}`}
        onClick={() => setDetails((prev) => !prev)}
      >
        {details ? "Hide Details" : "Show Details"}
      </button>
      {details && (
        <div>
          <p>{product.description}</p>
        </div>
      )}
    </div>
  );
};

export default Product;
