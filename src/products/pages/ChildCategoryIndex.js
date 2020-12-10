import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";
import ChildCategoryIndexList from "../components/ChildCategoryIndexList";
import reactBootstrap, {
  Row,
  Col,
  Container,
  Button,
  Pagination,
} from "react-bootstrap";
import MainSectionOfGrandGrandChildCategoryIndex from "../components/MainSectionOfGrandGrandChildCategoryIndex";
import CartSectionOfSpecificProduct from "../components/CartSectionOfSpecificProduct";
const ChildCategoryIndex = () => {
  const childCategory = useParams().childCategory;
  console.log(childCategory);
  const [
    ChildCategoryMatchedProducts,
    setChildCategoryMatchedProducts,
  ] = useState([]);
  const location = useLocation();
  const [PaginationData, setPaginationData] = useState({});
  const [ChildCategory, setChildCategory] = useState();
  const [isCartChanged, setIsCartChanged] = useState(false);
  const [isAddedItemMessage, setIsAddedItemMessage] = useState(false);
  useEffect(() => {
    async function getChildCategoryMatchedProducts(params) {
      const search = window.location.search;
      console.log(search);
      const queryValue = new URLSearchParams(search).get("page");
      //   setQueryValue(queryValue);
      console.log(queryValue);
      let response;
      try {
        response = await Axios.get(
          process.env.REACT_APP_BACKEND_URL +
            `/products/getProductIndexByAncestorCategory/${childCategory}?page=${queryValue}`
        );
        console.log(response);
        const data = response.data;
        setChildCategoryMatchedProducts(data.products);
        setPaginationData(data.pagination);
        setChildCategory(childCategory);
      } catch (error) {
        console.log(error);
      }
    }
    getChildCategoryMatchedProducts();
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
      child category index
      <Container fluid>
        <Row>
          <MainSectionOfGrandGrandChildCategoryIndex
            GrandGrandChildCategoryMatchedProducts={
              ChildCategoryMatchedProducts
            }
            PaginationData={PaginationData}
            GrandGrandChildCategory={ChildCategory}
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

export default ChildCategoryIndex;
