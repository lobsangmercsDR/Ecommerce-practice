import { useState } from "react";

function Account() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-red-100">Account</div>
    </>
  );
}

export default Account;
