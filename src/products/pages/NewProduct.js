import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";
import categoryData from "../data/category-selector-list";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import MessageSection from "../components/MessageSection";
import HeadingSectionOfNewProduct from "../components/HeadingSectionOfNewProduct";
import ExplanationSection from "../components/ExplanationSection";
import ProductInformationInputSection from "../components/ProductInformationInputSection";
import SubmitButton from "../components/SubmitButton";
import AdditionalInformation from "../components/AdditionalInformation";
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
  const [previewUrl1, setPreviewUrl1] = useState(null);
  const [PreviewUrl2, setPreviewUrl2] = useState(null);
  const [PreviewUrl3, setPreviewUrl3] = useState(null);
  const [PreviewUrl4, setPreviewUrl4] = useState(null);
  const [PreviewUrl5, setPreviewUrl5] = useState(null);

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

  const [
    SelectedChosenGrandParentCategoryOption,
    setSelectedChosenGrandParentCategoryOption,
  ] = useState();
  const [
    SelectedChosenParentCategoryOption,
    setSelectedChosenParentCategoryOption,
  ] = useState();
  const [
    SelectedChosenChildCategoryOption,
    setSelectedChosenChildCategoryOption,
  ] = useState();
  const [
    SelectedChosenGrandChildCategoryOption,
    setSelectedChosenGrandChildCategoryOption,
  ] = useState();
  const [
    SelectedChosenGrandGrandChildCategoryOption,
    setSelectedChosenGrandGrandChildCategoryOption,
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

    const separator = ",";
    const joinedCategories =
      SelectedChosenGrandParentCategoryOption +
      separator +
      SelectedChosenParentCategoryOption +
      separator +
      SelectedChosenChildCategoryOption;
    console.log(joinedCategories);
    const ancestorCategories = joinedCategories;

    const parentCategory = SelectedChosenGrandChildCategoryOption;
    const category = SelectedChosenGrandGrandChildCategoryOption;

    try {
      const formData = new FormData();
      formData.append("name", Name);
      formData.append("price", Price);
      formData.append("deliveryDate", DeliveryDate);
      formData.append("brand", Brand);
      formData.append("stockQuantity", StockQuantity);
      formData.append("isStock", IsStock);
      formData.append("parentCategory", parentCategory);
      formData.append("categories", category);
      formData.append("ancestorCategories", ancestorCategories);
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
    setName(event);
  };
  const priceChangeHandler = (event) => {
    setPrice(event);
  };

  const deliveryDateChangeHandler = (event) => {
    setDeliveryDate(event);
  };
  const brandChangeHandler = (event) => {
    setBrand(event);
  };
  const stockQuantityChangeHandler = (event) => {
    setStockQuantity(event);
  };
  const isStockChangeHandler = (event) => {
    setIsStock(event);
  };
  const parentCategoryChangeHandler = (event) => {
    setParentCategory(event);
  };
  const categoryChangeHandler = (event) => {
    setCategory(event);
  };
  const ancestorCategoryChangeHandler = (event) => {
    setAncestorCategory(event);
  };

  const image1ChangeHandler = (event) => {
    // const previewUrl = URL.createObjectURL(event.target.files[0]);
    // setPreviewUrl1(previewUrl);
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl1(fileReader.result);
    };
    fileReader.readAsDataURL(event.target.files[0]);
    console.log(event.target.files[0]);
    setImage1(event.target.files[0]);
  };
  const image2ChangeHandler = (event) => {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl2(fileReader.result);
    };
    fileReader.readAsDataURL(file);
    setImage2(file);
  };
  const image3ChangeHandler = (event) => {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl3(fileReader.result);
    };
    fileReader.readAsDataURL(file);
    setImage3(file);
  };
  const image4ChangeHandler = (event) => {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl4(fileReader.result);
    };
    fileReader.readAsDataURL(file);
    setImage4(file);
  };
  const image5ChangeHandler = (event) => {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl5(fileReader.result);
    };
    fileReader.readAsDataURL(file);
    setImage5(file);
  };

  const grandParentCategoryInitializerChangeHandler = (event) => {
    setCategoryQuery(event);
    const categoryQuery = event;
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
    const selectedChosenGrandParentCategoryOption = event;
    console.log(selectedChosenGrandParentCategoryOption);
    setSelectedChosenGrandParentCategoryOption(
      selectedChosenGrandParentCategoryOption
    );
  };

  const chosenParentCategoryOptionsChangeHandler = (event) => {
    const selectedChosenParentCategoryOption = event;
    console.log(selectedChosenParentCategoryOption);
    setSelectedChosenParentCategoryOption(selectedChosenParentCategoryOption);
  };

  const chosenChildCategoryOptionsChangeHandler = (event) => {
    const selectedChosenChildCategoryOption = event;
    console.log(selectedChosenChildCategoryOption);
    setSelectedChosenChildCategoryOption(selectedChosenChildCategoryOption);
  };

  const chosenGrandChildCategoryOptionsChangeHandler = (event) => {
    const selectedChosenGrandChildCategoryOption = event;
    console.log(selectedChosenGrandChildCategoryOption);
    setSelectedChosenGrandChildCategoryOption(
      selectedChosenGrandChildCategoryOption
    );
  };

  const chosenGrandGrandChildCategoryOptionsChangeHandler = (event) => {
    const selectedChosenGrandGrandChildCategoryOption = event;
    console.log(selectedChosenGrandGrandChildCategoryOption);
    setSelectedChosenGrandGrandChildCategoryOption(
      selectedChosenGrandGrandChildCategoryOption
    );
  };

  const resetCategorySelector = (event) => {
    event.preventDefault();
    setIsGrandParentCategoriesSelected(false);
    const grandParentCategories = categoryData.map((v, i) => (
      <option key={i} value={v.grandParentCategory}>
        {" "}
        {v.grandParentCategory}
      </option>
    ));
    console.log(grandParentCategories);
    setGrandParentCategories(grandParentCategories);
  };

  return (
    <Container fluid="md">
      <Row>
        <Col>
          <Row>
            <Col>
              <MessageSection />
              <HeadingSectionOfNewProduct />
              <ExplanationSection />
              <form action="">
                {" "}
                <ProductInformationInputSection
                  nameChangeHandler={nameChangeHandler}
                  priceChangeHandler={priceChangeHandler}
                  deliveryDateChangeHandler={deliveryDateChangeHandler}
                  brandChangeHandler={brandChangeHandler}
                  stockQuantityChangeHandler={stockQuantityChangeHandler}
                  isStockChangeHandler={isStockChangeHandler}
                  grandParentCategoryInitializerChangeHandler={
                    grandParentCategoryInitializerChangeHandler
                  }
                  GrandParentCategories={GrandParentCategories}
                  chosenGrandParentCategoryOptionsChangeHandler={
                    chosenGrandParentCategoryOptionsChangeHandler
                  }
                  ChosenGrandParentCategoryOptions={
                    ChosenGrandParentCategoryOptions
                  }
                  chosenParentCategoryOptionsChangeHandler={
                    chosenParentCategoryOptionsChangeHandler
                  }
                  ChosenParentCategoryOptions={ChosenParentCategoryOptions}
                  ChosenChildCategoryOptions={ChosenChildCategoryOptions}
                  chosenChildCategoryOptionsChangeHandler={
                    chosenChildCategoryOptionsChangeHandler
                  }
                  chosenGrandChildCategoryOptionsChangeHandler={
                    chosenGrandChildCategoryOptionsChangeHandler
                  }
                  ChosenGrandChildOptions={ChosenGrandChildOptions}
                  chosenGrandGrandChildCategoryOptionsChangeHandler={
                    chosenGrandGrandChildCategoryOptionsChangeHandler
                  }
                  ChosenGrandGrandChildOptions={ChosenGrandGrandChildOptions}
                />
                <SubmitButton />
              </form>
              <AdditionalInformation />
            </Col>
          </Row>
        </Col>
      </Row>
      <h1>NewProduct</h1>
      {Message && <h3>{Message}</h3>}
      <form action="" onSubmit={productDataSubmitHandler}>
        <button onClick={resetCategorySelector}>
          カテゴリーをリセットする
        </button>

        {IsGrandParentCategoriesSelected && <div> </div>}
        {/* //大カテゴリー */}
        {/* 後でコンポーネント化 */}
        {/* grand child からgrand parent までの全カテゴリー */}
        {/* <input
          type="text"
          value={AncestorCategory}
          onChange={ancestorCategoryChangeHandler}
        /> */}
        {/* 中カテゴリー */}
        {/* 後でコンポーネント化 */}
        {/* grand child カテゴリー */}
        {/* <input
          type="text"
          value={ParentCategory}
          onChange={parentCategoryChangeHandler}
        /> */}
        {/* 小カテゴリー */}
        {/* 後でコンポーネント化 */}
        {/* 最も末端のgrand grand childカテゴリー */}
        {/* <input type="text" value={Category} onChange={categoryChangeHandler} /> */}
        <div>
          <img
            src={previewUrl1}
            alt=""
            style={{ width: "150px", height: "150px" }}
          />
          <input
            type="file"
            id="image1"
            accept=".jpg, .jpeg,.png"
            onChange={image1ChangeHandler}
          />
        </div>
        <div>
          <img
            src={PreviewUrl2}
            alt=""
            style={{ width: "150px", height: "150px" }}
          />
          <input
            type="file"
            id="image2"
            accept=".jpg, .jpeg,.png"
            onChange={image2ChangeHandler}
          />
        </div>
        <div>
          <img
            src={PreviewUrl3}
            alt=""
            style={{ width: "150px", height: "150px" }}
          />
          <input
            type="file"
            accept=".jpg, .jpeg,.png"
            id="image3"
            onChange={image3ChangeHandler}
          />
        </div>

        <div>
          <img
            src={PreviewUrl4}
            alt=""
            style={{ width: "150px", height: "150px" }}
          />
          <input
            type="file"
            accept=".jpg, .jpeg,.png"
            id="image4"
            onChange={image4ChangeHandler}
          />
        </div>
        <div>
          <img
            src={PreviewUrl5}
            alt=""
            style={{ width: "150px", height: "150px" }}
          />{" "}
          <input
            type="file"
            accept=".jpg, .jpeg,.png"
            id="image5"
            onChange={image5ChangeHandler}
          />
        </div>

        <button type="submit">add product</button>
      </form>
    </Container>
  );
};

export default NewProduct;
