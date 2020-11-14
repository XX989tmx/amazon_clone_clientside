import React, { useCallback, useEffect, useState } from "react";

let logoutTimer;

export const useAuthSeller = (params) => {
  const [sellerToken, setsellerToken] = useState();
  const [sellerTokenExpirationDate, setsellerTokenExpirationDate] = useState();
  const [SellerId, setSellerId] = useState();

  const sellerLogin = useCallback((sellerId, token, expirationDate) => {
    setsellerToken(token);
    setSellerId(sellerId);
    const sellerTokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setsellerTokenExpirationDate(sellerTokenExpirationDate);
    localStorage.setItem(
      "sellerData",
      JSON.stringify({
        sellerId: sellerId,
        token: token,
        expiration: sellerTokenExpirationDate.toISOString(),
      })
    );
  }, []);

  const sellerLogout = useCallback(() => {
    setsellerToken(null);
    setsellerTokenExpirationDate(null);
    setSellerId(null);
    localStorage.removeItem("sellerData");
  }, []);

  useEffect(() => {
    if (sellerToken && sellerTokenExpirationDate) {
      const remainingTime =
        sellerTokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(sellerLogout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [sellerToken, sellerLogout, sellerTokenExpirationDate]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("sellerData"));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      sellerLogin(
        storedData.sellerId,
        storedData.token,
        new Date(storedData.expiration)
      );
    }
  }, [sellerLogin]);

  return { sellerToken, sellerLogin, sellerLogout, SellerId };
};
