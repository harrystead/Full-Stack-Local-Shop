import React, { useState, useEffect } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';

export default function ProfileDashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();

  const history = useHistory();
  console.log(currentUser.uid);

  //get items data for user.
  let [responseData, setResponseData] = useState('');
  const fetchData = React.useCallback(() => {
    axios.get(`/items/${currentUser.uid}`)
    .then((response) => {
      setResponseData(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  React.useEffect(() => {
    fetchData()
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
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          <Link to="/create" className="navbar-float-right">
            Add Item
          </Link>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
}
