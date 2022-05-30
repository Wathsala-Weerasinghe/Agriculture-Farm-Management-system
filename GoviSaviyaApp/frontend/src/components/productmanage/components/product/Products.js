import React, { useState, useEffect } from "react";
import axios from "axios";

import { useHistory } from "react-router-dom";
import {
  Section,
  Container,
  Info,
  Slide,
  Title,
  ProductName,
  Size,
  Price,
  Image,
  Button,
} from "./styles.js";

const Products = () => {
  const history = useHistory();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = () => {
      axios
        .get("http://localhost:8070/product/")
        .then((res) => {
          console.log(res);
          setProducts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getProducts();
  }, []);
  return (
    <div style={{ marginTop: "70px" }}>
      <Title>Products</Title>
      <Slide></Slide>
      <Section>
        {products.map((product, key) => (
          <Container key={key}>
            <Image
              src={`http://localhost:8070/uploads/${product.image}`}
              alt=''
            />
            <Info>
              <ProductName>{product.name}</ProductName>
              <Size>{product.size}</Size>
            </Info>
            <Price>Rs.{product.price}.00</Price>
            <Button onClick={() => history.push(`/Product/${product._id}`)}>
              View
            </Button>
          </Container>
        ))}
      </Section>
    </div>
  );
};

export default Products;
