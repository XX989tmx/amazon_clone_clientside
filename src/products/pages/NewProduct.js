import Axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";

const NewProduct = () => {
  const [Name, setName] = useState();
  const [Price, setPrice] = useState();
  const [DeliveryDate, setDeliveryDate] = useState();
  const [Brand, setBrand] = useState();
  const [StockQuantity, setStockQuantity] = useState();
  const [IsStock, setIsStock] = useState();
  const [ParentCategory, setParentCategory] = useState();
  const [Category, setCategory] = useState();
  const [AncestorCategory, setAncestorCategory] = useState();
  const [Image1, setImage1] = useState();
  const [Image2, setImage2] = useState();
  const [Image3, setImage3] = useState();
  const [Image4, setImage4] = useState();
  const [Image5, setImage5] = useState();

  const productDataSubmitHandler = (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
    } catch (error) {
      console.log(error);
    }
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };

  const deliveryDateChangeHandler = (event) => {
    setDeliveryDate(event.target.value);
  };
  const brandChangeHandler = (event) => {
    setBrand(event.target.value);
  };
  const stockQuantityChangeHandler = (event) => {
    setStockQuantity(event.target.value);
  };
  const isStockChangeHandler = (event) => {
    setIsStock(event.target.value);
  };
  const parentCategoryChangeHandler = (event) => {
    setParentCategory(event.target.value);
  };
  const categoryChangeHandler = (event) => {
    setCategory(event.target.value);
  };
  const ancestorCategoryChangeHandler = (event) => {
    setAncestorCategory(event.target.value);
  };

  const image1ChangeHandler = (event) => {
    setImage1(event.target.value);
    console.log(event.target.value);
  };
  const image2ChangeHandler = (event) => {
    setImage2(event.target.value);
  };
  const image3ChangeHandler = (event) => {
    setImage3(event.target.value);
  };
  const image4ChangeHandler = (event) => {
    setImage4(event.target.value);
  };
  const image5ChangeHandler = (event) => {
    setImage5(event.target.value);
  };

  return (
    <div>
      <h1>NewProduct</h1>
      <form action="" onSubmit={productDataSubmitHandler}>
        <input type="text" onChange={nameChangeHandler} />
        <input type="number" onChange={priceChangeHandler} />
        <input type="date" onChange={deliveryDateChangeHandler} />
        <input type="text" onChange={brandChangeHandler} />
        <input type="number" onChange={stockQuantityChangeHandler} />
        <input type="text" onChange={isStockChangeHandler} />
        <input type="text" onChange={parentCategoryChangeHandler} />
        <input type="text" onChange={categoryChangeHandler} />
        <input type="text" onChange={ancestorCategoryChangeHandler} />
        <input type="file" id="image1" onChange={image1ChangeHandler} />
        <input type="file" id="image2" onChange={image2ChangeHandler} />
        <input type="file" id="image3" onChange={image3ChangeHandler} />
        <input type="file" id="image4" onChange={image4ChangeHandler} />
        <input type="file" id="image5" onChange={image5ChangeHandler} />
        <button type="submit">add product</button>
      </form>
    </div>
  );
};

export default NewProduct;
