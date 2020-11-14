import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";

const HeaderNavigation = () => {
  const auth = useContext(AuthContext);
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to={"/home"}>Home Page</Link>
          </li>
          <li>
            <Link to={"/product/productIndex/:category"}>product index</Link>
          </li>
          <li>
            <Link to={"/product/new"}>add product</Link>
          </li>
          <li>
            <Link to={"/product/:productId"}>specific product</Link>
          </li>
          <li>
            <Link to={"/product/wishlistRanking/:category"}>
              wish list ranking top 50
            </Link>
          </li>
          <li>
            <Link to={"/product/newlyAdded/:category"}>
              Newly added rankin top 50
            </Link>
          </li>
          <li>
            <Link to={"/product/bestseller/:category"}>
              Best seller ranking top 50
            </Link>
          </li>
          <li>
            <Link to={"/account/overview"}>account overview</Link>
          </li>
          <li>
            <Link to={"/account/order-history"}>order history</Link>
          </li>
          <li>
            <Link to={"/account/addresses"}>address index</Link>
          </li>
          <li>
            <Link to={"/account/addresses/new"}>add address</Link>
          </li>
          <li>
            <Link to={"/account/addresses/update"}>update address</Link>
          </li>
          <li>
            <Link to={"/account/your-payments/payment-methods"}>
              {" "}
              payment methods index
            </Link>
          </li>
          <li>
            <Link to={"/account/your-payments/payment-methods/new"}>
              add new payment method
            </Link>
          </li>
          <li>
            <Link to={"/account/your-payments/payment-methods/update"}>
              update payment method
            </Link>
          </li>
          <li>
            <Link to={"/account/your-payments/transaction-history"}>
              transaction history
            </Link>
          </li>
          <li>
            <Link to={"/cart"}>cart page</Link>
          </li>
          <li>
            <Link to={"/user/auth/signup"}>signup</Link>
          </li>
          <li>
            <Link to={"/user/auth/login"}>login</Link>
          </li>
          <li>
            <button onClick={auth.logout}>logout</button>
          </li>

          <li>
            <Link to={"/seller/auth/signup"}>seller signup</Link>
          </li>

          <li>
            <Link to={"/seller/auth/login"}>seller login</Link>
          </li>
          <li>
            <button onClick={auth.sellerLogout}>seller logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNavigation;
