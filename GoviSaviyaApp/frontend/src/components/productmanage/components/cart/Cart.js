import React from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Wrapper,
  Top,
  TopButton,
  Bottom,
  Info,
  Title,
  Product,
  ProductDetail,
  PriceDetail,
  ProductAmountContainer,
  Details,
  ProductName,
  Size,
  Price,
  Quantity,
  AddButton,
  RemoveButton,
  TotalPrice,
  Summary,
  SummaryTitle,
  SummaryItem,
  SummaryText,
  CheckButton,
  DeleteButton,
} from "./styles.js";

const Cart = () => {
  const history = useHistory();
  const [quantity, setCounter] = useState(1);
  const onQuantityIncrement = () => setCounter(quantity + 1);
  let onQuantityDecrement = () => setCounter(quantity - 1);

  if (quantity <= 1) {
    onQuantityDecrement = () => setCounter(1);
  }
  const [carts, setCart] = useState([]);
  //const [totalprice, setPrice] = useState();

  useEffect(() => {
    const getCart = () => {
      axios
        .get(`http://localhost:8070/cart/getCartItems`)
        .then((res) => {
          // console.log(res.data.cartItems);
          let items = [res.data.cartItems];
          // console.log(items);
          // let totalPrice = calculateTotalPrice(items);
          //console.log(totalPrice);
          //res.data("totalPrice", totalPrice);
          // setPrice(totalPrice);
          setCart(res.data.cartItems);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getCart();
  }, []);

  function calculateTotalPrice(price, quantity) {
    let sum = 0;
    // for (i = 0; i < items.length; i++) {
    //   console.log(items);
    // }
    let amount = price * quantity;
    sum = sum + amount;
    // items.map((item, key) => {
    //   console.log(item);
    //   console.log({ key } > item.price);
    //   let itemPrice = item.quantity * item.price;
    //   console.log(itemPrice);
    //   totalAmount = totalAmount + itemPrice;
    // });
    console.log(sum);
    return sum;
  }

  function onRemoveCartItem(product) {
    axios
      .delete(`http://localhost:8070/cart/removeCartItems/${product}`)
      .then((res) => {
        alert("Item is successfully deleted", res.data);
      });
    setCart(carts.filter((cartItem) => cartItem.product !== product));
  }
  return (
    <Container>
      <Wrapper>
        <Title>My Cart</Title>
        <Top>
          <TopButton onClick={() => history.push("/Category/")}>
            CONTINUE SHOPPING
          </TopButton>
        </Top>
        <Bottom>
          <Info>
            {carts.map((cartItem) => (
              <div key={cartItem._id}>
                <Product>
                  <ProductDetail>
                    <DeleteButton
                      onClick={() => onRemoveCartItem(cartItem.product)}
                    >
                      <DeleteIcon style={{ color: "red" }} />
                    </DeleteButton>
                    <Details>
                      <ProductName>
                        <b>Product:</b> {cartItem.product}
                      </ProductName>
                      <Size>
                        <b>Size:</b> {cartItem.size}
                      </Size>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <b>Quantity:</b>
                      <AddButton onClick={onQuantityIncrement}>
                        <AddIcon style={{ color: "green" }} />
                      </AddButton>
                      <Quantity>{cartItem.quantity}</Quantity>
                      <RemoveButton onClick={onQuantityDecrement}>
                        <RemoveIcon style={{ color: "#f44336" }} />
                      </RemoveButton>
                    </ProductAmountContainer>
                    <Price>
                      <b>Price:</b> Rs.{cartItem.price * quantity}.00
                    </Price>
                  </PriceDetail>
                </Product>
                <hr />
              </div>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem type='total'>
              <SummaryText>Total</SummaryText>
              <TotalPrice>Rs.740.00</TotalPrice>
            </SummaryItem>
            <CheckButton>CHECKOUT NOW</CheckButton>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
