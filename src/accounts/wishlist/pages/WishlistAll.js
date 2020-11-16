import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../shared/context/auth-context";

const WishlistAll = () => {
  // useEffectでリクエストを送る。メインはSpecificListへリクエスト送り、デフォルトリストとして表示。サイドに、AllWishlistへリクエスト送り、すべてのウィッシュリストをリスト表示。しかしページに表示するのは、SpecificWishlist
  //ｓpecificWishlist と　AllWishlistの両方のRouteにリクエスト送る。AllWishlistの方は、主にナビゲーションの情報に使う用途。
  const wishlistId = useParams().wishlistId;
  const auth = useContext(AuthContext);
  const [IdOfDefaultWishlist, setIdOfDefaultWishlist] = useState();
  useEffect(() => {
    async function fetch(params) {
      let idOfDefaultWishlists;
      async function getAllWishlist(params) {
        let response;
        try {
          response = await Axios.get(
            `http://localhost:8080/api/wishlists/getAllWishlists/${auth.userId}?token=${auth.token}`
          );
          console.log(response);
          const data = response.data;

          if (data.wishlists.length !== 0) {
            idOfDefaultWishlists = data.wishlists[0]._id;
          }
          //   console.log(idOfDefaultWishlists);
          //   setIdOfDefaultWishlist(idOfDefaultWishlists);
        } catch (error) {
          console.log(error);
        }
      }
      await getAllWishlist();

      async function getSpecificWishlist(params) {
        const queryString = window.location.search;
        console.log(queryString);
        const searchParams = new URLSearchParams(queryString);
        const parsedWishlistId = searchParams.get("wishlistId");
        console.log(parsedWishlistId);
        let response;
        let WishlistId;
        WishlistId = idOfDefaultWishlists; // response.data.wishlists[0].id　AccountOverviewからきた場合はParamsIdが使えないので、AllWishlistのresponseの一番先頭（できればデフォルトプロパティをスキーマレベルで指定した方がいい）のもののIdを使う。
        if (parsedWishlistId) {
          WishlistId = parsedWishlistId;
        }
        //product pageのりんくからきた場合はIdがURLセグメントにあるので、Idを使える。// product pageからのリンクで来る際は、クエリパラメーターにIdをのせる。

        try {
          response = await Axios.get(
            `http://localhost:8080/api/wishlists/getSpecificWishlist/${auth.userId}/${WishlistId}?token=${auth.token}`
          );
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      }
      await getSpecificWishlist();
    }
    fetch();
  }, []);

  // remove item from wishlist handler
  // delete wishlist handler
  return <div>wishlists</div>;
};

export default WishlistAll;
