import { AddRounded, RemoveRounded } from "@mui/icons-material";
import React, { useState } from "react";

function CartItem({ name, imgSrc, price }) {
    const [qty] = useState(1);

  return (
    <div className="cartItem" >
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>
      <div className="itemSection">
        <h2 className="itemName">{name}</h2>
        <div className="itemQuantity">
          <span>x {qty}</span>
          <div className="quantity">
            <RemoveRounded/>
           
            <AddRounded
            />
          </div>
        </div>
      </div>
      <p className="itemPrice">
        <span className="dolorSign">$</span>{" "}
        <span className="itemPriceValue">{price}</span>
      </p>
    </div>
  );
}

export default CartItem;