import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import BreadCrumbsSection from "./BreadCrumbsSection";
import HeaderSectionOfOrderHistory from "./HeaderSectionOfOrderHistory";
import NavigationOfOrderHistory from "./NavigationOfOrderHistory";
import OrderHistoryItemSection from "./OrderHistoryItemSection";
import PaginationSectionOfOrderHistory from "./PaginationSectionOfOrderHistory";
import SortSelectorSection from "./SortSelectorSection";
const MainSectionOfOrderHistory = (props) => {
  return (
    <Col xs={12} md={12} lg={10}>
      <BreadCrumbsSection />
      <HeaderSectionOfOrderHistory />
      <NavigationOfOrderHistory />
      <SortSelectorSection />
      <OrderHistoryItemSection />
      <PaginationSectionOfOrderHistory />
    </Col>
  );
};

export default MainSectionOfOrderHistory;
