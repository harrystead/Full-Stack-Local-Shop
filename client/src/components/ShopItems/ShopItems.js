import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ItemsContext } from "../../contexts/ItemsContext";
import { Form } from "react-bootstrap";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

export default function ShopItems({setRequest}) {
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
  let filteredData = propertyInfo
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
      } 
      else if (searchVal){
        return item.name.toLowerCase().includes(searchVal.toLowerCase());
      }
      else if (qualCondition) {
        return item.quality === quality;
      } else if (priceSlider) {
        return item.price > priceSlider[0] && item.price < priceSlider[1];
      }
      return item;
    });

  return (
    <div className="row">
      <div className="col-sm-2">
        <h4>Filters</h4>
        <div>
          <h6>Search</h6>
          <Form.Control type="Input" value={searchVal} onChange={onChangeSearch}/>
        </div>
        <div className="category-filter">
          <h6>Filter by Category</h6>
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
        <h6>Filter by Quality</h6>
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
          <h4>Price</h4>
          <div>
            <p>Price Range</p>
          </div>
          <Range
            marks={{
              100: `$100`,
              500: `$500`,
            }}
            min={0}
            max={500}
            defaultValue={[0, 500]}
            tipFormatter={(value) => `$ ${value}`}
            tipProps={{
              placement: "top",
              visible: true,
            }}
            onChange={onChangeRange}
          />
        </div>
        <div>
          <h4>Latest Item</h4>
        </div>
      </div>
      <div className="col-sm-10">
        <div className="card-group">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div key={item._id} className="col-sm-3">
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
                          Contact: {item.contact} for more info
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
                          {/* Date Posted: {item.createdAt.slice(0, 10)} */}
                        </small>
                      </p>
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
