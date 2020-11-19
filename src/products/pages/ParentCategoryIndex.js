import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const ParentCategoryIndex = () => {
  const parentCategory = useParams().parentCategory;
  console.log(parentCategory);
  const location = useLocation()
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
  }, [location]);
  return <div>parent category</div>;
};

export default ParentCategoryIndex;
