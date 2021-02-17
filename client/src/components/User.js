import React, { Component } from "react";

class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeFull = this.onChangeFull.bind(this);
        this.onChangeUser = this.onChangeUser.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeCounty = this.onChangeCounty.bind(this);
        this.onChangePost = this.onChangePost.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            fullname: "",
            username: "",
            email: "",
            city: "",
            county: "",
            postcode: "",
            number: null
        }
    }

    onChangeFull(e){
        this.setState({
            fullname: e.target.value,
        });
    }

    onChangeUser(e){
        this.setState({
            username: e.target.value,
        });
    }

    onChangeEmail(e){
        this.setState({
            email: e.target.value,
        });
    }

    onChangeCity(e){
        this.setState({
            city: e.target.value,
        });
    }

    onChangeCounty(e){
        this.setState({
            county: e.target.value,
        });
    }

    onChangePost(e){
        this.setState({
            postcode: e.target.value,
        });
    }

    onChangePhone(e){
        this.setState({
            number: e.target.value,
        });
    }

    onSubmit(e){
        e.preventDefault();

        const user = {
            fullname: this.state.fullname,
            username: this.state.username,
            email: this.state.email,
            city: this.state.city,
            county: this.state.county,
            postcode: this.state.postcode,
            number: this.state.number
        }

        console.log(user)
    }
    
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h2>Create A User</h2>
        <div className="form-row align-items-center">
          <div className="col-auto">
            <label htmlFor="inlineFormInput">Full Name</label>
            <input
              type="text"
              className="form-control mb-2"
              id="inlineFormInput"
              onChange={this.onChangeFull}
              placeholder="Jane Doe"
            />
          </div>
          <div className="col-auto">
            <label htmlFor="inlineFormInputGroup">Username</label>
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text">@</div>
              </div>
              <input
                type="text"
                className="form-control"
                onChange={this.onChangeUser}
                id="inlineFormInputGroup"
                placeholder="Username"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault03">Email</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault03"
              onChange={this.onChangeEmail}
              placeholder="Email"
              required
            />
          </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault03">City/Town</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault03"
              onChange={this.onChangeCity}
              placeholder="City/Town"
              required
            />
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationDefault04">County</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault04"
              onChange={this.onChangeCounty}
              placeholder="County"
              required
            />
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationDefault05">Postcode</label>
            <input
              type="text"
              className="form-control"
              onChange={this.onChangePost}
              id="validationDefault05"
              placeholder="Postcode"
              required
            />
          </div>
        </div>
        <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault03">Phone Number</label>
            <input
              type="text"
              className="form-control"
              onChange={this.onChangePhone}
              id="validationDefault03"
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default CreateUser;
