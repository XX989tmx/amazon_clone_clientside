import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";
import GrandGrandChildCategoryIndexList from "../components/GrandGrandChildCategoryIndexList";

const GrandGrandChildCategoryIndex = () => {
  const [
    GrandGrandChildCategoryMatchedProducts,
    setGrandGrandChildCategoryMatchedProducts,
  ] = useState([]);
  // grandGrandChildCategory("categories":grandGrandChildCategory)に一致するproduct documentを配列の形で受け取る。pagination16 grandGrandChildCategoryIdをクエリにして、ドキュメントを検索。

  //pagination16。list,itemコンポーネントにし、個々のProductをspecificProductpageへのLinkで囲む。
  const grandGrandChildCategory = useParams().grandGrandChildCategory;
  console.log(grandGrandChildCategory);
  useEffect(() => {
    async function getGrandGrandChildCategoryMatchedProducts(params) {
      let response;
      try {
        response = await Axios.get(
          process.env.REACT_APP_BACKEND_URL +
            `/products/productIndex/${grandGrandChildCategory}`
        );
        console.log(response);
        const data = response.data;
        const products = data.products;
        setGrandGrandChildCategoryMatchedProducts(products);
      } catch (error) {
        console.log(error);
      }
    }
    getGrandGrandChildCategoryMatchedProducts();
  }, []);
  return (
    <div>
      grand grand child category index
      <GrandGrandChildCategoryIndexList
        GrandGrandChildCategoryMatchedProducts={
          GrandGrandChildCategoryMatchedProducts
        }
      />
    </div>
  );
};

export default GrandGrandChildCategoryIndex;
