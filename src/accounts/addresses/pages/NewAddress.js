import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../../shared/context/auth-context";
import CountrySelector from "../components/CountrySelector";
import todoufuken from "../data/todoufuken";

const NewAddress = () => {
  const auth = useContext(AuthContext);
  const history = useHistory()
  const [Todoufuken, setTodoufuken] = useState([]);
  const [Country, setCountry] = useState();
  const [Name, setName] = useState();
  const [Zipcode1, setZipcode1] = useState();
  const [Zipcode2, setZipcode2] = useState();
  const [TodoufukenValue, setTodoufukenValue] = useState();
  const [Address1, setAddress1] = useState();
  const [Address2, setAddress2] = useState();
  const [Company, setCompany] = useState();
  const [Email, setEmail] = useState();
  const [PhoneNumber, setPhoneNumber] = useState();
  const [Message, setMessage] = useState();
  useEffect(() => {
    function onLoad(params) {
      const t = todoufuken.map((v, i) => {
        return (
          <option key={i} value={v}>
            {v}
          </option>
        );
      });
      setTodoufuken(t);
    }
    onLoad();
  }, []);

  const addressInfoSubmitHandler = async (event) => {
    event.preventDefault();
    const zipCode = String(Zipcode1) + "-" + String(Zipcode2);
    console.log(zipCode);
    let body = {
      zipCode: zipCode,
      country: Country,
      name: Name,
      todoufuken: TodoufukenValue,
      addressInfo1: Address1,
      addressInfo2: Address2,
      email: Email,
      phoneNumber: PhoneNumber,
      company: Company,
    };
    console.log(body);
    let response;
    try {
      response = await Axios.post(
        `http://localhost:8080/api/addresses/createAddress/${auth.userId}?token=${auth.token}`,
        body
      );
      console.log(response);
      const responseMessage = response.data.message;
      const redirectMessage = "５秒以内に自動的にリダイレクトされます。"
      const resultMessage = responseMessage + redirectMessage;
      setMessage(resultMessage);
      if (response) {
        setTimeout(() => {
          history.push("/account/addresses");
        }, 3000);
      }
    } catch (error) {
      console.log(error);
      setMessage(error.message);
    }
  };

  const countryChangeHandler = (event) => {
    setCountry(event.target.value);
  };
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const zipcode1ChangeHandler = (event) => {
    setZipcode1(event.target.value);
  };
  const zipcode2ChangeHandler = (event) => {
    setZipcode2(event.target.value);
  };
  const todoufukennChangeHandler = (event) => {
    setTodoufukenValue(event.target.value);
  };
  const address1ChangeHandler = (event) => {
    setAddress1(event.target.value);
  };
  const address2ChangeHandler = (event) => {
    setAddress2(event.target.value);
  };
  const companyChangeHandler = (event) => {
    setCompany(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const phoneNumberChangeHandler = (event) => {
    setPhoneNumber(event.target.value);
  };
  return (
    <div>
      <h3>{Message}</h3>
      <h1>NewAddress</h1>

      <form action="" onSubmit={addressInfoSubmitHandler}>
        {/* 国・地域 */}
        <span>国・地域</span>
        <CountrySelector countryChangeHandler={countryChangeHandler} />
        {/* 氏名 */}
        <span>氏名</span>
        <input type="text" value={Name} onChange={nameChangeHandler} />
        {/* 郵便番号１ */}
        <span>郵便番号</span>
        <input
          type="number"
          value={Zipcode1}
          onChange={zipcode1ChangeHandler}
        />
        -{/* 郵便番号２ */}
        <input
          type="number"
          value={Zipcode2}
          onChange={zipcode2ChangeHandler}
        />
        {/* 都道府県 */}
        <span>都道府県</span>
        <select name="" id="" onChange={todoufukennChangeHandler}>
          <option value="">都道府県を選択してください</option>
          {Todoufuken}
        </select>
        {/* 住所１ */}
        <span>住所１</span>
        <input type="text" value={Address1} onChange={address1ChangeHandler} />
        {/* 住所２ */}
        <span>住所２</span>
        <input type="text" value={Address2} onChange={address2ChangeHandler} />
        {/* 会社名（オプション） */}
        <span>会社名</span>
        <input type="text" value={Company} onChange={companyChangeHandler} />
        {/* email */}
        <span>Eメール</span>
        <input
          type="email"
          name=""
          id=""
          value={Email}
          onChange={emailChangeHandler}
        />
        {/* 電話番号 */}
        <span>電話番号</span>
        <input
          type="number"
          value={PhoneNumber}
          onChange={phoneNumberChangeHandler}
        />
        <button type="submit">新しい住所を登録</button>
      </form>
    </div>
  );
};

export default NewAddress;
