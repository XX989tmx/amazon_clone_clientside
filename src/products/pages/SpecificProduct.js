import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";

const SpecificProduct = () => {
  const productId = useParams().productId;
  const [Message, setMessage] = useState();
  const auth = useContext(AuthContext);
  const [Quantity, setQuantity] = useState(1);
  const [CartStatusMessage, setCartStatusMessage] = useState();
  const [NameOfWishlist, setNameOfWishlist] = useState();

  useEffect(() => {
    async function fetch(params) {
      let response;
      try {
        response = await Axios.get(
          `http://localhost:8080/api/products/getSpecificProductById/${productId}`
        );
      } catch (error) {
        console.log(error);
      }
      console.log(response);
    }
    fetch();
  }, []);

  const addToCartHandler = async (event) => {
    event.preventDefault();
    let response;
    let body = {
      quantity: Quantity,
    };
    try {
      response = await Axios.post(
        `http://localhost:8080/api/users/addToCart/${auth.userId}/${productId}?token=${auth.token}`,
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
        `http://localhost:8080/api/wishlists/createNewWishlist/${auth.userId}?token=${auth.token}`,
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
    </div>
  );
};

export default SpecificProduct;
