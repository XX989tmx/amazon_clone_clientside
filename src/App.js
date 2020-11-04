import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./static/pages/Home";
import ProductIndex from "./products/pages/ProductIndex";
import NewProduct from "./products/pages/NewProduct";
import SpecificProduct from "./products/pages/SpecificProduct";
import WishlistrankingTop50 from "./products/pages/WishlistrankingTop50";
import NewlyAddedRankingTop50 from "./products/pages/NewlyAddedRankingTop50";
import BestSellerRankingTop50 from "./products/pages/BestSellerRankingTop50";
import Overview from "./accounts/overview/pages/Overview";
import OrderHistory from "./accounts/order-history/pages/OrderHistory";
import Addresses from "./accounts/addresses/pages/Addresses";
import NewAddress from "./accounts/addresses/pages/NewAddress";
import UpdateAddress from "./accounts/addresses/pages/UpdateAddress";
import PaymentMethods from "./accounts/payments/payment-methods/pages/PaymentMethods";
import NewPaymentMethod from "./accounts/payments/payment-methods/pages/NewPaymentMethod";
import UpdatePaymentMethod from "./accounts/payments/payment-methods/pages/UpdatePaymentMethod";

function App() {
  let routes;
  routes = (
    <Switch>
      {/* //routes // 
      frontend 
        search boxはHeader部分におき、グローバルに使えるようにする。

      // api/home
      // api/product/new (admin用)
      // api/product/productIndex/:category
      (カテゴリー単位が最大 index allはない
      大カテゴリーがインデックスの最大単位でそこから小カテゴリをネスト的にインデックス.実際にProductをインデックスするのは小カテゴリからで、しかしその場合も、配列の先頭何個かにキャップをかけて部分表示。新着、注目、人気、価格帯、購入履歴、セール中、などのトピックごとに角度を変え表示。各角度ごとにサーバーにReq送り、受け取った配列を、角度ごとにコンポーネントに渡す。それぞれのカテゴリごとに同じPageをダイナミックに使い、渡す配列データだけが変わっている。大カテゴリー＝＞いくつかの角度ごとに配列先頭１０個表示とリンクをおく、というのが、Index型の表示形式の上限。　indexAll的な表示はむしろSearchクエリPageで行う。　一応カテゴリーの全商品をページネーションで読めはする。２４件が最大。なので各カテゴリごとに１ページ２４件でIndexALLをしている。
      構成：ほしい物リストの人気商品、注目の新着アイテム、注目のセール、あなたのお買い物傾向から、人気のクーポン、0-1500円、数量限定タイムセール、レビュー高評価商品、人気のギフト商品、売れ筋ランキング。それぞれ各自の基準でソートされた配列。複数の配列をレシポンスとして受け取り、コンポーネント化してレンダリング. //ページ下部にはグローバルに表示するコンポーネントとして、こちらもおすすめ、がある。// 大カテゴリのページでは、注目のカテゴリ、として、小カテゴリへのリンクが５個くらいある。
      )
      // api/product/wishlistRanking/:category (欲しいものリストの人気商品 50個をインデックス表示。配列の先頭５０個 popularProductOdWhishlists)
      // api/product/newlyAdded/:category (新着の人気ランキング５０ 50個インデックス表示。)
      // api/product/bestseller/:category (ベストセラーアイテム５０　５０個インデックス表示。)
      // api/product/searchResult?query=something (検索結果ページ)
      // api/product/:productId (specific product page)
      // api/product/bargain/:category (タイムセール)
      // api/cart (バックエンド側では、cartの中身のCRUDがある)
      // api/wishlist/all (欲しいものリスト、の、リストをインデックス表示。)
      // api/wishlist/new
      // api/wishlist/update
      // api/account/overview
      // api/account/order-history
      // api/account/addresses
      // api/account/addresses/new
      // api/account/addresses/update
      // api/account/your-payments/payment-methods
      // api/account/your-payments/payment-methods/new
      // api/account/your-payments/payment-methods/update
      // api/account/your-payments/transaction-history

      // api/buy (購入確認画面)
      // api/order-complete (購入完了画面)
      
      // api/users/auth/login
      // api/users/auth/signup

      // api/admin/auth/login
      // api/admin/auth/signup

       */}
      {/* home */}
      <Route path="/home" exact>
        <Home />
      </Route>
      {/* product */}
      <Route path="/product/new" exact>
        <NewProduct />
      </Route>
      <Route path="/product/productIndex/:category" exact>
        <ProductIndex />
      </Route>
      <Route path="/product/wishlistRanking/:category" exact>
        <WishlistrankingTop50 />
      </Route>
      <Route path="/product/newlyAdded/:category" exact>
        <NewlyAddedRankingTop50 />
      </Route>
      <Route path="/product/bestseller/:category" exact>
        <BestSellerRankingTop50 />
      </Route>
      <Route path="/product/:productId" exact>
        <SpecificProduct />
      </Route>

      {/* account */}
      <Route path="/account/overview" exact>
        <Overview />
      </Route>
      <Route path="/account/order-history" exact>
        <OrderHistory />
      </Route>
      <Route path="/account/addresses" exact>
        <Addresses />
      </Route>
      <Route path="/account/addresses/new" exact>
        <NewAddress />
      </Route>
      <Route path="/account/addresses/update" exact>
        <UpdateAddress />
      </Route>

      {/* your-payments */}
      <Route path="/account/your-payments/payment-methods" exact>
        <PaymentMethods />
      </Route>
      <Route path="/account/your-payments/payment-methods/new" exact>
        <NewPaymentMethod />
      </Route>
      <Route path="/account/your-payments/payment-methods/update" exact>
        <UpdatePaymentMethod />
      </Route>
    </Switch>
  );

  return (
    <div>
      <Router>
        {/* temporary header */}
        <div>
          <nav>
            <ul>
              <li>
                <Link to={"/home"}>Home Page</Link>
              </li>
              <li>
                <Link to={"/product/productIndex/:category"}>
                  product index
                </Link>
              </li>
              <li>
                <Link to={"/product/new"}>add product</Link>
              </li>
              <li>
                <Link to={"/product/:productId"}>specific product</Link>
              </li>
              <li>
                <Link to={"/product/wishlistRanking/:category"}>
                  wish list ranking top 50
                </Link>
              </li>
              <li>
                <Link to={"/product/newlyAdded/:category"}>
                  Newly added rankin top 50
                </Link>
              </li>
              <li>
                <Link to={"/product/bestseller/:category"}>
                  Best seller ranking top 50
                </Link>
              </li>
              <li>
                <Link to={"/account/overview"}>account overview</Link>
              </li>
              <li>
                <Link to={"/account/order-history"}>order history</Link>
              </li>
              <li>
                <Link to={"/account/addresses"}>address index</Link>
              </li>
              <li>
                <Link to={"/account/addresses/new"}>add address</Link>
              </li>
              <li>
                <Link to={"/account/addresses/update"}>update address</Link>
              </li>
              <li>
                <Link to={"/account/your-payments/payment-methods"}>
                  {" "}
                  payment methods index
                </Link>
              </li>
              <li>
                <Link to={"/account/your-payments/payment-methods/new"}>
                  add new payment method
                </Link>
              </li>
              <li>
                <Link to={"/account/your-payments/payment-methods/update"}>
                  update payment method
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* main */}
        <main> {routes}</main>
      </Router>
    </div>
  );
}

export default App;
