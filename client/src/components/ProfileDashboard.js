import React, { useState, useEffect } from "react";
import { Card, Button, Alert, ListGroup, Form } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function ProfileDashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  //get items data for user.
  let [responseData, setResponseData] = useState("");
  const fetchData = React.useCallback(() => {
    axios
      .get(`/items/${currentUser.uid}`)
      .then((response) => {
        setResponseData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    fetchData();
    setLoading(false);
  }, [fetchData]);

  let [dataDetails, setDataDetails] = useState("");
  const fetchDataDetails = React.useCallback(() => {
    axios
      .get(`/details/${currentUser.uid}`)
      .then((response) => {
        setDataDetails(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    fetchDataDetails();
  }, [fetchDataDetails]);

  console.log(responseData);
  console.log(dataDetails);

  const deleteItem = (e) => {
    const id = e.target.value;
    console.log(id);
    window.location.reload();
    axios.delete(`/items/${id}`).then((response) => {
      console.log(response.data);
    });
  };

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <h2 className="text-center mb-4 profile-heading">Profile</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <div className="w-100 text-center add-item-div">
        <Link to="/create" className="nav-link">
          Add Item
        </Link>
        <Link to="/edit" className="nav-link">
          Edit Details
        </Link>
      </div>
      <Card className="card-centre" style={{ width: "40rem" }}>
        <Card.Header><strong>fullname:</strong> {dataDetails ? dataDetails.fullname : ""}</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>{dataDetails ? dataDetails.description : ""}</ListGroup.Item>
          <ListGroup.Item>
            <strong>Email:</strong> {currentUser.email}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Address:</strong> {dataDetails ? dataDetails.homeaddress : ""}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Phone Number:</strong> {dataDetails ? dataDetails.phonenumber : ""}
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <div className="w-100 text-center">
        <Button
          className="button-profile text-center"
          variant="link"
          onClick={handleLogout}
        >
          Log Out
        </Button>
      </div>
      <div className="w-100 text-center mt-2">
        <h3>{dataDetails ? dataDetails.fullname + "'s items" : ""}</h3>
      </div>
      <div className="card-group">
        {responseData &&
          responseData.map((item, index) => (
            <div className="col-sm-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src={"/" + item.selectedPic}
                  alt="error"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                    <small className="text-muted">Ad by {item.author}</small>
                  </p>
                  <p className="card-text-three">
                    {item.category + " | " + item.date + " | " + item.quality}
                  </p>
                  <p className="card-text-price">{"£" + item.price}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      Date Posted: {item.createdAt.slice(0, 10)}
                    </small>
                  </p>
                </div>
              </div>
              <Button
                className="w-10 text-center profile-delete"
                onClick={deleteItem}
                value={item._id}
              >
                Delete Item
              </Button>
            </div>
          ))}
      </div>
    </>
  );
}
