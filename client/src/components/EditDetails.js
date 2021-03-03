import React, { useRef, useState } from "react";
import axios from "axios";
import {
  Form,
  Button,
  Card,
  Alert,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

export default function EditDetails() {
  return (
    <Form encType="multipart/form-data">
      <h2 className="heading-item">Edit Details</h2>
      <Form.Group id="name">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="Input" required />
      </Form.Group>
      <Form.Group id="address">
        <Form.Label>Home Address</Form.Label>
        <Form.Control placeholder="city/village/street/house" type="Input" required />
      </Form.Group>
      <Form.Group id="postcode">
        <Form.Label>Postcode</Form.Label>
        <Form.Control placeholder="" type="Input" required />
      </Form.Group>
      <Form.Group id="phone-number">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control placeholder="" type="Input" required />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Describe yourself to your customers...</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group>
      <Button className="w-25" type="submit">
        Submit Details
      </Button>
      </Form.Group>
    </Form>
  );
}
