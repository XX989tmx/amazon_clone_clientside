import Axios from "axios";
import React, { useEffect, useState } from "react";

const ProductIndex = () => {
  useEffect(() => {
    async function fetch(params) {
        let response;
        try {
            response = await Axios.get(
              "http://localhost:8080/api/products/productIndex/ミネラルウォーター"
            );
        } catch (error) {
            console.log(error);
        };
        console.log(response);
        const data = response.data;
        console.log(data);
    }
    fetch();
  }, []);
  return (
    <div>
      <h1>product index</h1>
    </div>
  );
};

export default ProductIndex;
