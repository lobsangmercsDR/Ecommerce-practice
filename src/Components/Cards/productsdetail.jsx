import React from "react";
import { useContext } from "react";
import CartContext from "../../Context/context";
import "./productdetails.css";
import { ShoppingCartIcon } from "@heroicons/react/outline"; // Para el icono del carrito con contorno
import { XIcon } from "@heroicons/react/outline"; // Para iconos con contorno
const ProductDetails = () => {
  const context = useContext(CartContext);
  console.log("product to show", context.showProduct);

  return (
    <aside
      className={`${
        context.isProductDetailsOpen ? "flex" : "hidden"
      } product-detail flex  flex-col fixed bg-white right-0 border border-black rounded-lg overflow-auto`}
    >
      <div className="w-auto h-full relative">
        <img className="w-full h-full " src={context.showProduct.image} />
        <div className="absolute top-0 right-0   ">
          <button
            onClick={() => context.setPCount(context.pCount + 1)}
            className=" bg-white hover:bg-green-700 text-white font-bold py-1 px-2 rounded-full shadow transition ease-in-out duration-300 "
          >
            <ShoppingCartIcon className="h-6 w-6 text-black" />
          </button>
          <button
            onClick={context.closeProductsDetails}
            className=" ml-2 mt-2 mr-2 left-20 bg-white hover:bg-red-700 text-white font-bold py-1 px-2 rounded-full shadow transition ease-in-out duration-300 marg"
          >
            <XIcon className="h-6 w-6 text-black" />
          </button>
        </div>
      </div>

      <div className="text-center mt-4 object-cover ">
        <div className="grid grid-cols-2 items-center ">
          <h2 className="text-xl font-bold">{context.showProduct.title}</h2>
          <h2 className=" text-blue-600 text-xl font-bold">
            ${context.showProduct.price}
          </h2>
        </div>

        <p className="mt-2 text-blue-600 text-justify text-sm text-balance">
          {context.showProduct.description}
        </p>
      </div>
    </aside>
  );
};

export default ProductDetails;
