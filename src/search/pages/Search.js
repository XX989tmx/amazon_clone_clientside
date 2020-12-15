import React, { useState } from "react";
import PaginationSection from "../../products/components/PaginationSection";
import ProductIndex from "../../products/components/ProductIndex";
import reactBootstrap, {
  Row,
  Col,
  Container,
  Button,
  Pagination,
} from "react-bootstrap";
import CartSectionOfSpecificProduct from "../../products/components/CartSectionOfSpecificProduct";
const Search = (props) => {
  const [PaginationData, setPaginationData] = useState({});
  const [isCartChanged, setIsCartChanged] = useState(false);
  const [isAddedItemMessage, setIsAddedItemMessage] = useState(false);
  const changeCartHandler = (event) => {
    setIsCartChanged((prev) => !prev);
  };
  const itemAddedToCartMessageHandler = () => {
    setIsAddedItemMessage(true);
    setTimeout(() => {
      setIsAddedItemMessage(false);
    }, 4000);
  };

  return (
    <div>
      search page
      {/* {props.SearchResults.map((v, i) => (
        <span key={i}>{v.name}</span>
      ))} */}
      <Container fluid="md">
        <Row>
          <Col md={10} lg={10} xl={10}>
            <ProductIndex
              GrandGrandChildCategoryMatchedProducts={props.SearchResults}
              changeCartHandler={changeCartHandler}
              itemAddedToCartMessageHandler={itemAddedToCartMessageHandler}
            />
            {/* <PaginationSection
              PaginationData={props.PaginationData}
              GrandGrandChildCategory={props.GrandGrandChildCategory}
            /> */}
          </Col>
          <CartSectionOfSpecificProduct
            isCartChanged={isCartChanged}
            changeCartHandler={changeCartHandler}
            isAddedItemMessage={isAddedItemMessage}
          />
        </Row>
      </Container>
    </div>
  );
};

export default Search;
