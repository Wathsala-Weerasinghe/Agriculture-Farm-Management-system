import axios from "axios";
import React, { useState } from "react";
import { Form, Row, Button } from "react-bootstrap";
import { Section, Title } from "./styles";

function CreateProduct() {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [filename, setImage] = useState("");

  const imageupload = (e) => {
    setImage(e.target.files[0]);
  };
  console.log(filename);

  function sendData(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("size", size);
    formData.append("price", price);
    formData.append("quantity", quantity);
    formData.append("category", category);
    formData.append("image", filename);

    axios
      .post("http://localhost:8070/product/create", formData)
      .then(() => {
        alert("Product is added");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div style={{ height: "800px", width: "80%" }}>
      <Title>Add Product</Title>
      <Section style={{ height: "600px" }}>
        <Form onSubmit={sendData} encType='multipart/form-data'>
          <Row className='mb-3'>
            <Form.Label>Product name</Form.Label>
            <Form.Control
              type='text'
              name='name'
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Row>
          <Row className='mb-3'>
            <Form.Label>Size</Form.Label>
            <Form.Control
              type='text'
              name='size'
              onChange={(e) => {
                setSize(e.target.value);
              }}
            />
          </Row>
          <Row className='mb-3'>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type='text'
              name='price'
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </Row>
          <Row className='mb-3'>
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type='text'
              name='quantity'
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
          </Row>
          <Row className='mb-3'>
            <Form.Label>Category</Form.Label>
            <Form.Control
              type='text'
              name='category'
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
          </Row>
          <Row>
            <Form.Group className='position-relative mb-3'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type='file'
                required
                filename='image'
                onChange={imageupload}
              />
            </Form.Group>
          </Row>
          <Button type='submit'>Save</Button>
        </Form>
      </Section>
    </div>
  );
}

export default CreateProduct;
