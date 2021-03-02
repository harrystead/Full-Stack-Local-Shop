import React, { Component } from 'react';
import axios from 'axios';

class EditItem extends Component {
    constructor(){
        super()
    this.state = {
        items: "",
    }
    }
    componentDidMount(){
        axios
        .get("/items/I5ZhY77iM3Sq58yJCky2qvAjo2v1")
        .then((response) => {
          this.setState({ items: response.data });
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error);
        });
    }
    render() {
        return (
            <div>
                <h2>{this.state.items.category}</h2>
            </div>
        );
    }
}

export default EditItem;