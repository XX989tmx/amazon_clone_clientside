import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";

const SpecificProduct = () => {
  const productId = useParams().productId;
  const [Message, setMessage] = useState();
  const auth = useContext(AuthContext);
  const [Quantity, setQuantity] = useState(1);
  const [CartStatusMessage, setCartStatusMessage] = useState();
  const [NameOfWishlist, setNameOfWishlist] = useState();
  const [ExistingWishlists, setExistingWishlists] = useState([]);
  const [WishlistToAdd, setWishlistToAdd] = useState();

  useEffect(() => {
    async function fetch(params) {
      let response;
      try {
        response = await Axios.get(
          process.env.REACT_APP_BACKEND_URL +
            `/products/getSpecificProductById/${productId}`
        );
      } catch (error) {
        console.log(error);
      }
      console.log(response);
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
  }, []);

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
      <h3>{Message}</h3>
      <h5>{CartStatusMessage}</h5>
      <h1>SpecificProduct</h1>
      <form action="" onSubmit={addToCartHandler}>
        <input
          type="number"
          name=""
          id=""
          value={Quantity}
          onChange={quantityChangeHandler}
        />
        <button type="submit">add to cart</button>
      </form>

      <form action="" onSubmit={createNewWishlistHandler}>
        <input
          type="text"
          value={NameOfWishlist}
          onChange={nameOfWishlistChangeHandler}
        />
        <button type="submit">create new wishlist</button>
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
    </div>
  );
};

export default SpecificProduct;
