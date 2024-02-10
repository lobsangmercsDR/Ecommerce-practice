import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom";
import { useState } from "react";
import HomePage from "../Home";
import Account from "../Account";
import NotFound from "../notFound";
import Order from "../Order/Index";
import Orders from "../Orders";
import Login from "../Signin";
import Navbar from "../../Components";
import { CartProvider } from "../../Context/context";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/Account" element={<Account />}></Route>
            <Route path="/notFound" element={<NotFound />}></Route>
            <Route path="/Order" element={<Order />}></Route>
            <Route path="/Orders" element={<Orders />}></Route>
            <Route path="/Signin" element={<Login />}></Route>
          </Routes>
          <Navbar />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
