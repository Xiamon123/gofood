import React, { useEffect } from "react";
import {} from "@mui/material";
import {  BarChart,
  SearchRounded,
  ShoppingCartRounded, } from "@mui/icons-material";


function Header() {


  useEffect(() => {
    const toggleMenu = document.querySelector(".toggleMenu");
    toggleMenu.addEventListener("click", () => {
      document.querySelector(".rightMenu").classList.toggle("active");
    });
  }, []);




    return (
        <header>
          <img
            src="https://cdn4.vectorstock.com/i/1000x1000/85/48/cartoon-color-character-person-and-food-delivery-vector-30728548.jpg"
            alt=""
            className="logo" />
    
          <div className="inputBox">
            <SearchRounded className="searchIcon" />
            <input type="text" placeholder="Search" />
           </div>

           <div className="shoppingCart">
        <ShoppingCartRounded className="cart" />
        <div className="cart_content">
          <p>2 </p>
        </div>
      </div>
    
      <div className="profileContainer">
        <div className="imgBox">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt=""
            className="profilePic"
          />
        </div>
        <h2 className="userName">Somya Yadav</h2>
      </div>

      <div className="toggleMenu">
        <BarChart className="toggleIcon" />
      </div>


        </header>
        );
    }
    
    export default Header;