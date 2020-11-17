import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../shared/context/auth-context";

const Addresses = () => {
  const auth = useContext(AuthContext);
  useEffect(() => {
    async function getAllAddress(params) {
      let response;
      try {
        response = await Axios.get(
          `http://localhost:8080/api/addresses/getAllAddresses/${auth.userId}?token=${auth.token}`
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    getAllAddress();
  }, []);
  return (
    <div>
      <h1>Addresses</h1>
    </div>
  );
};

export default Addresses;
