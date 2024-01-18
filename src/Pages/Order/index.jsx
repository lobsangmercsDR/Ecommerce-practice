import { useState } from "react";

function order() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-red-100">1 order of the user</div>
    </>
  );
}

export default order;
