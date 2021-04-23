import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import API from "../../contexts/API";

export default function Messages({}) {
  const [wonItems, setWonItems] = useState([]);
  const [soldItems, setSoldItems] = useState([]);
  const { currentUser } = useAuth();
  const id = currentUser.uid;

  useEffect(() => {
    //items that have been won by current user.
    API.getFinishedItem(id)
      .then((response) => {
        console.log(response.data);
        setWonItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    //items that have been sold by the current user.
    API.getSoldItem(id)
    .then((response) => {
      console.log(response.data);
      setSoldItems(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div className="message-div">
      <h2>
        {wonItems.length > 0
          ? `You have won ${wonItems.length} item${
              wonItems.length === 1 ? "" : "s"
            }`
          : ""}
      </h2>
    </div>
  );
}
