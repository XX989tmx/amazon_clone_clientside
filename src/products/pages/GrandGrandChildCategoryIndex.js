import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import reactBootstrap, {
  Row,
  Col,
  Container,
  Button,
  Pagination,
} from "react-bootstrap";
import { AuthContext } from "../../shared/context/auth-context";
import GrandGrandChildCategoryIndexList from "../components/GrandGrandChildCategoryIndexList";
import CartSectionOfSpecificProduct from "../components/CartSectionOfSpecificProduct";
import MainSectionOfGrandGrandChildCategoryIndex from "../components/MainSectionOfGrandGrandChildCategoryIndex";

const GrandGrandChildCategoryIndex = (props) => {
  const [
    GrandGrandChildCategoryMatchedProducts,
    setGrandGrandChildCategoryMatchedProducts,
  ] = useState({ data: [], isFetching: false });
  const [QueryValue, setQueryValue] = useState();
  const [TotalNumberOdPage, setTotalNumberOdPage] = useState();
  const [PaginationData, setPaginationData] = useState({});
  const [GrandGrandChildCategory, setGrandGrandChildCategory] = useState();
  const [isCartChanged, setIsCartChanged] = useState(false);
  // grandGrandChildCategory("categories":grandGrandChildCategory)に一致するproduct documentを配列の形で受け取る。pagination16 grandGrandChildCategoryIdをクエリにして、ドキュメントを検索。

  //pagination16。list,itemコンポーネントにし、個々のProductをspecificProductpageへのLinkで囲む。
  const grandGrandChildCategory = useParams().grandGrandChildCategory;
  console.log(grandGrandChildCategory);
  const location = useLocation();
  useEffect(() => {
    async function getGrandGrandChildCategoryMatchedProducts(params) {
      const search = window.location.search;
      console.log(search);
      const queryValue = new URLSearchParams(search).get("page");
      //   setQueryValue(queryValue);
      console.log(queryValue);
      let response;
      try {
        setGrandGrandChildCategoryMatchedProducts({
          data: [],
          isFetching: true,
        });
        response = await Axios.get(
          process.env.REACT_APP_BACKEND_URL +
            `/products/productIndex/${grandGrandChildCategory}?page=${queryValue}`
        );
        console.log(response);
        const data = response.data;
        const products = data.products;
        const perPage = data.perPage;
        const totalNumberOfItems = data.totalItems; // paginationしない場合の、response array documentの総数。paginationで、total number of itemsとして使う。
        setGrandGrandChildCategory(grandGrandChildCategory);
        setGrandGrandChildCategoryMatchedProducts({
          data: products,
          isFetching: false,
        });
        function PaginationSetting(params) {
          const currentPage = data.pagination.currentPage;
          const perPage = data.pagination.perPage;
          const totalItems = data.pagination.totalItems;
          const nextPage = data.pagination.nextPage;
          const previousPage = data.pagination.previousPage;
          const hasNextPage = data.pagination.hasNextPage;
          const hasPreviousPage = data.pagination.hasPreviousPage;
          const lastPage = data.pagination.lastPage;

          setPaginationData(data.pagination);
        }
        PaginationSetting();
      } catch (error) {
        console.log(error);
      }
    }
    getGrandGrandChildCategoryMatchedProducts();
  }, [location]);

  const changeCartHandler = (event) => {
    setIsCartChanged((prev) => !prev);
  };
  return (
    <div>
      grand grand child category index
      {/* <GrandGrandChildCategoryIndexList
        GrandGrandChildCategoryMatchedProducts={
          GrandGrandChildCategoryMatchedProducts
        }
      /> */}
      {/* <section>
        <Link
          to={`/product/index/grandGrandChildCategory/${grandGrandChildCategory}?page=1`}
        >
          1
        </Link>
        <Link
          to={`/product/index/grandGrandChildCategory/${grandGrandChildCategory}?page=2`}
        >
          2
        </Link>
        <Link
          to={`/product/index/grandGrandChildCategory/${grandGrandChildCategory}?page=3`}
        >
          3
        </Link>
        <Link
          to={`/product/index/grandGrandChildCategory/${grandGrandChildCategory}?page=4`}
        >
          4
        </Link>
      </section> */}
      <Container fluid>
        <Row>
          <MainSectionOfGrandGrandChildCategoryIndex
            GrandGrandChildCategoryMatchedProducts={
              GrandGrandChildCategoryMatchedProducts.data
            }
            PaginationData={PaginationData}
            GrandGrandChildCategory={GrandGrandChildCategory}
            changeCartHandler={changeCartHandler}
          />
          <CartSectionOfSpecificProduct
            isCartChanged={isCartChanged}
            changeCartHandler={changeCartHandler}
          />
        </Row>
      </Container>
    </div>
  );
};

export default GrandGrandChildCategoryIndex;
