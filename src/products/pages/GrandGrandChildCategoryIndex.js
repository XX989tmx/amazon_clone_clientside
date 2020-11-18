import Axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { AuthContext } from '../../shared/context/auth-context';

const GrandGrandChildCategoryIndex = () => {
  // grandGrandChildCategory("categories":grandGrandChildCategory)に一致するproduct documentを配列の形で受け取る。pagination16 grandGrandChildCategoryIdをクエリにして、ドキュメントを検索。
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
      } catch (error) {
        console.log(error);
      }
    }
    getGrandGrandChildCategoryMatchedProducts();
  }, []);
  return <div>grand grand child category index</div>;
}

export default GrandGrandChildCategoryIndex;
