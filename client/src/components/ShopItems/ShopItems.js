import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ItemsContext } from "../../contexts/ItemsContext";
import { Form } from "react-bootstrap";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

export default function ShopItems({ setRequest }) {
  const [category, setCategory] = useState("");
  const [quality, setQuality] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const [priceSlider, setPriceSlider] = useState([0, 500]);
  const propertyInfo = useContext(ItemsContext);

  const onChangeSearch = (event) => {
    setSearchVal(event.target.value);
  };

  const filterCategory = (event) => {
    setCategory(event.target.value);
  };

  const filterQuality = (event) => [setQuality(event.target.value)];

  const onChangeRange = (value) => {
    setPriceSlider(value);
  };

  const catCondition = category && category !== "View All";
  const qualCondition = quality && quality !== "View All";
  const allConditions =
    category &&
    quality &&
    priceSlider &&
    quality !== "View All" &&
    category !== "View All" &&
    searchVal;
  let filteredData = propertyInfo.reverse()
    .map((info) => info)
    .filter((item) => {
      if (allConditions) {
        return (
          item.category === category &&
          item.quality === quality &&
          item.price > priceSlider[0] &&
          item.price < priceSlider[1] &&
          item.name.toLowerCase().includes(searchVal.toLowerCase())
        );
      } else if (catCondition) {
        return item.category === category;
      } else if (searchVal) {
        return item.name.toLowerCase().includes(searchVal.toLowerCase());
      } else if (qualCondition) {
        return item.quality === quality;
      } else if (priceSlider) {
        return item.price > priceSlider[0] && item.price < priceSlider[1];
      }
      return item;
    });

  return (
    <div className="row">
      <div className="col-sm-2 sidebar-filters">
        <h5>{filteredData.length} Products</h5>
        <hr></hr>
        <div>
          <h6>Search</h6>
          <Form.Control
            type="Input"
            value={searchVal}
            onChange={onChangeSearch}
          />
        </div>
        <div className="category-filter">
          <h6>Category</h6>
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
          <h6>Quality</h6>
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
            <h6 className="price-heading">Price Range</h6>
          <Range
            marks={{
              0: '0',
              500: `$500`,
              1000: '$1000'
            }}
            min={0}
            max={1000}
            defaultValue={[0, 1000]}
            tipFormatter={(value) => `$${value}`}
            tipProps={{
              placement: "top",
              visible: true,
            }}
            onChange={onChangeRange}
          />
        </div>
        <div>
          {/* <h4>Latest Item</h4> */}
        </div>
      </div>
      <div className="col-sm-9">
        <h2 className="shop-items-heading">Shop Items</h2>
        <div className="card-group">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div key={item._id} className="col-sm-4 content">
                <Link to={"/" + item._id} className="link-single" style={{ textDecoration: 'none' }}>
                  <div className="card-home">
                    <img
                      className="card-img-top"
                      src={"/" + item.selectedPic}
                      alt="error"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text-three"><small>
                        {item.category +
                          " | " +
                          item.date +
                          " | " +
                          item.quality}
                          </small>
                      </p>
                      <p className="card-text-price">{"£" + item.price}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <h3>No products available</h3>
          )}
        </div>
      </div>

    </div>
  );
}
