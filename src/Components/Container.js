import React from "react";

function Container({ link, icon,  isHome }) {
  return (
    <li className={ isHome ? "active" : ""}>
        <a href={link}>
           <span className="icon">{icon}</span> 
        </a>
    </li>
  );
}

export default Container;
