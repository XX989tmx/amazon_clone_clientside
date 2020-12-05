import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { AuthContext } from "../../shared/context/auth-context";
import { createStockQuantityOptions } from "../../shared/functions/utility-functions";

const QuantityChangeSelector = (props) => {
  // 数量はStateで管理。デフォ１
  const [Quantity, setQuantity] = useState(props.quantity);
  const [StockQuantityOptions, setStockQuantityOptions] = useState();
  const [changedQuantity, setChangedQuantity] = useState(0);
  const auth = useContext(AuthContext);

  useEffect(() => {
    const iffy = (params) => {
      const stockQuantityOptions = createStockQuantityOptions(
        props.stockQuantity
      );
      setStockQuantityOptions(stockQuantityOptions);
    };
    iffy();
  }, []);

  const updateQuantitySubmitHandler = async (event) => {
    setQuantity(event.target.value);

    const updatedQuantity = +event.target.value;

    let response;
    let body = {
      changedQuantity: updatedQuantity,
    };

    try {
      response = await Axios.patch(
        process.env.REACT_APP_BACKEND_URL +
          `/users/changeQuantityOfItemInCart/${auth.userId}/${props.cartItemId}?token=${auth.token}`,
        body
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    if (response) {
      props.changeCartHandler();
      props.updateCartItemMessageHandler();
    }
  };

  return (
    <Col md={12} lg={6}>
      <select value={Quantity} onChange={updateQuantitySubmitHandler}>
        {StockQuantityOptions}
      </select>
    </Col>
  );
};

export default QuantityChangeSelector;
