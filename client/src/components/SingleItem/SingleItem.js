
import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router";
import API from "../../contexts/API";
import { ItemsContext } from "../../contexts/ItemsContext";

export default function SingleItem() {
  const [ item, setItem ] = useState([]);
  const { id } = useParams();
  const cardInfo = useContext(ItemsContext);
  const hello = cardInfo.filter((item) => item._id === id);
  console.log(hello)



  return (
    <div>
      <h3>{hello[0].contact}</h3>
    </div>
  );
}
