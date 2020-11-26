import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { AuthContext } from "../../shared/context/auth-context";
import SpecificProductList from "../components/SpecificProductList";
import MainSectionOfSpecificProduct from "../components/MainSectionOfSpecificProduct";
import CartSectionOfSpecificProduct from "../components/CartSectionOfSpecificProduct";


const SpecificProduct = () => {
  const productId = useParams().productId;
  const [Message, setMessage] = useState();
  const auth = useContext(AuthContext);
  const [Quantity, setQuantity] = useState(1);
  const [CartStatusMessage, setCartStatusMessage] = useState();
  const [NameOfWishlist, setNameOfWishlist] = useState();
  const [ExistingWishlists, setExistingWishlists] = useState([]);
  const [WishlistToAdd, setWishlistToAdd] = useState();
  const location = useLocation();
  const [SpecificProduct, setSpecificProduct] = useState([]);
  const [StockQuantityOptions, setStockQuantityOptions] = useState([]);
  useEffect(() => {
    async function fetch(params) {
      let response;
      try {
        response = await Axios.get(
          process.env.REACT_APP_BACKEND_URL +
            `/products/getSpecificProductById/${productId}`
        );

        function createStockQuantityOptions(stockQuantity) {
          //残り在庫数がダイナミックに反映されるようにする。カートに入った段階では、データベースレベルでの在庫数更新はしないが、注文が確定した段階で、データベースから注文個数分を在庫数から差し引く。その段階で、ここのstockQuantityも更新される。カートに入れた段階では、コンフリクトを心配しいなくていい。
          const arr = new Array(stockQuantity).fill(1);
          const stockQuantityOptions = arr.map((v, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ));
          console.log(stockQuantityOptions);
          setStockQuantityOptions(stockQuantityOptions);
        }
        createStockQuantityOptions(
          response.data.specificProduct[0].stockQuantity
        );

        console.log(response);
        setSpecificProduct(response.data.specificProduct);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();

    async function getAllWishlists(params) {
      let response;
      try {
        response = await Axios.get(
          process.env.REACT_APP_BACKEND_URL +
            `/wishlists/getAllWishlists/${auth.userId}?token=${auth.token}`
        );
        const data = response.data;
        const wishlists = data.wishlists;
        const existingWishlists = wishlists.map((v, i) => {
          return (
            <option value={v.id} key={i}>
              {v.name}
            </option>
          );
        });
        setExistingWishlists(existingWishlists);
      } catch (error) {
        console.log(error);
      }
    }
    getAllWishlists();
  }, [location]);

  const addToCartHandler = async (event) => {
    event.preventDefault();
    let response;
    let body = {
      quantity: Quantity,
    };
    try {
      response = await Axios.post(
        process.env.REACT_APP_BACKEND_URL +
          `/users/addToCart/${auth.userId}/${productId}?token=${auth.token}`,
        body
      );
      console.log(response);
      const responseMessage = response.data.message;
      const joinedMessage = Quantity + "点の" + responseMessage;
      if (joinedMessage) {
        setMessage(joinedMessage);
      }
      const countOfCart = response.data.cart.totalCount;
      const joinedCartStatusString =
        "現在" + countOfCart + "点の商品がカートに入っています。";
      if (joinedCartStatusString) {
        setCartStatusMessage(joinedCartStatusString);
      }
    } catch (error) {
      console.log(error);
      setMessage(error.message);
    }
  };

  const quantityChangeHandler = (event) => {
    setQuantity(event.target.value);
    console.log(event.target.value);
  };

  const createNewWishlistHandler = async (event) => {
    event.preventDefault();
    let response;
    let body = { nameOfWishlist: NameOfWishlist };
    try {
      response = await Axios.post(
        process.env.REACT_APP_BACKEND_URL +
          `/wishlists/createNewWishlist/${auth.userId}?token=${auth.token}`,
        body
      );
      console.log(response);
      setMessage(response.data.message);
    } catch (error) {
      console.log(error);
      setMessage(error.message);
    }
  };

  const nameOfWishlistChangeHandler = (event) => {
    setNameOfWishlist(event.target.value);
  };

  const wishlistToAddChangeHandler = (event) => {
    setWishlistToAdd(event.target.value);
  };

  const addProductToWishlistSubmitHandler = async (event) => {
    event.preventDefault();
    let response;
    let wishlistId = WishlistToAdd; // value of options, which is existing wishlists id
    try {
      response = await Axios.post(
        process.env.REACT_APP_BACKEND_URL +
          `/wishlists/addProductToWishlist/${auth.userId}/${productId}/${wishlistId}?token=${auth.token}`
      );
      console.log(response);
      setMessage(response.data.message);
    } catch (error) {
      console.log(error);
      setMessage(error.message);
    }
  };

  return (
    <div>
      {/* <h3>{Message}</h3>
      <h5>{CartStatusMessage}</h5>
      <h1>SpecificProduct</h1>
      <form action="" onSubmit={addToCartHandler}> */}
      {/* <input
          type="number"
          name=""
          id=""
          value={Quantity}
          onChange={quantityChangeHandler}
        /> */}
      {/* <select name="" id="" onChange={quantityChangeHandler}>
          <option value="">数量</option>
          {StockQuantityOptions}
        </select>
        <button type="submit">カートに入れる</button>
      </form>

      <form action="" onSubmit={createNewWishlistHandler}>
        <input
          type="text"
          value={NameOfWishlist}
          onChange={nameOfWishlistChangeHandler}
        />
        <button type="submit">新しくウィッシュリストを作成する</button>
      </form>

      <form action="" onSubmit={addProductToWishlistSubmitHandler}>
        <select name="" id="" onChange={wishlistToAddChangeHandler}>
          <option value="">追加するウィッシュリストを選ぶ</option>
          {ExistingWishlists}
        </select>
        <button type="submit">ウィッシュリストに追加する</button>
      </form>
      <Link to={`/account/wishlists/all?wishlistId=5fb2f03e3971ce7b8e9efb28`}>
        wishlist all
      </Link>

      <div>
        <SpecificProductList
          SpecificProduct={SpecificProduct}
          StockQuantityOptions={StockQuantityOptions}
        />
      </div> */}

      {/* {SpecificProduct.map((v, i) => (
        <UpperSection
          key={i}
          ancestorCategories={v.ancestorCategories}
          brand={v.brand}
          categories={v.categories}
          deliveryDate={v.deliveryDate}
          id={v.id}
          isStock={v.isStock}
          seller={v.seller}
          name={v.name}
          price={v.price}
          parentCategory={v.parentCategory}
          reviews={v.reviews}
          StockQuantityOptions={StockQuantityOptions}
        />
      ))} */}

      <Container
        fluid
        style={{
          // paddingRight: "10%",
          // paddingLeft: "10%",
          minHeight: "100%",
          backgroundColor: "grey",
        }}
      >
        <Row>
          <MainSectionOfSpecificProduct SpecificProduct={SpecificProduct}/>
          <CartSectionOfSpecificProduct />
        </Row>
      </Container>
    </div>
  );
};

export default SpecificProduct;
