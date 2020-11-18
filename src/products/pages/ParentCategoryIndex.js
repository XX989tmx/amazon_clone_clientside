import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ParentCategoryIndex = () => {
  const parentCategory = useParams().parentCategory;
  console.log(parentCategory);
  useEffect(() => {
    async function getParentCategoryMatchedProducts(params) {
      let response;
      try {
        response = await Axios.get(
          process.env.REACT_APP_BACKEND_URL +
            `/products/getProductIndexByAncestorCategory/${parentCategory}`
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    getParentCategoryMatchedProducts();
  }, []);
  return <div>parent category</div>;
};

export default ParentCategoryIndex;
