import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";
import CartSectionOfSpecificProduct from "../components/CartSectionOfSpecificProduct";
import GrandChildCategoryIndexList from "../components/GrandChildCategoryIndexList";
import MainSectionOfGrandGrandChildCategoryIndex from "../components/MainSectionOfGrandGrandChildCategoryIndex";
import reactBootstrap, {
  Row,
  Col,
  Container,
  Button,
  Pagination,
} from "react-bootstrap";
const GrandChildCategoryIndex = () => {
  const [
    GrandChildCategoryMatchedProducts,
    setGrandChildCategoryMatchedProducts,
  ] = useState([]);
  const [Pagination, setPagination] = useState({});
  const [GrandChildCategory, setGrandChildCategory] = useState();
  const [isCartChanged, setIsCartChanged] = useState(false);
  const [isAddedItemMessage, setIsAddedItemMessage] = useState(false);
  // grandChildCategory(スキーマ上は'parent categories')にマッチした配列を受け取る
  const grandChildCategory = useParams().grandChildCategory;
  console.log(grandChildCategory);
  const location = useLocation();
  //pagination24。list,itemコンポーネントにし、個々のProductをspecificProductpageへのLinkで囲む。
  useEffect(() => {
    async function getGrandChildCategoryMatchedProducts(params) {
      const search = window.location.search;
      console.log(search);
      const queryValue = new URLSearchParams(search).get("page");
      let response;
      try {
        response = await Axios.get(
          process.env.REACT_APP_BACKEND_URL +
            `/products/getProductIndexByParentCategory/${grandChildCategory}?page=${queryValue}`
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
      const data = response.data;
      const products = data.products;
      setGrandChildCategoryMatchedProducts(products);

      setPagination(data.pagination);

      setGrandChildCategory(grandChildCategory);
    }
    getGrandChildCategoryMatchedProducts();
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
    // grand child category index{" "}
    <Container fluid>
      <Row>
        <MainSectionOfGrandGrandChildCategoryIndex
          GrandGrandChildCategoryMatchedProducts={
            GrandChildCategoryMatchedProducts
          }
          PaginationData={Pagination}
          GrandGrandChildCategory={GrandChildCategory}
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
  );
};

export default GrandChildCategoryIndex;
