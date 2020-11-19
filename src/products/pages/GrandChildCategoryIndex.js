import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";
import GrandChildCategoryIndexList from "../components/GrandChildCategoryIndexList";

const GrandChildCategoryIndex = () => {
  const [
    GrandChildCategoryMatchedProducts,
    setGrandChildCategoryMatchedProducts,
  ] = useState([]);
  // grandChildCategory(スキーマ上は'parent categories')にマッチした配列を受け取る
  const grandChildCategory = useParams().grandChildCategory;
  console.log(grandChildCategory);
  const location = useLocation()
  //pagination24。list,itemコンポーネントにし、個々のProductをspecificProductpageへのLinkで囲む。
  useEffect(() => {
    async function getGrandChildCategoryMatchedProducts(params) {
      let response;
      try {
        response = await Axios.get(
          process.env.REACT_APP_BACKEND_URL +
            `/products/getProductIndexByParentCategory/${grandChildCategory}`
        );
        console.log(response);
        const data = response.data;
        const products = data.products;
        setGrandChildCategoryMatchedProducts(products);
      } catch (error) {
        console.log(error);
      }
    }
    getGrandChildCategoryMatchedProducts();
  }, [location]);

  return (
    <div>
      grand child category index{" "}
      <GrandChildCategoryIndexList
        GrandChildCategoryMatchedProducts={GrandChildCategoryMatchedProducts}
      />
    </div>
  );
};

export default GrandChildCategoryIndex;
