import React, { Component } from "react";
import CartIcon from "@material-ui/icons/ShoppingCart";
import "./header.css";

import image from "./images/logo.jpg";

export class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='logo'>
          <img src={image} width='250' height='180' alt='acc' />
          <h1> GoviSaviya Agricultural Farm </h1>
        </div>
        <div className='header1'>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav mr-auto'>
                <li className='nav-item'>
                  <a style={{ color: "white" }} className='nav-link' href='#'>
                    Login<span className='sr-only'>(current)</span>
                  </a>
                </li>
                <li className='nav-item'>
                  <a style={{ color: "white" }} className='nav-link' href='#'>
                    Dashboard<span className='sr-only'>(current)</span>
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    style={{ color: "white" }}
                    className='nav-link'
                    href='/Category'
                  >
                    <span className='sr-only'>(current)</span>Catalogue
                  </a>
                </li>

                <li class='nav-item dropdown'>
                  <a
                    style={{ color: "white" }}
                    class='nav-link dropdown-toggle'
                    href='#'
                    id='navbarDropdown'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Admin
                  </a>
                  <div class='dropdown-menu' aria-labelledby='navbarDropdown'>
                    <a class='dropdown-item' href='#'>
                      User Management
                    </a>
                    <div class='dropdown-divider'></div>
                    <a class='dropdown-item' href='#'>
                      Employee Management
                    </a>
                    <div class='dropdown-divider'></div>
                    <a class='dropdown-item' href='/CategoryAdmin'>
                      Product Management
                    </a>
                    <div class='dropdown-divider'></div>
                    <a class='dropdown-item' href='/'>
                      Delevery Tracking
                    </a>
                    <div class='dropdown-divider'></div>
                    <a class='dropdown-item' href='/ui'>
                      Inventory Management
                    </a>
                    <div class='dropdown-divider'></div>
                    <a class='dropdown-item' href='#'>
                      Task Management
                    </a>
                    <div class='dropdown-divider'></div>
                    <a class='dropdown-item' href='#'>
                      Farm Diary Management
                    </a>
                    <div class='dropdown-divider'></div>
                    <a class='dropdown-item' href='/'>
                      Cost Management
                    </a>
                  </div>
                </li>
              </ul>
              <a style={{ color: "white" }} className='nav-link' href='/Cart'>
                <button className='cart'>
                  <CartIcon style={{ color: "black" }} />
                </button>
              </a>
              <form className='form-inline my-2 my-lg-0'>
                <input
                  className='form-control mr-sm-2'
                  type='search'
                  placeholder='Search'
                  aria-label='Search'
                />
                <button
                  className='btn btn-outline-success my-2 my-sm-0'
                  type='submit'
                >
                  Search
                </button>
              </form>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
