import React from "react";
import axios from "axios";
import AddIcon from "@material-ui/icons/AddCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
import {
  Section,
  Label,
  AddButton,
  Container,
  Image,
  DeleteButton,
  EditButton,
  Button,
  ReportButton,
} from "./styles.js";
import "./styles.css";

const CategoryAdmin = ({ categories, setCategories }) => {
  const history = useHistory();

  function deleteCategory(id) {
    axios.delete(`http://localhost:8070/category/delete/${id}`).then(() => {
      alert("Category is deleted");
    });
    setCategories(categories.filter((category) => category._id !== id));
  }

  return (
    <Section>
      <ReportButton onClick={() => history.push("/OrderReport")}>
        <h5>Report</h5>
      </ReportButton>
      <Label>Add Category</Label>
      <AddButton onClick={() => history.push("/createCategory")}>
        <AddIcon style={{ color: "green" }} />
      </AddButton>

      <Container>
        <fieldset className='fieldset'>
          <legend className='legend_heading'>Categories</legend>
          <table
            className='admin_main_tab tb-border'
            style={{ cellspacing: "0", width: "750px" }}
          >
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
            {categories.map((category) => (
              <tr>
                <td>{category.name}</td>
                <td>{category.description}</td>
                <td>
                  <Image
                    src={`http://localhost:8070/uploads/${category.image}`}
                    alt=''
                  />
                </td>
                <td style={{ padding: "30px" }}>
                  <DeleteButton onClick={() => deleteCategory(category._id)}>
                    <DeleteIcon style={{ color: "red" }} />
                  </DeleteButton>
                  <EditButton
                    onClick={() =>
                      history.push(`/updateCategory/${category._id}`)
                    }
                  >
                    <EditIcon style={{ color: "blue" }} />
                  </EditButton>
                </td>
              </tr>
            ))}
          </table>
        </fieldset>
      </Container>
      <Button onClick={() => history.push("/ProductAdmin")}>
        <h5>Products</h5>
      </Button>
    </Section>
  );
};

export default CategoryAdmin;
