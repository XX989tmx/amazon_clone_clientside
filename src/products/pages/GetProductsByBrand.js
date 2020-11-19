import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import GetProductsByBrandList from "../components/GetProductsByBrandList";

const GetProductsByBrand = () => {
  const location = useLocation();
  const { brand } = useParams();
  const history = useHistory();
  useEffect(() => {
    async function getBrandMatchedProducts(params) {
      let response;
      try {
        response = await Axios.get(
          process.env.REACT_APP_BACKEND_URL +
            `/products/getProductIndexByBrand/${brand}`
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    getBrandMatchedProducts();
  }, [location]);
  return (
    <div>
      brand product index
      <GetProductsByBrandList />
    </div>
  );
};

export default GetProductsByBrand;
