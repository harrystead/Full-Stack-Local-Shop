import React, { Component } from "react";

class CreateUser extends Component {
  render() {
    return (
      <form>
        <h2>Create A User</h2>
        <div class="form-row align-items-center">
          <div class="col-auto">
            <label htmlFor="inlineFormInput">Full Name</label>
            <input
              type="text"
              class="form-control mb-2"
              id="inlineFormInput"
              placeholder="Jane Doe"
            />
          </div>
          <div class="col-auto">
            <label htmlFor="inlineFormInputGroup">Username</label>
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">@</div>
              </div>
              <input
                type="text"
                class="form-control"
                id="inlineFormInputGroup"
                placeholder="Username"
              />
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-3">
            <label htmlFor="validationDefault03">Email</label>
            <input
              type="text"
              class="form-control"
              id="validationDefault03"
              placeholder="Email"
              required
            />
          </div>
        <div class="form-row">
          <div class="col-md-6 mb-3">
            <label htmlFor="validationDefault03">City/Town</label>
            <input
              type="text"
              class="form-control"
              id="validationDefault03"
              placeholder="City/Town"
              required
            />
          </div>
          <div class="col-md-3 mb-3">
            <label htmlFor="validationDefault04">County</label>
            <input
              type="text"
              class="form-control"
              id="validationDefault04"
              placeholder="County"
              required
            />
          </div>
          <div class="col-md-3 mb-3">
            <label htmlFor="validationDefault05">Postcode</label>
            <input
              type="text"
              class="form-control"
              id="validationDefault05"
              placeholder="Postcode"
              required
            />
          </div>
        </div>
        <div class="col-md-6 mb-3">
            <label htmlFor="validationDefault03">Phone Number</label>
            <input
              type="text"
              class="form-control"
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
