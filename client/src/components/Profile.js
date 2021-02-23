import React, { Component } from "react";
import axios from "axios";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.onChangeSelectedProfile = this.onChangeSelectedProfile.bind(this);

    this.state = {
      users: [],
      username: "",
      selectedProfile: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/users/")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map((user) => user.username),
            username: response.data[0].username,
          });
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeSelectedProfile(e) {
    this.setState({
      selectedProfile: e.target.value,
    })
  }

  render() {
    return (
      <div className="seller-div">
        <h3 className="heading-item">Select a Profile</h3>
        <select
          onChange={this.onChangeSelectedProfile}
          className="form-select-profile"
          aria-label="Default select example"
        >
          <option defaultValue>select from menu</option>
          {this.state.users.map(function (user) {
            return (
              <option key={user} value={user}>
                {user}
              </option>
            );
          })}
        </select>
        <div>
          <h2>{this.state.selectedProfile}</h2>
        </div>
      </div>
    );
  }
}

export default Profile;
