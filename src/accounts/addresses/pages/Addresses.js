import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../shared/context/auth-context";
import AddressList from "../components/AddressList";

const Addresses = () => {
  const auth = useContext(AuthContext);
  const [Addresses, setAddresses] = useState([]);
  useEffect(() => {
    async function getAllAddress(params) {
      let response;
      try {
        response = await Axios.get(
          `http://localhost:8080/api/addresses/getAllAddresses/${auth.userId}?token=${auth.token}`
        );
        console.log(response);
        const data = response.data;
        setAddresses(data.addresses);
      } catch (error) {
        console.log(error);
      }
    }
    getAllAddress();
  }, []);
  return (
    <div>
      <h1>Addresses</h1>
      <Link to={"/account/addresses/new"}>
        {" "}
        <p>Create New Address</p>
      </Link>
      <div>
        <AddressList />
      </div>
    </div>
  );
};

export default Addresses;
