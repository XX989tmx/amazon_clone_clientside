import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";

const ChildCategoryIndex = () => {
  const childCategory = useParams().childCategory;
  console.log(childCategory);
  const location = useLocation()
  useEffect(() => {
    async function getChildCategoryMatchedProducts(params) {
      let response;
      try {
        response = await Axios.get(
          process.env.REACT_APP_BACKEND_URL +
            `/products/getProductIndexByAncestorCategory/${childCategory}`
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    getChildCategoryMatchedProducts();
  }, [location]);

  return <div>child category index</div>;
};

export default ChildCategoryIndex;
