import React, {useContext} from "react";
import { useParams } from "react-router";
import { ItemsContext } from "../../contexts/ItemsContext";
import axios from "axios";

export default function SingleItem({ }) {
  const { id } = useParams();
  const cardInfo = useContext(ItemsContext);
  const singleItem = cardInfo.filter((item) => item._id === id);

  const addBasket = () => {

    axios
    .post("/basket/add", singleItem[0])
    .then((res) => {
      console.log(res)
    })
    .catch((error) => {
      console.log(error);
    });
  }

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
                    <div className="tab-pane" id="pic-2">
                      <img src="https://d.ibtimes.co.uk/en/full/1519347/lionel-messi.jpg?w=400" />
                    </div>
                    <div className="tab-pane" id="pic-3">
                      <img src="https://d.ibtimes.co.uk/en/full/1519347/lionel-messi.jpg?w=400" />
                    </div>
                    <div className="tab-pane" id="pic-4">
                      <img src="https://d.ibtimes.co.uk/en/full/1519347/lionel-messi.jpg?w=400" />
                    </div>
                    <div className="tab-pane" id="pic-5">
                      <img src="https://d.ibtimes.co.uk/en/full/1519347/lionel-messi.jpg?w=400" />
                    </div>
                  </div>
                  <ul className="preview-thumbnail nav nav-tabs">
                    <li className="active">
                      <a data-target="#pic-1" data-toggle="tab">
                        <img src="https://d.ibtimes.co.uk/en/full/1519347/lionel-messi.jpg?w=400" />
                      </a>
                    </li>
                    <li>
                      <a data-target="#pic-2" data-toggle="tab">
                        <img src="https://d.ibtimes.co.uk/en/full/1519347/lionel-messi.jpg?w=400" />
                      </a>
                    </li>
                    <li>
                      <a data-target="#pic-3" data-toggle="tab">
                        <img src="https://d.ibtimes.co.uk/en/full/1519347/lionel-messi.jpg?w=400" />
                      </a>
                    </li>
                    <li>
                      <a data-target="#pic-4" data-toggle="tab">
                        <img src="https://d.ibtimes.co.uk/en/full/1519347/lionel-messi.jpg?w=400" />
                      </a>
                    </li>
                    <li>
                      <a data-target="#pic-5" data-toggle="tab">
                        <img src="https://d.ibtimes.co.uk/en/full/1519347/lionel-messi.jpg?w=400" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="details col-md-6">
                  <h3 className="product-title">{item.name}</h3>
                  <div className="rating">
                    <div className="stars">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                    </div>
                    <span className="review-no">41 reviews</span>
                  </div>
                  <p className="product-description">{item.description}</p>
                  <h4 className="price">
                    current price: <span>$ 299</span>
                  </h4>
                  <p className="vote">
                    <strong>91%</strong> of buyers enjoyed this product!{" "}
                    <strong>(87 votes)</strong>
                  </p>
                  <div className="action">
                    <button onClick={addBasket} className="add-to-cart btn-default" type="button">
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
