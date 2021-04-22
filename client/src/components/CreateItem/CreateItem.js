import React, { useRef, useState } from "react";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";
import { Redirect } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CreateItem({setRequest}) {
  const { currentUser } = useAuth();
  const nameRef = useRef();
  const categoryRef = useRef();
  const yearRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const contactRef = useRef();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [endDate, setEndDate] = useState(new Date());

  const [quality, setQuality] = useState("");
  const [selectedPic, setSelectedPic] = useState("");
  const radioOnChange = (e) => {
    setQuality(e.target.value);
  };

  const pictureOnChange = (e) => {
    setSelectedPic(e.target.files[0]);
  };

  async function onSubmit(e) {
    e.preventDefault();
    console.log(currentUser.uid);
    const formData = new FormData();
    formData.append("selectedPic", selectedPic);
    formData.append("name", nameRef.current.value);
    formData.append("category", categoryRef.current.value);
    formData.append("quality", quality);
    formData.append("date", yearRef.current.value);
    formData.append("price", priceRef.current.value);
    formData.append("description", descriptionRef.current.value);
    formData.append("contact", contactRef.current.value);
    formData.append("author", currentUser.uid);
    formData.append("endDate", endDate)

    //post to monogdb;
    axios
      .post("/items/add", formData)
      .then((res) => {
        console.log(res.data);
        setSuccess("Great! Item has been created!");
        setRequest(`Item ${res.data.name} has been added`)
      })
      .catch((error) => {
        console.log(error);
        setError("Request has failed", error);
      });
  }
  return (
    <Form onSubmit={onSubmit} encType="multipart/form-data">
      <h2 className="heading-item">Create an Item</h2>
      {success && <Redirect to="/profile" />}
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group id="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="Input" ref={nameRef} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Category</Form.Label>
        <Form.Control ref={categoryRef} as="select" defaultValue="Choose...">
          <option>Choose...</option>
          <option>Furniture</option>
          <option>Antiques</option>
          <option>Toys</option>
          <option>Books | CDs | DVDs</option>
          <option>Clothing</option>
          <option>Ornaments</option>
          <option>Jewellery</option>
          <option>Other</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Quality</Form.Label>
        <Form.Check
          type="radio"
          label="Excellent Condition"
          name="group2"
          value="Excellent Condition"
          onChange={radioOnChange}
          id="radio1"
        />
        <Form.Check
          type="radio"
          label="Good Condition"
          name="group2"
          value="Good Condition"
          onChange={radioOnChange}
          id="radio2"
        />
        <Form.Check
          type="radio"
          label="Fair Condition"
          name="group2"
          value="Fair Condition"
          onChange={radioOnChange}
          id="radio3"
        />
        <Form.Check
          type="radio"
          label="Poor Condition"
          value="Poor Condition"
          name="group2"
          onChange={radioOnChange}
          id="radio4"
        />
      </Form.Group>
      <Form.Group id="price">
        <Form.Label>Year of Origin</Form.Label>
        <Form.Control type="Input" ref={yearRef} required />
      </Form.Group>
      <Form.Group id="price">
        <Form.Label>Starting Price(£)</Form.Label>
        <Form.Control type="Input" ref={priceRef} required />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
      <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" ref={descriptionRef} rows={3} />
      </Form.Group>
      <Form.Group>
      <Form.Label>Selected Picture</Form.Label>
        <Form.File
          id="custom-file"
          onChange={pictureOnChange}
          label={selectedPic ? `${selectedPic.name}` : "Select a photo"}
          custom
        />
      </Form.Group>
      <Form.Group id="contact">
        <Form.Label>
          Phone Number or Email(for customers to contact you)
        </Form.Label>
        <Form.Control type="Input" ref={contactRef} required />
      </Form.Group>
      <Form.Group id="date-picker">
        <Form.Label>Select the Bidding End Date</Form.Label>
        <DatePicker
          dateFormat="d MMMM, yyyy h:mm"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
        />
      </Form.Group>
      <Form.Group id="button">
        <Button className="w-25" type="submit">
          Create Item
        </Button>
      </Form.Group>
    </Form>
  );
}
