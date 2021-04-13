import React, { useEffect } from "react";
import API from "../../contexts/API";

export default function Basket() {
  useEffect(() => {
    API.getBasket()
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div>
        <h2>Shopping Basket</h2>
      </div>
    </div>
  );
}
