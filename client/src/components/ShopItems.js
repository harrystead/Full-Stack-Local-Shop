/* eslint-disable no-octal-escape */
import React, { Component } from "react";
import axios from "axios";

class ShopItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayItems: [],
    };
  }
  componentDidMount() {
    axios
      .get("/items/")
      .then((response) => {
        this.setState({ displayItems: response.data });
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h2 class="heading-allitems">All Items</h2>
        <div className="card-group">
          {this.state.displayItems.map((item, index) => (
            <div className="col-sm-3">
              <div className="card">
                <img className="card-img-top"src={"/" + item.selectedPic} alt="error" />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                    <small className="text-muted">
                    Ad by {item.author}
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
}

export default ShopItems;
