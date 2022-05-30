import React from "react";
import axios from "axios";
import AddIcon from "@material-ui/icons/AddCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
import {
  Section,
  Image,
  Label,
  AddButton,
  DeleteButton,
  EditButton,
} from "./styles.js";
import "../category/styles.css";

const ProductAdmin = ({ products, setProducts }) => {
  const history = useHistory();

  function deleteProduct(id) {
    axios.delete(`http://localhost:8070/product/delete/${id}`).then((res) => {
      alert(res.data);
    });
    setProducts(products.filter((product) => product._id !== id));
  }
  return (
    <div>
      <Label>Add Product</Label>
      <AddButton onClick={() => history.push("/createProduct")}>
        <AddIcon style={{ color: "green" }} />
      </AddButton>

      <Section>
        <fieldset className='fieldset'>
          <legend className='legend_heading'>Products</legend>
          <table
            className='admin_main_tab tb-border'
            style={{ cellspacing: "0", width: "750px" }}
          >
            <tr>
              <th>Name</th>
              <th>Size</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Category</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
            {products.map((product) => (
              <tr>
                <td>{product.name}</td>
                <td style={{ padding: "15px" }}>{product.size}</td>
                <td style={{ padding: "15px" }}>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.category}</td>
                <td>
                  <Image
                    src={`http://localhost:8070/uploads/${product.image}`}
                    alt=''
                  />
                </td>
                <td style={{ padding: "10px" }}>
                  <DeleteButton onClick={() => deleteProduct(product._id)}>
                    <DeleteIcon style={{ color: "red" }} />
                  </DeleteButton>
                  <EditButton
                    onClick={() => history.push(`/update/${product._id}`)}
                  >
                    <EditIcon style={{ color: "blue" }} />
                  </EditButton>
                </td>
              </tr>
            ))}
          </table>
        </fieldset>
      </Section>
    </div>
  );
};

export default ProductAdmin;
