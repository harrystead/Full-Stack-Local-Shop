import React, { useContext } from "react";
import { useParams } from "react-router";
import { ItemsContext } from "../../contexts/ItemsContext";
import API from "../../contexts/API";
import { useAuth } from "../../contexts/AuthContext";

export default function SingleItem({}) {
  const { id } = useParams();
  const { currentUser } = useAuth();
  const cardInfo = useContext(ItemsContext);
  const singleItem = cardInfo.filter((item) => item._id === id);
  const { _id, ...finalItem } = singleItem[0];
  finalItem.basketId = currentUser.uid;
  console.log(finalItem)
  const addBasket = () => {
    API.postBasket(finalItem)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      {singleItem &&
        singleItem.map((item) => (
          <div className="card">
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
                  <div className="bidding-inputß">
                    <h4>Bid on This Item</h4>
                    <div>
                      <input></input>
                      <button>Submit Bid</button>
                    </div>
                  </div>
                  <h4 className="price">
                    starting price: <span>$ 299</span>
                  </h4>
                  <h4 className="price">
                    current bid: <span>$</span>
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
