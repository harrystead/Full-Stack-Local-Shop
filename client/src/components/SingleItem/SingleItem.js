import React, { useContext, useRef, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ItemsContext } from "../../contexts/ItemsContext";
import { Form, Button, Alert } from "react-bootstrap";
import API from "../../contexts/API";
import Timer from "../Timer/Timer"

export default function SingleItem({setRequest}) {
  const { id } = useParams();
  const [bidData, setBidData] = useState("");
  const [success, setSuccess] = useState("");
  const [ error, setError ] = useState("");
  
  const cardInfo = useContext(ItemsContext)
  const singleItem = cardInfo.filter((item) => item._id === id);
  const addBasket = () => {
    localStorage.setItem(singleItem[0]._id, JSON.stringify(singleItem));
    setSuccess(`Successfully added ${singleItem[0].name} to basket.`);
  };

  const bidChange = (e) => {
    setBidData(e.target.value)
  }

  const bidClick = (e) => {
    e.preventDefault();
    API.updateItem(singleItem[0]._id, {bid: bidData})
    .then((response) => console.log(response.data),
    setRequest("success"))
    .catch((error) => console.log(error))
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccess("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [success]);

  return (
    <div className="container">
      {success && <Alert variant="success">{success}</Alert>}
      {singleItem &&
        singleItem.map((item) => (
          <div key={item._id} className="card">
            <div className="container-fliud">
              <div className="wrapper row">
                <div className="preview col-md-6">
                  <div className="preview-pic tab-content">
                    <div className="tab-pane active" id="pic-1">
                      <img src={item.selectedPic} />
                    </div>
                  </div>
                </div>
                <div className="details col-md-6">
                  <h3 className="product-title">{item.name}</h3>
                  <p className="product-description">{item.description}</p>
                    <Timer dateBid={singleItem[0].endDate}/>
                  <div className="bidding-inputß">
                    <h4>Bid on This Item</h4>
                    <div>
                      <Form onSubmit={bidClick} encType="multipart/form-data">
                        <Form.Control type="Input" onChange={bidChange} value={bidData} required />
                        <Button type="submit">Submit Bid</Button>
                      </Form>
                    </div>
                  </div>
                  <h4 className="price">
                    starting price: <span>${item.price}</span>
                  </h4>
                  <h4 className="price">
                    current bid:{" "}
                    <span>
                      ${item.bid.length > 0 ? Object.values(item.bid[item.bid.length - 1]) : 0}
                    </span>
                  </h4>
                  <div className="action">
                    <button
                      onClick={addBasket}
                      className="add-to-cart btn-default"
                      type="button"
                    >
                      add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
