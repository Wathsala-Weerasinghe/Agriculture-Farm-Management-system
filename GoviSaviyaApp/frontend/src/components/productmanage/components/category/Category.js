import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  Section,
  Container,
  Title,
  Description,
  Image,
  Button,
} from "./styles.js";

const Category = () => {
  const history = useHistory();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = () => {
      axios
        .get("http://localhost:8070/category/")
        .then((res) => {
          console.log(res);
          setCategories(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getCategories();
  }, []);

  return (
    <Section>
      {categories.map((category) => (
        <Container>
          <div key={category._id}>
            <Image
              src={`http://localhost:8070/uploads/${category.image}`}
              alt=''
            />
            <Title>{category.name}</Title>
            <Description>
              <i>{category.description}</i>
            </Description>
            <Button onClick={() => history.push("/Products/")}>
              <b>View More</b>
            </Button>
          </div>
        </Container>
      ))}
    </Section>
  );
};

export default Category;
