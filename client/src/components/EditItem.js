import React, { useRef, useState } from "react";
import axios from "axios";
import { useAuth } from '../contexts/AuthContext';
import { useParams } from 'react-router-dom'
import {
  Form,
  Button,
  Card,
  Alert,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

export default function EditItem() {
  const { currentUser } = useAuth();
  const nameRef = useRef();
  const categoryRef = useRef();
  const yearRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const [quality, setQuality] = useState("");
  const [selectedPic, setSelectedPic] = useState("");
  let { id } = useParams();
  console.log(id)

//   let [responseData, setResponseData] = useState('');
//   const fetchData = React.useCallback(() => {
//     axios.get(`/items/${id}`)
//     .then((response) => {
//       setResponseData(response.data)
//     })
//     .catch((error) => {
//       console.log(error)
//     })
//   }, [])

//   React.useEffect(() => {
//     fetchData()

//   }, [fetchData])

//   console.log(responseData)

  const radioOnChange = (e) => {
    setQuality(e.target.value)
  }

  const pictureOnChange = (e) => {
    setSelectedPic(e.target.files[0])
  }

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
    formData.append("author", currentUser.uid);

    //post to monogdb;
    axios.post(`/update/${id}`, formData).then((res) => console.log(res.data));
  }
  return (
    <Form onSubmit={onSubmit} encType="multipart/form-data">
      <h2 className="heading-item">Edit Item</h2>
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
        <Form.Label>Price(£)</Form.Label>
        <Form.Control type="Input" ref={priceRef} required />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" ref={descriptionRef} rows={3} />
      </Form.Group>
      <Form.Group>
        <Form.File id="custom-file" onChange={pictureOnChange} label="Custom file input" custom />
      </Form.Group>
      <Button className="w-25" type="submit">
        Edit Item
      </Button>
    </Form>
  );
}
