import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";
import ChildCategoryIndexList from "../components/ChildCategoryIndexList";

const ChildCategoryIndex = () => {
  const childCategory = useParams().childCategory;
  console.log(childCategory);
  const [ChildCategoryMatchedProducts, setChildCategoryMatchedProducts] = useState([]);
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
        const data = response.data;
        setChildCategoryMatchedProducts(data.products)
      } catch (error) {
        console.log(error);
      }
    }
    getChildCategoryMatchedProducts();
  }, [location]);

  return <div>child category index
  <div><ChildCategoryIndexList ChildCategoryMatchedProducts={ChildCategoryMatchedProducts}/></div>
  </div>;
};

export default ChildCategoryIndex;
