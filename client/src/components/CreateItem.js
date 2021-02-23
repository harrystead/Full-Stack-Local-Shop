import React, { Component } from "react";
import axios from "axios";

class CreateItem extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeQuality = this.onChangeQuality.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangePicture = this.onChangePicture.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      category: "",
      quality: "",
      date: "",
      price: "",
      description: "",
      selectedPic: null,
      users: [],
      username: "",
      author: "",
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

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeCategory(e) {
    this.setState({
      category: e.target.value,
    });
  }

  onChangeQuality(e) {
    this.setState({
      quality: e.target.value,
    });
  }

  onChangeDate(e) {
    this.setState({
      date: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value,
    });
  }

  onChangePicture(e) {
    this.setState({
      selectedPic: e.target.files[0],
    });
  }

  onChangeAuthor(e) {
    this.setState({
      author: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("selectedPic", this.state.selectedPic);
    formData.append("name", this.state.name);
    formData.append("category", this.state.category);
    formData.append("quality", this.state.quality);
    formData.append("date", this.state.date);
    formData.append("price", this.state.price);
    formData.append("description", this.state.description);
    formData.append("author", this.state.author);

    console.log(this.state.category);
    //post to monogdb;
    axios
      .post("http://localhost:5000/items/add", formData)
      .then((res) => console.log(res.data));

    window.location.reload();
  }
  render() {
    return (
      <form onSubmit={this.onSubmit} encType="multipart/form-data">
        <h2 className="heading-item">Create an Item</h2>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Item Name</label>
          <input
            type="input"
            onChange={this.onChangeName}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Category: </label>
          <select
            className="form-control"
            onChange={this.onChangeCategory}
            id="exampleFormControlSelect1"
          >
            <option>Select an Option...</option>
            <option>Furniture</option>
            <option>Antiques</option>
            <option>Toys</option>
            <option>Books | CDs | DVDs</option>
            <option>Clothing</option>
            <option>Ornaments</option>
            <option>Jewellery</option>
            <option>Other</option>
          </select>
        </div>
        <fieldset className="form-group">
          <div className="row">
            <legend className="col-form-label col-sm-2 pt-0">Quality: </legend>
            <div className="col-sm-10">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios1"
                  value="Excellent Condition"
                  onChange={this.onChangeQuality}
                />
                <label className="form-check-label" htmlFor="gridRadios1">
                  Excellent Condition
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  value="Good Condition"
                  onChange={this.onChangeQuality}
                  id="gridRadios2"
                />
                <label className="form-check-label" htmlFor="gridRadios2">
                  Good Condition
                </label>
              </div>
              <div className="form-check input">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  value="Fair Condition"
                  onChange={this.onChangeQuality}
                  id="gridRadios3"
                />
                <label className="form-check-label" htmlFor="gridRadios3">
                  Fair Condition
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  value="Poor Condition"
                  onChange={this.onChangeQuality}
                  id="gridRadios1"
                />
                <label className="form-check-label" htmlFor="gridRadios1">
                  Poor Condition
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Year of Origin</label>
          <input
            type="input"
            onChange={this.onChangeDate}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Price (£)</label>
          <input
            type="input"
            placeholder="£"
            onChange={this.onChangePrice}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Description: </label>
          <textarea
            className="form-control"
            onChange={this.onChangeDescription}
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Upload Image: </label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Upload</span>
            </div>
            <div className="custom-file">
              <input
                type="file"
                accept=".png, .jpg, .jpeg"
                name="photo"
                onChange={this.onChangePicture}
                className="custom-file-input"
                id="inputGroupFile01"
              />
              <label
                className="custom-file-label"
                htmlFor="inputGroupFile01"
              ></label>
            </div>
          </div>
        </div>
        <div className="seller-div">
          <h3 className="heading-item">Select a Seller</h3>
          <select
            className="form-select-profile"
            aria-label="Default select example"
            onChange={this.onChangeAuthor}
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
        </div>
        <div className="form-group row form-button">
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

export default CreateItem;
