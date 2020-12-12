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
  const [isSelected, setIsSelected] = useState(false);
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

  useEffect(() => {
    const updateQuantitySubmitHandler = async (event) => {
      const updatedQuantity = +Quantity;

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
        if (isSelected) {
          props.updateCartItemMessageHandler();
        }
      }
    };
    updateQuantitySubmitHandler();
  }, [Quantity]);

  const changeHandler = (event) => {
    setQuantity(event.target.value);
    setIsSelected(true);
  };

  return (
    <Col md={12} lg={6}>
      <select value={Quantity} onChange={changeHandler}>
        {StockQuantityOptions}
      </select>
    </Col>
  );
};

export default QuantityChangeSelector;
