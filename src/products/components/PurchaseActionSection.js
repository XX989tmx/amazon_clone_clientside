import Axios from "axios";
import React, { useContext, useState } from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";
import AcquirablePointsInPurchaseAction from "./AcquirablePointsInPurchaseAction";
import AddToCartButtonInPurchaseAction from "./AddToCartButtonInPurchaseAction";
import AddToWishlistButton from "./AddToWishlistButton";
import DeliveryDateInPurchaseAction from "./DeliveryDateInPurchaseAction";
import ProductPriceInPurchaseAction from "./ProductPriceInPurchaseAction";
import QuantitySelector from "./QuantitySelector";
import RegisteredAddress from "./RegisteredAddress";
import Seller from "./Seller";
import StockStatusInPurchaseAction from "./StockStatusInPurchaseAction";

const PurchaseActionSection = (props) => {
  const auth = useContext(AuthContext);
  const [Quantity, setQuantity] = useState(1);
   const addProductToCart = async (event) => {
     event.preventDefault();
     let response;
     let body = {
       quantity: Quantity,
     };
     try {
       response = await Axios.post(
         process.env.REACT_APP_BACKEND_URL +
           `/users/addToCart/${auth.userId}/${props.id}?token=${auth.token}`,
         body
       );
       if (response) {
         props.changeCartHandler();
       }
     } catch (error) {
       console.log(error);
     }
   };

   const quantityChangeHandler = (event) => {
     setQuantity(event.target.value)
   }
  return (
    <Col
      xs={12}
      lg={3}
      style={{
        height: "100%",
        paddingRight: "20px",
        paddingLeft: "20px",
      }}
    >
      <ProductPriceInPurchaseAction price={props.price} />
      <AcquirablePointsInPurchaseAction price={props.price} />
      <DeliveryDateInPurchaseAction deliveryDate={props.deliveryDate} />
      <StockStatusInPurchaseAction isStock={props.isStock} />
      <QuantitySelector
        StockQuantityOptions={props.StockQuantityOptions}
        quantityChangeHandler={quantityChangeHandler}
      />
      <AddToCartButtonInPurchaseAction addProductToCart={addProductToCart} />
      <Seller seller={props.seller} />
      <RegisteredAddress />
      <AddToWishlistButton />
    </Col>
  );
};

export default PurchaseActionSection;
