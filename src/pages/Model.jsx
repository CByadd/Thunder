import React from "react";
import "./../styles/Model.css";
import { PiLineVerticalLight } from "react-icons/pi";
import { PiShoppingCartFill } from "react-icons/pi";
import { ImSearch } from "react-icons/im";
import shoe from "./../assets/0472f02ca5c4aec43b3b4400475136c7.jpg";
import { IoSearchCircleSharp } from "react-icons/io5";
import image from "./../assets/images (1).jpeg";
import data from "./../data.json";
const Model = () => {
  return (
    <>
      <div className="header">
        <div className="img-holder">
          <img className="img" src={image}></img>
        </div>
        <div className=" acc-holder">
          <div className="account-info">
            <a className="acc" href="">
              My Account
            </a>
            <a className="wish" href="">
              <PiLineVerticalLight />
              My Wishlists
            </a>
            <a className="cart" href="">
              <PiLineVerticalLight />
              My Cart
            </a>
            <a className="check" href="">
              <PiLineVerticalLight />
              Checkout
            </a>
            <a className="login" href="/login">
              <PiLineVerticalLight />
              Login
            </a>
          </div>
          <div className="shop-info">
            <div className="wel-holder">
              <p className="wel">Welcome to our online store!</p>
            </div>

            <div className="shop-cart">
              <div className="shop-icon">
                <PiShoppingCartFill />
              </div>
              <div className="shopy">
                <a className="shop" href="">
                  Shopping Cart
                </a>
                <p className="no">No items</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar">
        <div className="navbar-buttons">
          <button className="home">Home</button>
          <button className="about">About Us</button>
          <button className="blog">Blog</button>
          <button className="store">Store</button>
          <button className="news">News</button>
          <button className="contact">Contact Us</button>
        </div>
        <div className="search-box">
          <input className="box" type="Text" placeholder="   Search"></input>
          <div className="search-icon">
            <IoSearchCircleSharp />
          </div>
        </div>
      </div>
      <div className="shoe-sort">
        <img className="shoe-img" src={shoe}></img>
      </div>
      <div className="maincon">
        <div className="cato">
          <button className="cate">categories</button>
          <button className="ath">Athletic</button>
          <button className="boot">Boots</button>
          <button className="for">Formal shoes</button>
          <button className="cas">casual shoes</button>
          <button className="fas">Fashion Shoes</button>
          <button className="party">Party Wears</button>
          <button className="leather">Leather Shoes</button>
          <button className="san">Sandals</button>
        </div>
        <div className="comp">
          <div className="popu">
            <button className="popular">Popular Products</button>
          </div>

          <div className="main">
            {data.map((post) => (
              <div className="keys" key={post.id}>
                <div className="container">
                  <div className="image-holder">
                    <img className="image" src={post.img}></img>
                  </div>
                  <div className="sp">
                    <div>
                      <h2 className="tit">{post.title}</h2>
                      <p className="content">{post.content}</p>
                      <p className="dollar">{post.dollar}</p>
                    </div>
                    <div>
                      <button className="add">{post.but}</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="title-card">
        <div className="car">
          <p>Careers</p>
          <p>Investor Relations</p>
        </div>
        <div className="alo">
          <p>Alouests Rack</p>
          <p>Store Locations & Events</p>
        </div>
        <div className="chec">
          <p>Check Order Status</p>
          <p>Return & Exchanges</p>
        </div>

        <div className="ship">
          <p>Shipping Options & Charges</p>
          <p> Products Recall</p>
        </div>

        <div className="signup">
          <p>SIGNUP FOR NEWSLETTER</p>
          <div className="seas">
            <input className="sea" type="text" />
            <button className="subs">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="end-box">
        <div className="rights">
          <p className="all">
            @ 2015
            <a className="link" href="">
              alouset.
            </a>
            All Rights Reserved.
          </p>
        </div>
        <div className="num">
          <div className="p">paypal</div>
          <div className="v">visa</div>
          <div className="d">discover</div>
          <div className="m">mimo</div>
          <div className="mi">mimo</div>
        </div>
      </div>
    </>
  );
};

export default Model;
