import React, { useState, useRef } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";

export default function DetailsModal({ show, setShow }) {
  const { currentUser } = useAuth();
  const fullnameRef = useRef();
  const addressRef = useRef();
  const postcodeRef = useRef();
  const phonenumberRef = useRef();
  const descriptionRef = useRef();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function submitDetails(e) {
    e.preventDefault(e);

    const detailsObj = {
      fullname: fullnameRef.current.value,
      homeaddress: addressRef.current.value,
      postcode: postcodeRef.current.value,
      phonenumber: phonenumberRef.current.value,
      description: descriptionRef.current.value,
      author: currentUser.uid,
    };

    axios
      .post("/details/add", detailsObj)
      .then((res) => {
        console.log(res.data);
        setSuccess("Great! Details have been created!");
        setShow(false);
      })
      .catch((error) => {
        console.log(error);
        setError("Request has failed", error);
      });
  }

  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Profile Details
        </Modal.Title>
      </Modal.Header>
      <Alert variant="primary">
        Before you start, please enter a few details
      </Alert>
      <Modal.Body>
        <Form onSubmit={submitDetails} encType="multipart/form-data">
          <h2 className="heading-item">Edit Details</h2>
          {success && <Redirect to="/profile" />}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form.Group id="name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control ref={fullnameRef} type="Input" required />
          </Form.Group>
          <Form.Group id="address">
            <Form.Label>Home Address</Form.Label>
            <Form.Control
              ref={addressRef}
              placeholder="city/village/street/house"
              type="Input"
              required
            />
          </Form.Group>
          <Form.Group id="postcode">
            <Form.Label>Postcode</Form.Label>
            <Form.Control
              ref={postcodeRef}
              placeholder=""
              type="Input"
              required
            />
          </Form.Group>
          <Form.Group id="phone-number">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              ref={phonenumberRef}
              placeholder=""
              type="Input"
              required
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Describe yourself to your customers...</Form.Label>
            <Form.Control ref={descriptionRef} as="textarea" rows={3} />
          </Form.Group>
          <Form.Group>
            <Button className="w-25" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
