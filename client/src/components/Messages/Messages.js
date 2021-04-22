import React, { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import API from "../../contexts/API";

export default function Messages() {
  const { currentUser } = useAuth();
  const id = currentUser;
  useEffect(() => {
    API.getFinishedItem({id})
      .then((response) => {
          console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //if(currentUser === bid.user){
  //get-request
  //}

  return <div></div>;
}
