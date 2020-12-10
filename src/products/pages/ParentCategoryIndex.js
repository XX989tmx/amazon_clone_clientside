import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import reactBootstrap, {
  Row,
  Col,
  Container,
  Button,
  Pagination,
} from "react-bootstrap";
import MainSectionOfGrandGrandChildCategoryIndex from "../components/MainSectionOfGrandGrandChildCategoryIndex";
import CartSectionOfSpecificProduct from "../components/CartSectionOfSpecificProduct";
const ParentCategoryIndex = () => {
  const parentCategory = useParams().parentCategory;
  console.log(parentCategory);
  const location = useLocation();

  const [
    ParentCategoryMatchedProducts,
    setParentCategoryMatchedProducts,
  ] = useState([]);
  const [PaginationData, setPaginationData] = useState({});
  const [ParentCategory, setParentCategory] = useState();
  const [isCartChanged, setIsCartChanged] = useState(false);
  const [isAddedItemMessage, setIsAddedItemMessage] = useState(false);

  useEffect(() => {
    async function getParentCategoryMatchedProducts(params) {
      const search = window.location.search;
      console.log(search);
      const queryValue = new URLSearchParams(search).get("page");
      //   setQueryValue(queryValue);
      console.log(queryValue);
      let response;
      try {
        response = await Axios.get(
          process.env.REACT_APP_BACKEND_URL +
            `/products/getProductIndexByAncestorCategory/${parentCategory}?page=${queryValue}`
        );
        console.log(response);
        const data = response.data;
        const products = data.products;
        setParentCategoryMatchedProducts(products);
        setPaginationData(data.pagination);
        setParentCategory(parentCategory);
      } catch (error) {
        console.log(error);
      }
    }
    getParentCategoryMatchedProducts();
  }, [location]);

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
      parent category
      <Container fluid>
        <Row>
          <MainSectionOfGrandGrandChildCategoryIndex
            GrandGrandChildCategoryMatchedProducts={
              ParentCategoryMatchedProducts
            }
            PaginationData={PaginationData}
            GrandGrandChildCategory={ParentCategory}
            changeCartHandler={changeCartHandler}
            itemAddedToCartMessageHandler={itemAddedToCartMessageHandler}
          />
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

export default ParentCategoryIndex;
