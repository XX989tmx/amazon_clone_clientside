import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
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
      <ProductPriceInPurchaseAction price={props.price}/>
      <AcquirablePointsInPurchaseAction price={props.price}/>
      <DeliveryDateInPurchaseAction deliveryDate={props.deliveryDate}/>
      <StockStatusInPurchaseAction isStock={props.isStock}/>
      <QuantitySelector />
      <AddToCartButtonInPurchaseAction />
      <Seller seller={props.seller}/>
      <RegisteredAddress />
      <AddToWishlistButton />
    </Col>
  );
};

export default PurchaseActionSection;
