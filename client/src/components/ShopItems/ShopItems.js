
import React, { useState } from "react";
import API from "../../contexts/API"

export default function ShopItems () {
  let [responseData, setResponseData] = useState("");
    API.getItems()
      .then((response) => {
        setResponseData(response.data);
        console.log(responseData)
      })
      .catch((error) => {
        console.log(error);
      });

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
                    Contact:{item.contact} for more info
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

