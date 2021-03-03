import React, { useState, useEffect } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';

export default function ProfileDashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const [loading, setLoading] = useState(true)
  const history = useHistory();

  //get items data for user.
  let [responseData, setResponseData] = useState('');
  const fetchData = React.useCallback(() => {
    axios.get(`/items/${currentUser.uid}`)
    .then((response) => {
      setResponseData(response.data)
      setLoading(false)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  React.useEffect(() => {
    fetchData()
    setLoading(false)
  }, [fetchData])

  console.log(responseData)

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
    {console.log(responseData)}
      <Card>
          <h2 className="text-center mb-4">Profile</h2>
          <Link to="/create" className="navbar-float-right">
            Add Item
          </Link>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
        <Link to="/edit" className="details">
            Edit Details
          </Link>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
      <div className="card-group">
        {responseData && responseData.map((item, index) => (
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
    </>
  );
}
