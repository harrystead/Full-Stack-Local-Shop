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
      .get("http://localhost:5000/items")
      .then((response) => {
        this.setState({ displayItems: response.data });
        console.log(this.state.displayItems);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h2>shop items</h2>
        <div className="card-group">
          {this.state.displayItems.map((item, index) => (
            <div class="col-sm-4">
              <div className="card">
                <img className="card-img-top" src={item.selectedPic} alt="error" />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                    {item.description}
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
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
