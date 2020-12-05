import React from "react";
import reactBootstrap, {
  Col,
  Row,
  Navbar,
  Container,
  Form,
  FormControl,
  Button,
  Nav,
} from "react-bootstrap";
import AccountListSection from "./AccountListSection";
import CartSection from "./CartSection";
import OrderHistorySection from "./OrderHistorySection";
const AccountInformationSection = (props) => {
  return (
    <Col xs={12} md={12} xl={4}>
      <Row>
        <Col xs={1}></Col>
        <AccountListSection />
        <OrderHistorySection />
        <CartSection />
      </Row>
    </Col>
  );
};

export default AccountInformationSection;
