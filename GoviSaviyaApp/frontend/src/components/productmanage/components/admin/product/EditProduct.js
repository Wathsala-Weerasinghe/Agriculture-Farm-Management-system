import axios from "axios";
import React, { useState, useEffect } from "react";
import { Form, Row, Button } from "react-bootstrap";
import { Section, Title } from "../category/createCategory/styles.js";
import { useParams } from "react-router";

function EditProduct({ products, setProducts }) {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [filename, setImage] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getProducts = () => {
      axios
        .get(`http://localhost:8070/product/get/${id}`)
        .then((res) => {
          console.log(res);
          let prodRes = res.data.product;
          setProducts(prodRes);
          setName(prodRes.name);
          setSize(prodRes.size);
          setPrice(prodRes.price);
          setQuantity(prodRes.quantity);
          setCategory(prodRes.category);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getProducts();
  }, [`${id}`]);

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
      .put(`http://localhost:8070/product/update/${id}`, formData)
      .then(() => {
        alert("Product is Updated");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div style={{ height: "800px", width: "80%" }}>
      <Title>Edit Product</Title>
      <Section style={{ height: "600px" }}>
        <Form onSubmit={sendData} encType='multipart/form-data'>
          <Row className='mb-3'>
            <Form.Label>Product name</Form.Label>
            <Form.Control
              type='text'
              name='name'
              defaultValue={products.name}
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
              defaultValue={products.size}
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
              defaultValue={products.price}
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
              defaultValue={products.quantity}
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
              defaultValue={products.category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
          </Row>
          <Row>
            <Form.Group className='position-relative mb-3'>
              <Form.Label>Image</Form.Label>:
              <i>
                <b>
                  <Form.Label>{products.image}</Form.Label>
                </b>
              </i>
              <Form.Control
                type='file'
                required
                filename='image'
                defaultValue={products.filename}
                onChange={imageupload}
              />
            </Form.Group>
          </Row>
          <Button type='submit'>Update</Button>
        </Form>
      </Section>
    </div>
  );
}

export default EditProduct;
