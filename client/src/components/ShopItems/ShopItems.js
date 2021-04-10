import React, { useState, useEffect } from "react";
import API from "../../contexts/API";
import { Link } from "react-router-dom";

export default function ShopItems() {
  let [responseData, setResponseData] = useState("");

  useEffect(() => {
    API.getItems()
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2 className="heading-allitems">All Items</h2>
      <div className="card-group">
        {responseData &&
          responseData.map((item) => (
            <div className="col-sm-3">
              <Link to="/login">
              <div className="card">
                <img
                  className="card-img-top"
                  src={"/" + item.selectedPic}
                  alt="error"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                    <small className="text-muted">
                      Contact:{item.contact} for more info
                    </small>
                  </p>
                  <p className="card-text-three">
                    {item.category + " | " + item.date + " | " + item.quality}
                  </p>
                  <p className="card-text-price">{"£" + item.price}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      Date Posted: {item.createdAt.slice(0, 10)}
                    </small>
                  </p>
                </div>
              </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
