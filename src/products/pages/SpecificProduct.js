import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const SpecificProduct = () => {
  const productId = useParams().productId;
  useEffect(() => {
    async function fetch(params) {
      let response;
      try {
        response = await Axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/products/getSpecificProductById/${productId}`
        );
      } catch (error) {
        console.log(error);
      }
      console.log(response);
    }
    fetch();
  }, []);
  return (
    <div>
      <h1>SpecificProduct</h1>
    </div>
  );
};

export default SpecificProduct;
