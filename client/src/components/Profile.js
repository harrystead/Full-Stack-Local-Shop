import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            users: [],
            username: '',
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/')
          .then(response => {
            if (response.data.length > 0) {
              this.setState({
                users: response.data.map(user => user.username),
                username: response.data[0].username
              });
              console.log(response.data)
            }
          })
          .catch((error) => {
            console.log(error);
          })
      }

  render() {
    return (
      <div className="seller-div">
        <h3 className="heading-item">Select a Seller</h3>
          <select className="form-select-profile" aria-label="Default select example">
            <option defaultValue>select from menu</option>
            {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        <div>
          <button>
            <Link to="/user" className="nav-link">
              Create Seller
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Profile;
