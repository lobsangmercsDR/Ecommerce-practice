import { useState } from "react";
import Layout from "../../Components/Layout";
function Orders() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Layout>Orders</Layout>
    </>
  );
}

export default Orders;
