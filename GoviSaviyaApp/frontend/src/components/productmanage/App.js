import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CategoryAdmin from "./components/admin/category/CategoryAdmin";
import ProductAdmin from "./components/admin/product/ProductAdmin";
import CreateCategory from "./components/admin/category/createCategory/CreateCategory";
import EditCategory from "./components/admin/category/editCategory/EditCategory";
import CreateProduct from "./components/admin/product/createProduct/CreateProduct";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/product/product/Product";
import Products from "./components/product/Products";
import Category from "./components/category/Category";
import EditProduct from "./components/admin/product/EditProduct";
import Cart from "./components/cart/Cart";
import OrderReport from "./components/admin/OrderReport";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

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
    <Router>
      <div>
        <Header />
        <Route path='/Category' exact component={Category} />
        <Route path='/Products' exact component={Products} />
        <Route path='/Product/:id' exact component={Product} />
        <Route path='/Cart' exact component={Cart} />
        <Route
          exact
          path='/CategoryAdmin'
          render={(props) => (
            <CategoryAdmin
              {...props}
              categories={categories}
              setCategories={setCategories}
            />
          )}
        />
        <Route path='/createCategory' exact component={CreateCategory} />
        <Route path='/createProduct' exact component={CreateProduct} />

        <Route
          path='/updateCategory/:id'
          render={(props) => (
            <EditCategory
              {...props}
              categories={categories}
              setCategories={setCategories}
            />
          )}
        />
        <Route
          path='/update/:id'
          render={(props) => (
            <EditProduct
              {...props}
              products={products}
              setProducts={setProducts}
            />
          )}
        />
        <Route
          path='/ProductAdmin'
          exact
          render={(props) => (
            <ProductAdmin
              {...props}
              products={products}
              setProducts={setProducts}
            />
          )}
        />
        <Route path='/OrderReport' exact component={OrderReport} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
