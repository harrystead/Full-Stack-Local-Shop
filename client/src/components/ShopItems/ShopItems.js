import React, { useContext, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ItemsContext } from "../../contexts/ItemsContext";
import { DropdownButton, Dropdown, Form } from "react-bootstrap";

export default function ShopItems({ listData }) {
  const [category, setCategory] = useState("");
  const [quality, setQuality] = useState("");
  const propertyInfo = useContext(ItemsContext);

  const filterCategory = (event) => {
    setCategory(event.target.value);
  };

  const filterQuality = (event) => [setQuality(event.target.value)];

  let hello = listData.filter((item) => {
    if (category && category !== "View All") {
      return item.category === category;
    } else if (quality && quality !== "View All") {
      return item.quality === quality;
    }
    return item;
  });

  return (
    <div className="row">
      <div className="col-sm-2">
        <h4>Filters</h4>
        <div className="category-filter">
          <Form.Control
            className="form-options"
            onChange={filterCategory}
            as="select"
          >
            <option defaultValue>View All</option>
            <option>Furniture</option>
            <option>Antiques</option>
            <option>Toys</option>
            <option>Books | CDs | DVDs</option>
            <option>Clothing</option>
            <option>Ornaments</option>
            <option>Jewellery</option>
            <option>Other</option>
          </Form.Control>
        </div>
        <div className="quality-filter">
          <Form.Control
            className="form-options"
            onChange={filterQuality}
            as="select"
          >
            <option defaultValue>View All</option>
            <option>Excellent Condition</option>
            <option>Good Condition</option>
            <option>Fair Condition</option>
            <option>Poor Condition</option>
          </Form.Control>
        </div>
        <div className="price-filter">
          <input min={0} max={200} value={0} type="range" />
        </div>
        <div>
          <h4>Latest Item</h4>
        </div>
      </div>
      <div className="col-sm-10">
        <div className="card-group">
          {hello &&
            hello.map((item) => (
              <div className="col-sm-3">
                <Link to={"/" + item._id}>
                  <div className="card-home">
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
                        {item.category +
                          " | " +
                          item.date +
                          " | " +
                          item.quality}
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
    </div>
  );
}
