import Axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";

const NewProduct = () => {
  const auth = useContext(AuthContext);
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

  const productDataSubmitHandler = async (event) => {
    event.preventDefault();
    let response;
    try {
      const formData = new FormData();
      formData.append("name", Name);
      formData.append("price", Price);
      formData.append("deliveryDate", DeliveryDate);
      formData.append("brand", Brand);
      formData.append("stockQuantity", StockQuantity);
      formData.append("isStock", IsStock);
      formData.append("parentCategory", ParentCategory);
      formData.append("categories", Category);
      formData.append("ancestorCategories", AncestorCategory);
      formData.append("images", Image1);
      formData.append("images", Image2);
      formData.append("images", Image3);
      formData.append("images", Image4);
      formData.append("images", Image5);
      console.log(formData);

      response = await Axios.post(
        `http://localhost:8080/api/sellers/createProduct/${encodeURIComponent(
          auth.sellerId
        )}?token=${encodeURIComponent(auth.sellerToken)}`,formData
      );
    } catch (error) {
      console.log(error);
    }
    console.log(response);
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
        <input type="text" value={Name} onChange={nameChangeHandler} />
        <input type="number" value={Price} onChange={priceChangeHandler} />
        <input type="date" value={DeliveryDate} onChange={deliveryDateChangeHandler} />
        <input type="text" value={Brand} onChange={brandChangeHandler} />
        <input type="number" value={StockQuantity} onChange={stockQuantityChangeHandler} />
        <select name="" id="isStock" onChange={isStockChangeHandler}>
          <option value="">在庫の有無</option>
          <option value="true">あり</option>
          <option value="false">なし</option>
        </select>
        <input type="text" value={ParentCategory} onChange={parentCategoryChangeHandler} />
        <input type="text" value={Category} onChange={categoryChangeHandler} />
        <input type="text" value={AncestorCategory} onChange={ancestorCategoryChangeHandler} />
        <input type="file" value={Image1} id="image1" onChange={image1ChangeHandler} />
        <input type="file" value={Image2} id="image2" onChange={image2ChangeHandler} />
        <input type="file" value={Image3} id="image3" onChange={image3ChangeHandler} />
        <input type="file" value={Image4} id="image4" onChange={image4ChangeHandler} />
        <input type="file" value={Image5} id="image5" onChange={image5ChangeHandler} />
        <button type="submit">add product</button>
      </form>
    </div>
  );
};

export default NewProduct;
