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
        <div>
          {this.state.displayItems.map((item, index) => (
            <p>
                {item.name} {item.category}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default ShopItems;
