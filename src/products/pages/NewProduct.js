import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";
import categoryData from "../data/category-selector-list";

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
  const [Message, setMessage] = useState("");

  const [GrandParentCategories, setGrandParentCategories] = useState([]);
  const [categoryQuery, setCategoryQuery] = useState();
  const [
    IsGrandParentCategoriesSelected,
    setIsGrandParentCategoriesSelected,
  ] = useState(false);

  const [
    ChosenGrandParentCategoryOptions,
    setChosenGrandParentCategoryOptions,
  ] = useState();
  const [
    ChosenParentCategoryOptions,
    setChosenParentCategoryOptions,
  ] = useState();
  const [
    ChosenChildCategoryOptions,
    setChosenChildCategoryOptions,
  ] = useState();
  const [ChosenGrandChildOptions, setChosenGrandChildOptions] = useState();
  const [
    ChosenGrandGrandChildOptions,
    setChosenGrandGrandChildOptions,
  ] = useState();

  // 最初にすべてのgrandParentCategoryをCateogryDataから読み出し、配列にしOptionにする。
  //次に出品者にそのOptionからgrandParentCategoryを選ばせたら、その選ばれたカテゴリーをstatevariableにセットしクエリにする。そのクエリを使い、そのguranParentCategory配下のオブジェクトをfindで見つけ、変数にいれる。
  // そのオブジェクトを使い、parentCategory,childcategory,GrandChildCategory,GrandGrnadChildcategoryそれぞれの配列を取り出し、各自変数に入れる。それらの変数を使い、それぞれoptionタグにする。それらを出品者に選ばせる。選んだ後は、grandGrandChild category を'categories' filedに、grandChild categoryを、'parent category' filedに、それよりも上のすべてのカテゴリー種を、'ancestors categories' filedに変数を使いセットする。
  //表示形式としては、grandParentCategoryが選択されるまでは、配下のSelectorはconditional renderingで非表示にしてもいい（grandParentCategoryが選択された段階で、trueにする）。
  // parentCategory,childcategory,GrandChildCategory,GrandGrnadChildcategoryらカテゴリーの表示名は、上から順に、大カテゴリー、中カテゴリー、小カテゴリー、個別カテゴリー、という表示名にでもする。

  useEffect(() => {
    async function onLoad(params) {
      const grandParentCategories = categoryData.map((v, i) => (
        <option key={i} value={v.grandParentCategory}>
          {" "}
          {v.grandParentCategory}
        </option>
      ));
      console.log(grandParentCategories);
      setGrandParentCategories(grandParentCategories);
    }
    onLoad();
  }, []);

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
        process.env.REACT_APP_BACKEND_URL +
          `/sellers/createProduct/${encodeURIComponent(
            auth.sellerId
          )}?token=${encodeURIComponent(auth.sellerToken)}`,
        formData
      );
      console.log(response);
      setMessage(response.data.message);
    } catch (error) {
      console.log(error.message);
      setMessage(error.message);
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

  const grandParentCategoryInitializerChangeHandler = (event) => {
    setCategoryQuery(event.target.value);
    const categoryQuery = event.target.value;
    const targetIndex = categoryData.findIndex(
      (v) => v.grandParentCategory === categoryQuery
    );
    const chosenCategoryTree = categoryData[targetIndex];
    console.log(chosenCategoryTree);

    //grandParentCategory :string
    const chosenGrandParentCategory = chosenCategoryTree.grandParentCategory;
    console.log(chosenGrandParentCategory);
    // create options
    const chosenGrandParentCategoryOption = (
      <option value={chosenGrandParentCategory}>
        {chosenGrandParentCategory}
      </option>
    );
    setChosenGrandParentCategoryOptions(chosenGrandParentCategoryOption);
    //parentCategory :array
    const chosenParentCategory = chosenCategoryTree.parentCategory;
    console.log(chosenParentCategory);
    // create options
    const chosenParentCategoryOptions = chosenParentCategory.map((v, i) => (
      <option key={i} value={v}>
        {v}
      </option>
    ));
    setChosenParentCategoryOptions(chosenParentCategoryOptions);
    //childCategory array
    const chosenChildCategory = chosenCategoryTree.childCategory;
    console.log(chosenChildCategory);
    // create options
    const chosenChildCategoryOptions = chosenChildCategory.map((v, i) => (
      <option key={i} value={v}>
        {v}
      </option>
    ));
    setChosenChildCategoryOptions(chosenChildCategoryOptions);
    //grandChildCategory string
    const chosenGrandChildCategory =
      chosenCategoryTree.grandChildCategory[0].grandChildCategory;
    console.log(chosenGrandChildCategory);
    // create options
    const chosenGrandChildCategoryOption = (
      <option value={chosenGrandChildCategory}>
        {chosenGrandChildCategory}
      </option>
    );
    setChosenGrandChildOptions(chosenGrandChildCategoryOption);
    //grandGrandChildCategory :array
    const chosenGrandGrandChildCategory =
      chosenCategoryTree.grandChildCategory[0].grandGrandChildCategory;
    console.log(chosenGrandGrandChildCategory);
    // create options
    const chosenGrandGrandChildCategoryOptions = chosenGrandGrandChildCategory.map(
      (v, i) => (
        <option key={i} value={v}>
          {v}
        </option>
      )
    );
    setChosenGrandGrandChildOptions(chosenGrandGrandChildCategoryOptions);

    setIsGrandParentCategoriesSelected(true);
  };

  const chosenGrandParentCategoryOptionsChangeHandler = (event) => {
    const selectedChosenGrandParentCategoryOption = event.target.value;
  };

  const chosenParentCategoryOptionsChangeHandler = (event) => {
    const selectedChosenParentCategoryOption = event.target.value;
  };

  const chosenChildCategoryOptionsChangeHandler = (event) => {
    const selectedChosenChildCategoryOption = event.target.value;
  };

  const chosenGrandChildCategoryOptionsChangeHandler = (event) => {
    const selectedChosenGrandChildCategoryOption = event.target.value;
  };

  const chosenGrandGrandChildCategoryOptionsChangeHandler = (event) => {
    const selectedChosenGrandGrandChildCategoryOption = event.target.value;
  };

  return (
    <div>
      <h1>NewProduct</h1>
      {Message && <h3>{Message}</h3>}
      <form action="" onSubmit={productDataSubmitHandler}>
        <input type="text" value={Name} onChange={nameChangeHandler} />
        <input type="number" value={Price} onChange={priceChangeHandler} />
        <input
          type="date"
          value={DeliveryDate}
          onChange={deliveryDateChangeHandler}
        />
        <input type="text" value={Brand} onChange={brandChangeHandler} />
        <input
          type="number"
          value={StockQuantity}
          onChange={stockQuantityChangeHandler}
        />
        <select name="" id="isStock" onChange={isStockChangeHandler}>
          <option value="">在庫の有無</option>
          <option value="true">あり</option>
          <option value="false">なし</option>
        </select>

        <select
          name=""
          id=""
          onChange={grandParentCategoryInitializerChangeHandler}
        >
          <option value="">カテゴリーを選択してください</option>
          {GrandParentCategories}
        </select>

        {/* grand parent category */}
        <select
          name=""
          id=""
          onChange={chosenGrandParentCategoryOptionsChangeHandler}
        >
          <option value="">grand parent category</option>
          {ChosenGrandParentCategoryOptions}
        </select>

        {/* parent category */}
        <select
          name=""
          id=""
          onChange={chosenParentCategoryOptionsChangeHandler}
        >
          <option value="">parent category</option>
          {ChosenParentCategoryOptions}
        </select>

        {/* child category */}
        <select
          name=""
          id=""
          onChange={chosenChildCategoryOptionsChangeHandler}
        >
          <option value="">child category</option>
          {ChosenChildCategoryOptions}
        </select>

        {/* grand child category */}
        <select
          name=""
          id=""
          onChange={chosenGrandChildCategoryOptionsChangeHandler}
        >
          <option value=""></option>
          {ChosenGrandChildOptions}
        </select>

        {/* grand grand child category */}
        <select
          name=""
          id=""
          onChange={chosenGrandGrandChildCategoryOptionsChangeHandler}
        >
          <option value="">grand grand child category</option>
          {ChosenGrandGrandChildOptions}
        </select>

        {/* //大カテゴリー */}
        {/* 後でコンポーネント化 */}
        {/* grand child からgrand parent までの全カテゴリー */}
        <input
          type="text"
          value={AncestorCategory}
          onChange={ancestorCategoryChangeHandler}
        />
        {/* 中カテゴリー */}
        {/* 後でコンポーネント化 */}
        {/* grand child カテゴリー */}
        <input
          type="text"
          value={ParentCategory}
          onChange={parentCategoryChangeHandler}
        />
        {/* 小カテゴリー */}
        {/* 後でコンポーネント化 */}
        {/* 最も末端のgrand grand childカテゴリー */}
        <input type="text" value={Category} onChange={categoryChangeHandler} />
        <input
          type="file"
          value={Image1}
          id="image1"
          onChange={image1ChangeHandler}
        />
        <input
          type="file"
          value={Image2}
          id="image2"
          onChange={image2ChangeHandler}
        />
        <input
          type="file"
          value={Image3}
          id="image3"
          onChange={image3ChangeHandler}
        />
        <input
          type="file"
          value={Image4}
          id="image4"
          onChange={image4ChangeHandler}
        />
        <input
          type="file"
          value={Image5}
          id="image5"
          onChange={image5ChangeHandler}
        />
        <button type="submit">add product</button>
      </form>
    </div>
  );
};

export default NewProduct;
