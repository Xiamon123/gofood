import "./App.css";
import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Container from "./Components/Container";
import {
  AccountBalanceWalletRounded,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";
import BannerName from "./Components/BannerName";
import SubMenuContainer from "./Components/SubMenuContainer";
import MenuCard from "./Components/MenuCard";
import {} from "./Components/Data";
import { MenuItems, Items } from "./Components/Data";
import ItemCards from "./Components/ItemCards";
import Debit from "./Components/Debit";
import CartItem from "./Components/CartItem";


function App() {

  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId === "chicken01")
  );

  
  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");
    
    function setMenuActive() {
     menuLi.forEach(n => n.classList.remove("active")); 
     this.classList.add("active");
    }

    menuLi.forEach(n => n.addEventListener("click", setMenuActive));
  
  //Menu Active toggle
  const MenuCard= document
  .querySelector(".RowContainer")
  .querySelectorAll(".MenuCard");

  function setMenuCardActive() {
    MenuCard.forEach((n) => n.classList.remove("active")); 
    this.classList.add("active");
   }
  
   MenuCard.forEach((n) => n.addEventListener("click", setMenuCardActive));
  
  }, [isMainData]);


  //set main data

const setData = (itemId) => {
  setMainData(Items.filter((element) => element.itemId === itemId));
};



  return (
    <div className="App">
    {/* Header Section */}
    <Header />
    
    {/* Main Container */}
  
    <main>
        <div  className="mainContainer">
        {/* Banner */}
        <div className="banner">
        <BannerName name={"Somya"} discount={"20"} link={"#"}/>
        <img src=""
        alt=""
        className="deliverypic"
        />
        </div>
        {/* dishContainer*/}
        <div className="dishContainer">
        
            <div className="menuCard">
              <SubMenuContainer name={"Non-Veg Category"} />
            </div>

            <div className="RowContainer">
            {MenuItems &&
                MenuItems.map((data) => (
                  <div key={data.id}   onClick = { () => setData(data.itemId)}>
                    <MenuCard
                      imgSrc={data.imgSrc}
                      name={data.name}
                      isActive={ data.id === 1 ? true : false}
                    />
            </div>
            ))}
            
              
            

            </div>
            
            <div className="dishItemContainer">

            {  
              isMainData && isMainData.map(data => (
               <ItemCards
                  key={data.id}
                    itemId={data.id}
                    imgSrc={data.imgSrc}
                    name={data.name}
                    ratings={data.ratings}
                    price={data.price}
                  />
        
              
              ))
        }

        </div>
        </div>
        </div>
      
        <div className="rightMenu">
          <div className="debitCardContainer">
            <div className="debit">
              <Debit />
            </div>
          </div>
          
          <div className="cartCheckOutContainer">
            <div className="cartContainer">
              <SubMenuContainer name={"Cart Item"}/>
            </div>
          </div>
          <div className="cartItem">
            <CartItem
            name={"Chicken"}
            imgSrc={"data:image/jpeg;base64,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"}
            
            price={"7.95"}
            />
             <div className="totalSection">
              <h3>Total</h3>
              <p><span>$ 45.0</span></p>
             </div>
            <button className="checkOut">Check Out</button>
          </div>
        </div>
          </main>

    {/* Bottom Menu */}
    <div className="bottomMenu">
    <ul id="menu">
    
    {/* prettier-ignore */}
          <Container link = {'#'} icon = {<HomeRounded />} isHome/>
          {/* prettier-ignore */}
          <Container link = {'#'} icon = {<Chat />}  />
          {/* prettier-ignore */}
          <Container link = {'#'} icon = {<AccountBalanceWalletRounded />}  />
          {/* prettier-ignore */}
          <Container link = {'#'} icon = {<Favorite />} />
          {/* prettier-ignore */}
          <Container link = {'#'} icon = {<SummarizeRounded />}  />
          {/* prettier-ignore */}
          <Container link = {'#'} icon = {<Settings />}  />
          <div className="indicator"></div>
          
        </ul>
      </div>
      </div>
  );
}

export default App;
