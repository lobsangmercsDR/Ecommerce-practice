import { useState } from "react";

function Orders() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-red-100">Many orders of user</div>
    </>
  );
}

export default Orders;
