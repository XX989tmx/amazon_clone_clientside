import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { AuthContext } from "../../../shared/context/auth-context";
import MainSectionOfOrderHistory from "../components/MainSectionOfOrderHistory";
import SideSectionOfOrderHistory from "../components/SideSectionOfOrderHistory";

const OrderHistory = () => {
  const auth = useContext(AuthContext);
  const [Message, setMessage] = useState();
  useEffect(() => {
    const fetch = async (params) => {
      let response;
      try {
        response = await Axios.get(
          process.env.REACT_APP_BACKEND_URL +
            `/orders/getAllOrderHistory/${auth.userId}?token=${auth.token}`
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
  return (
    <Container fluid="md">
      <Row>
        <MainSectionOfOrderHistory />
        <SideSectionOfOrderHistory />
      </Row>
    </Container>
  );
};

export default OrderHistory;
