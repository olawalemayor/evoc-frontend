import React, { useEffect, useState } from "react";
import logo from "../../assets/logo_transparent.png";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import CallIcon from "@mui/icons-material/Call";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HeaderTile from "../components/headerTile";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [cartDetails, setCartDetails] = useState({
    id: 0,
    userId: 0,
    date: "2020-03-01T00:00:02.000Z",
    products: [
      {
        productId: 0,
        quantity: 0,
      },
      {
        productId: 0,
        quantity: 0,
      },
    ],
    __v: 0,
  });

  useEffect(() => {
    axios
      .get("https://evoc-db.herokuapp.com/carts/3")
      .then((cart) => setCartDetails(cart.data));
  }, [setCartDetails]);

  const setCartText = () => {
    const { products } = cartDetails;
    const quantity = products.map((product) => product.quantity);
    let numberOfItems = 0;
    for (let i = 0; i < quantity.length; i++) {
      numberOfItems += quantity[i];
    }

    return `${numberOfItems} items`;
  };

  return (
    <header>
      <div className="header">
        <div className="header-first-row">
          <div className="app-brand">
            <div className="brand-title">
              <NavLink to="/">
                <img src={logo} alt="eVOC" />
              </NavLink>
            </div>
          </div>
          <div className="header-tiles">
            <HeaderTile
              Component={AccessTimeIcon}
              content="24 hours / 7 days"
            />
            <HeaderTile Component={CallIcon} content="(234) 810 123 4567" />
          </div>
          <div className="header-tiles">
            <HeaderTile
              Component={LocalPostOfficeIcon}
              content="info@evoc.com"
            />
            <HeaderTile Component={CallIcon} content="   (234) 810 123 4567" />
          </div>
          <div className="header-tiles">
            <div className="cart-button">
              <HeaderTile
                Component={ShoppingCartIcon}
                content={setCartText()}
              />
            </div>
          </div>
        </div>
        <div className="header-second-row">
          <div className="left-header"></div>
          <div className="right-header"></div>
        </div>
      </div>
    </header>
  );
}
