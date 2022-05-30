import axios from "axios";
import React, { useState, useEffect } from "react";
import { Form, Row, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { Section, Title } from "../createCategory/styles";

function EditCategory({ categories, setCategories }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [filename, setImage] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getCategories = () => {
      axios
        .get(`http://localhost:8070/category/get/${id}`)
        .then((res) => {
          console.log(res);
          let categoryRes = res.data.category;
          setCategories(categoryRes);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getCategories();
  }, [`${id}`]);

  const imageupload = (e) => {
    setImage(e.target.files[0]);
  };

  function sendData(e) {
    e.preventDefault();

    console.log(filename);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", filename);

    axios
      .put(`http://localhost:8070/category/update/${id}`, formData)
      .then(() => {
        alert("Category is Updated");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div style={{ height: "600px", width: "80%" }}>
      <Title>Edit Category</Title>
      <Section>
        <Form onSubmit={sendData} encType='multipart/form-data'>
          <Row className='mb-3'>
            <Form.Label>Category name</Form.Label>
            <Form.Control
              type='text'
              name='name'
              defaultValue={categories.name}
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
              defaultValue={categories.description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </Row>
          <Row>
            <Form.Group className='position-relative mb-3'>
              <Form.Label>Image</Form.Label>:
              <i>
                <b>
                  <Form.Label>{categories.image}</Form.Label>
                </b>
              </i>
              <Form.Control
                type='file'
                required
                filename='image'
                defaultValue={categories.filename}
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

export default EditCategory;
