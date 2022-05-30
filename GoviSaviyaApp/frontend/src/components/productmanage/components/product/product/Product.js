import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  ImageContainer,
  Image,
  InfoContainer,
  Title,
  ProductName,
  Size,
  Price,
  Quantity,
  AddButton,
  RemoveButton,
  TotalPrice,
  ButtonBuy,
  ButtonAdd,
} from "./styles.js";

const Product = () => {
  const [quantity, setCounter] = useState(1);
  const handleAddItem = () => setCounter(quantity + 1);
  let handleRemoveItem = () => setCounter(quantity - 1);

  if (quantity <= 1) {
    handleRemoveItem = () => setCounter(1);
  }
  const { id } = useParams();
  const [productItem, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = () => {
      axios
        .get(`http://localhost:8070/product/get/${id}`)
        .then((res) => {
          console.log(res);
          setProduct(res.data.product);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getProduct();
  }, [`${id}`]);

  function addToCart(name, size, quantity, price) {
    let cusID = 1;
    console.log(id);
    console.log(quantity);
    try {
      const request = {
        method: "POST",
        body: JSON.stringify({
          customerID: cusID,
          cartItems: [
            { product: name, size: size, quantity: quantity, price: price },
          ],
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      };
      fetch("http://localhost:8070/cart/addToCart", request).then(
        (response) => {
          const data = response;
          console.log(data);
        }
      );
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <ImageContainer>
        <Image
          src={`http://localhost:8070/uploads/${productItem.image}`}
          alt=''
        />
      </ImageContainer>
      <InfoContainer>
        <Title>
          <ProductName>Name : {productItem.name}</ProductName>
          <Size>({productItem.size})</Size>
        </Title>
        <Price>Price : Rs.{productItem.price}.00</Price>
        <div>
          <Quantity>Quantity : {quantity}</Quantity>
          <AddButton onClick={handleAddItem}>
            <AddIcon style={{ color: "green" }} />
          </AddButton>
          <RemoveButton onClick={handleRemoveItem}>
            <RemoveIcon style={{ color: "#f44336" }} />
          </RemoveButton>
        </div>
        <TotalPrice>Total : Rs.{productItem.price * quantity}.00</TotalPrice>
        <ButtonBuy>Buy</ButtonBuy>
        <ButtonAdd
          onClick={(e) =>
            addToCart(
              productItem.name,
              productItem.size,
              quantity,
              productItem.price * quantity
            )
          }
        >
          Add to Cart
        </ButtonAdd>
      </InfoContainer>
    </Container>
  );
};

export default Product;
