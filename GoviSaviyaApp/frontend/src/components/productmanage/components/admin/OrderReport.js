import jsPDF from "jspdf";
import axios from "axios";
import { useState, useEffect } from "react";
import "./category/styles.css";
import { Container, Label, Wrapper, Button } from "./OrderStyles";

const OrderReport = () => {
  const [carts, setCart] = useState([]);

  useEffect(() => {
    const getCart = () => {
      axios
        .get(`http://localhost:8070/cart/getCartItems`)
        .then((res) => {
          console.log(res.data);
          setCart(res.data.cartItems);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getCart();
  }, []);

  function generatePDF() {
    var doc = new jsPDF("p", "pt", "a4");
    doc.html(document.querySelector("#content"), {
      callback: function (pdf) {
        var pageCount = doc.internal.getNumberOfPages();
        pdf.deletePage(pageCount);
        pdf.save("mypdf.pdf");
      },
    });
  }
  return (
    <Container>
      <div id='content'>
        <Label>Order Summary Report</Label>
        <Wrapper>
          <table
            className='admin_main_tab tb-border'
            style={{ cellspacing: "0", width: "750px" }}
          >
            <tr>
              <th>Products</th>
              <th>Order size</th>
              <th>Price</th>
              <th>Order Quantity</th>
            </tr>
            {carts.map((cartItem) => (
              <tr>
                <td>{cartItem.product}</td>
                <td>{cartItem.size}</td>
                <td>{cartItem.price}</td>
                <td>{cartItem.quantity}</td>
              </tr>
            ))}
          </table>
        </Wrapper>
        <Button onClick={generatePDF} type='primary'>
          PDF
        </Button>
      </div>
    </Container>
  );
};

export default OrderReport;
