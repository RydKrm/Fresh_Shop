import React, { useEffect, useState } from 'react';
import MyCard from '../MyCard/MyCard';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
 // const [checkUser,setCheckUser] = useContext(userContext);
 const [addClass,setAddClass] = useState('side');
 let userRole = '';
 if(localStorage.getItem("fresh_shop")){
  const user = JSON.parse(localStorage.getItem("fresh_shop"));
   userRole = user.userRole;
 } 

  const sideBarChange = (value)=>{
    setAddClass(value);
  };
  
  
    return (
      <header className="main-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
          <div className="container">
            <div className="navbar-header">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar-menu"
                aria-controls="navbars-rs-food"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fa fa-bars"></i>
              </button>
              <Link className="navbar-brand" to="index.html">
                <img
                  width={"120px"}
                  height={"80px"}
                  src="images/logo.png"
                  className="logo"
                  alt=""
                />
              </Link>
            </div>

            <div className="collapse navbar-collapse" id="navbar-menu">
              <ul
                className="nav navbar-nav ml-auto"
                data-in="fadeInDown"
                data-out="fadeOutUp"
              >
                <li className="nav-item active">
                  <Link className="nav-link" to="home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About Us
                  </Link>
                </li>
                {userRole === "customer" && (
                  <li className="dropdown">
                    <Link to="#" className="nav-link" data-toggle="dropdown">
                      Profile
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="shop-detail.html">Shop Detail</Link>
                      </li>
                      <li>
                        <Link to="/cart">Cart</Link>
                      </li>
                      <li>
                        <Link to="/checkout">Checkout</Link>
                      </li>
                      <li>
                        <Link to="/my-account">My Account</Link>
                      </li>
                      <li>
                        <Link to="/wishlist">Wishlist</Link>
                      </li>
                    </ul>
                  </li>
                )}
                {userRole === "seller" && (
                  <li className="dropdown">
                    <Link to="#" className="nav-link" data-toggle="dropdown">
                      Seller Profile
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/shop_detail">Shop Detail</Link>
                      </li>
                      <li>
                        <Link to="/seller_product">Seller Product</Link>
                      </li>
                      <li>
                        <Link to="/add_product">Add Product</Link>
                      </li>
                      <li>
                        <Link to="/my-account">My Account</Link>
                      </li>
                    </ul>
                  </li>
                )}
                <li className="nav-item">
                  <Link className="nav-link" to="/shop">
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/product">
                    Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/gallery">
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="attr-nav">
              <ul>
                <li className="search">
                  <Link to="#">
                    <i className="fa fa-search"></i>
                  </Link>
                </li>
                <li className="side-menu" onClick={()=>sideBarChange('side sidebar-class')}>
                  <Link to="#">
                    <i className="fa fa-shopping-bag"></i>
                    <span className="badge">3</span>
                    <p>My Cart</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <MyCard sideBarChange={sideBarChange} addCart={addClass}></MyCard>
        </nav>
      </header>
    );
};

export default NavigationBar;