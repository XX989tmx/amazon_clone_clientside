import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";

const GrandChildCategoryIndex = () => {
  // grandChildCategory(スキーマ上は'parent categories')にマッチした配列を受け取る
  const grandChildCategory = useParams().grandChildCategory;
  console.log(grandChildCategory);
  useEffect(() => {
    async function getGrandChildCategoryMatchedProducts(params) {
      let response;
      try {
        response = await Axios.get(
          process.env.REACT_APP_BACKEND_URL +
            `/products/getProductIndexByParentCategory/${grandChildCategory}`
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    getGrandChildCategoryMatchedProducts();
  }, []);

  return <div>grand child category index</div>;
};

export default GrandChildCategoryIndex;
