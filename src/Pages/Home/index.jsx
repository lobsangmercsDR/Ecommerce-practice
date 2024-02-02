import { useState, useEffect } from "react";
import { apiUrl } from "../../Components/APIs/fakeAPI";
import React from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Cards/cards";
function HomePage() {
  const [items, setItems] = useState(null);

  const platziDataAPI = () => {
    return "https://api.escuelajs.co/api/v1/products";
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
      Home
      {items?.map(() => (
        <Card />
      ))}
    </Layout>
  );
}

export default HomePage;
