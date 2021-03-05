/* eslint-disable no-octal-escape */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";

export default function ShopItems () {
  let [responseData, setResponseData] = useState("");
  const fetchData = React.useCallback(() => {
    axios
      .get(`/items/`)
      .then((response) => {
        setResponseData(response.data);
        console.log(responseData)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

    return (
      <div>
        <h2 class="heading-allitems">All Items</h2>
        <div className="card-group">
          {responseData && responseData.map((item, index) => (
            <div className="col-sm-3">
              <div className="card">
                <img className="card-img-top"src={"/" + item.selectedPic} alt="error" />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                    <small className="text-muted">
                    Contact: {item.contact} for more info
                    </small>
                  </p>
                  <p className="card-text-three">
                    {item.category  + " | " + item.date + " | " + item.quality}
                  </p>
                  <p className="card-text-price">
                    {"£" + item.price}
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                    Date Posted: {item.createdAt.slice(0, 10)}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

