import { useState } from "react";

function notFound() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-red-100">Not found</div>
    </>
  );
}

export default notFound;
