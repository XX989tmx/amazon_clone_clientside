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
      {props.Orders.map((v, i) => (
        <OrderHistoryItemSection
          id={v.id}
          key={i}
          items={v.items}
          addedAmazonPoint={v.addedAmazonPoint}
          dateOrdered={v.dateOrdered}
          isAmazonCreditUsed={v.isAmazonCreditUsed}
          isAmazonPointUsed={v.isAmazonPointUsed}
          nameOfPaymentMethod={v.nameOfPaymentMethod}
          shipmentAddress={v.shipmentAddress}
          totalCount={v.totalCount}
          totalPrice={v.totalPrice}
          totalDiscountAmount={v.totalDiscountAmount}
          totalPriceBeforeDiscount={v.totalPriceBeforeDiscount}
          usedAmazonCredit={v.usedAmazonCredit}
          usedAmazonPoint={v.usedAmazonCredit}
        />
      ))}

      <PaginationSectionOfOrderHistory />
    </Col>
  );
};

export default MainSectionOfOrderHistory;
