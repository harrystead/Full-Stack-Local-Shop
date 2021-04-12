import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { ItemsContext } from "../../contexts/ItemsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart
} from "@fortawesome/free-solid-svg-icons";

export default function SingleItem() {
  const [item, setItem] = useState([]);
  const { id } = useParams();
  const cardInfo = useContext(ItemsContext);
  const items = cardInfo.filter((item) => item._id === id);
  console.log(items);

  return (
    <div class="container">
      {items &&
        items.map((item) => (
          <div class="card">
            <div class="container-fliud">
              <div class="wrapper row">
                <div class="preview col-md-6">
                  <div class="preview-pic tab-content">
                    <div class="tab-pane active" id="pic-1">
                      <img src={item.selectedPic} />
                    </div>
                    <div class="tab-pane" id="pic-2">
                      <img src="https://d.ibtimes.co.uk/en/full/1519347/lionel-messi.jpg?w=400" />
                    </div>
                    <div class="tab-pane" id="pic-3">
                      <img src="https://d.ibtimes.co.uk/en/full/1519347/lionel-messi.jpg?w=400" />
                    </div>
                    <div class="tab-pane" id="pic-4">
                      <img src="https://d.ibtimes.co.uk/en/full/1519347/lionel-messi.jpg?w=400" />
                    </div>
                    <div class="tab-pane" id="pic-5">
                      <img src="https://d.ibtimes.co.uk/en/full/1519347/lionel-messi.jpg?w=400" />
                    </div>
                  </div>
                  <ul class="preview-thumbnail nav nav-tabs">
                    <li class="active">
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
                <div class="details col-md-6">
                  <h3 class="product-title">{item.name}</h3>
                  <div class="rating">
                    <div class="stars">
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                    </div>
                    <span class="review-no">41 reviews</span>
                  </div>
                  <p class="product-description">{item.description}</p>
                  <h4 class="price">
                    current price: <span>$ 299</span>
                  </h4>
                  <p class="vote">
                    <strong>91%</strong> of buyers enjoyed this product!{" "}
                    <strong>(87 votes)</strong>
                  </p>
                  <div class="action">
                    <button class="add-to-cart btn btn-default" type="button">
                      add to cart
                    </button>
                    <button class="like btn btn-default" type="button">
                      <span>
                        {" "}
                        <FontAwesomeIcon icon={faHeart} />
                      </span>
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
