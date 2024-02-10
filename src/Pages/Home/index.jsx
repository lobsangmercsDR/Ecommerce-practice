import { useState, useEffect } from "react";
import { apiUrl } from "../../Components/APIs/fakeAPI";
import React from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Cards/cards";
import ProductDetails from "../../Components/Cards/productsdetail";
function HomePage() {
  const [items, setItems] = useState(null);

  const platziDataAPI = () => {
    return "https://fakestoreapi.com/products";
  };

  useEffect(() => {
    fetch(platziDataAPI())
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.error("Error Fetching data", error);
      });
  }, []);

  return (
    <Layout>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg ">
        {items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <ProductDetails></ProductDetails>
    </Layout>
  );
}

export default HomePage;
