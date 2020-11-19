import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { AuthContext } from "../../shared/context/auth-context";
import GrandGrandChildCategoryIndexList from "../components/GrandGrandChildCategoryIndexList";

const GrandGrandChildCategoryIndex = (props) => {
  const [
    GrandGrandChildCategoryMatchedProducts,
    setGrandGrandChildCategoryMatchedProducts,
  ] = useState({ data: [], isFetching: false });
  const [QueryValue, setQueryValue] = useState();
  const [TotalNumberOdPage, setTotalNumberOdPage] = useState();
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
        setGrandGrandChildCategoryMatchedProducts({
          data: products,
          isFetching: false,
        });
      } catch (error) {
        console.log(error);
      }
    }
    getGrandGrandChildCategoryMatchedProducts();
  }, [location]);
  return (
    <div>
      grand grand child category index
      <GrandGrandChildCategoryIndexList
        GrandGrandChildCategoryMatchedProducts={
          GrandGrandChildCategoryMatchedProducts
        }
      />
      <section>
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
      </section>
    </div>
  );
};

export default GrandGrandChildCategoryIndex;
