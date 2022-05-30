import axios from "axios";
import React, { useState } from "react";
import { Form, Row, Button } from "react-bootstrap";
import { Section, Title } from "./styles";

function CreateCategory() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [filename, setImage] = useState("");

  const imageupload = (e) => {
    setImage(e.target.files[0]);
  };
  console.log(filename);

  function sendData(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", filename);

    axios
      .post("http://localhost:8070/category/create", formData)
      .then(() => {
        alert("Category is added");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div style={{ height: "600px", width: "80%" }}>
      <Title>Add Category</Title>
      <Section>
        <Form onSubmit={sendData} encType='multipart/form-data'>
          <Row className='mb-3'>
            <Form.Label>Category name</Form.Label>
            <Form.Control
              type='text'
              name='name'
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Row>
          <Row>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as='textarea'
              placeholder='Description here'
              style={{ height: "100px" }}
              onChange={(e) => {
                setDescription(e.target.value);
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

export default CreateCategory;
