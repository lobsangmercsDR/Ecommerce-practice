import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [pCount, setPCount] = useState(0);
  const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false);

  const openProductsDetails = () => setIsProductDetailsOpen(true);
  const closeProductsDetails = () => setIsProductDetailsOpen(false);

  const [showProduct, setShowProduct] = useState({});

  return (
    <CartContext.Provider
      value={{
        pCount,
        setPCount,
        isProductDetailsOpen,
        openProductsDetails,
        closeProductsDetails,
        showProduct,
        setShowProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
