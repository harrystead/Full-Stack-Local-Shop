import React, { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import API from "../../contexts/API";

export default function Messages({}) {
  const { currentUser } = useAuth();
  const id = currentUser.uid;

  useEffect(() => {
    //items that have been won by current user.
    API.getFinishedItem(id)
      .then((response) => {
          console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });

      //items that have been sold by the current user.

      
  }, []);


  return <div></div>;
}
