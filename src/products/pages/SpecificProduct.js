import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { AuthContext } from "../../shared/context/auth-context";
import SpecificProductList from "../components/SpecificProductList";
import UpperSection from "../components/UpperSection";

const SpecificProduct = () => {
  const productId = useParams().productId;
  const [Message, setMessage] = useState();
  const auth = useContext(AuthContext);
  const [Quantity, setQuantity] = useState(1);
  const [CartStatusMessage, setCartStatusMessage] = useState();
  const [NameOfWishlist, setNameOfWishlist] = useState();
  const [ExistingWishlists, setExistingWishlists] = useState([]);
  const [WishlistToAdd, setWishlistToAdd] = useState();
  const location = useLocation();
  const [SpecificProduct, setSpecificProduct] = useState([]);
  const [StockQuantityOptions, setStockQuantityOptions] = useState([]);
  useEffect(() => {
    async function fetch(params) {
      let response;
      try {
        response = await Axios.get(
          process.env.REACT_APP_BACKEND_URL +
            `/products/getSpecificProductById/${productId}`
        );

        function createStockQuantityOptions(stockQuantity) {
          //残り在庫数がダイナミックに反映されるようにする。カートに入った段階では、データベースレベルでの在庫数更新はしないが、注文が確定した段階で、データベースから注文個数分を在庫数から差し引く。その段階で、ここのstockQuantityも更新される。カートに入れた段階では、コンフリクトを心配しいなくていい。
          const arr = new Array(stockQuantity).fill(1);
          const stockQuantityOptions = arr.map((v, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ));
          console.log(stockQuantityOptions);
          setStockQuantityOptions(stockQuantityOptions);
        }
        createStockQuantityOptions(
          response.data.specificProduct[0].stockQuantity
        );

        console.log(response);
        setSpecificProduct(response.data.specificProduct);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();

    async function getAllWishlists(params) {
      let response;
      try {
        response = await Axios.get(
          process.env.REACT_APP_BACKEND_URL +
            `/wishlists/getAllWishlists/${auth.userId}?token=${auth.token}`
        );
        const data = response.data;
        const wishlists = data.wishlists;
        const existingWishlists = wishlists.map((v, i) => {
          return (
            <option value={v.id} key={i}>
              {v.name}
            </option>
          );
        });
        setExistingWishlists(existingWishlists);
      } catch (error) {
        console.log(error);
      }
    }
    getAllWishlists();
  }, [location]);

  const addToCartHandler = async (event) => {
    event.preventDefault();
    let response;
    let body = {
      quantity: Quantity,
    };
    try {
      response = await Axios.post(
        process.env.REACT_APP_BACKEND_URL +
          `/users/addToCart/${auth.userId}/${productId}?token=${auth.token}`,
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
    console.log(event.target.value);
  };

  const createNewWishlistHandler = async (event) => {
    event.preventDefault();
    let response;
    let body = { nameOfWishlist: NameOfWishlist };
    try {
      response = await Axios.post(
        process.env.REACT_APP_BACKEND_URL +
          `/wishlists/createNewWishlist/${auth.userId}?token=${auth.token}`,
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

  const wishlistToAddChangeHandler = (event) => {
    setWishlistToAdd(event.target.value);
  };

  const addProductToWishlistSubmitHandler = async (event) => {
    event.preventDefault();
    let response;
    let wishlistId = WishlistToAdd; // value of options, which is existing wishlists id
    try {
      response = await Axios.post(
        process.env.REACT_APP_BACKEND_URL +
          `/wishlists/addProductToWishlist/${auth.userId}/${productId}/${wishlistId}?token=${auth.token}`
      );
      console.log(response);
      setMessage(response.data.message);
    } catch (error) {
      console.log(error);
      setMessage(error.message);
    }
  };

  return (
    <div>
      {/* <h3>{Message}</h3>
      <h5>{CartStatusMessage}</h5>
      <h1>SpecificProduct</h1>
      <form action="" onSubmit={addToCartHandler}> */}
      {/* <input
          type="number"
          name=""
          id=""
          value={Quantity}
          onChange={quantityChangeHandler}
        /> */}
      {/* <select name="" id="" onChange={quantityChangeHandler}>
          <option value="">数量</option>
          {StockQuantityOptions}
        </select>
        <button type="submit">カートに入れる</button>
      </form>

      <form action="" onSubmit={createNewWishlistHandler}>
        <input
          type="text"
          value={NameOfWishlist}
          onChange={nameOfWishlistChangeHandler}
        />
        <button type="submit">新しくウィッシュリストを作成する</button>
      </form>

      <form action="" onSubmit={addProductToWishlistSubmitHandler}>
        <select name="" id="" onChange={wishlistToAddChangeHandler}>
          <option value="">追加するウィッシュリストを選ぶ</option>
          {ExistingWishlists}
        </select>
        <button type="submit">ウィッシュリストに追加する</button>
      </form>
      <Link to={`/account/wishlists/all?wishlistId=5fb2f03e3971ce7b8e9efb28`}>
        wishlist all
      </Link>

      <div>
        <SpecificProductList
          SpecificProduct={SpecificProduct}
          StockQuantityOptions={StockQuantityOptions}
        />
      </div> */}

      {/* {SpecificProduct.map((v, i) => (
        <UpperSection
          key={i}
          ancestorCategories={v.ancestorCategories}
          brand={v.brand}
          categories={v.categories}
          deliveryDate={v.deliveryDate}
          id={v.id}
          isStock={v.isStock}
          seller={v.seller}
          name={v.name}
          price={v.price}
          parentCategory={v.parentCategory}
          reviews={v.reviews}
          StockQuantityOptions={StockQuantityOptions}
        />
      ))} */}

      <Container
        fluid
        style={{
          // paddingRight: "10%",
          // paddingLeft: "10%",
          minHeight: "100%",
          backgroundColor: "grey",
        }}
      >
        <Row>
          <Col
            md={10}
            lg={10}
            xl={10}
            // style={{
            //   paddingRight: "8%",
            //   paddingLeft: "8%",
            // }}
          >
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <Row>
                  <Col xs={6} xm={6} md={4} lg={3}>
                    bread clums
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col xs={5} lg={5} style={{ height: "100%" }}>
                <Row>
                  <Col xs={{ offset: 1, span: 10 }} style={{ height: "220px" }}>
                    pic1
                  </Col>
                </Row>
                <Row>
                  <Col xs={6} sm={6} md={6} lg={3} style={{ height: "120px" }}>
                    pic2
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={3} style={{ height: "120px" }}>
                    pic3
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={3} style={{ height: "120px" }}>
                    pic4
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={3} style={{ height: "120px" }}>
                    pic5
                  </Col>
                </Row>
              </Col>
              <Col
                xs={7}
                lg={4}
                style={{
                  height: "500px",
                }}
              >
                <Row>
                  <Col xs={12} style={{ height: "40px" }}>
                    title
                  </Col>
                </Row>
                <Row>
                  <Col>brand</Col>
                </Row>
                <Row>
                  <Col>reqiew</Col>
                </Row>
                <Row>
                  <Col>price</Col>
                </Row>
                <Row>
                  <Col>description</Col>
                </Row>
              </Col>
              <Col
                xs={12}
                lg={3}
                style={{
                  height: "100%",
                  paddingRight: "20px",
                  paddingLeft: "20px",
                }}
              >
                <Row>
                  <Col
                    xs={{ span: 8, offset: 2 }}
                    style={{ paddingTop: "10px", paddingBottom: "10px" }}
                  >
                    price
                  </Col>
                </Row>
                <Row>
                  <Col xs={{ span: 8, offset: 2 }}>gettable point</Col>
                </Row>
                <Row>
                  <Col xs={{ span: 8, offset: 2 }}>delivery date</Col>
                </Row>
                <Row>
                  <Col xs={{ span: 8, offset: 2 }}>stock status</Col>
                </Row>
                <Row>
                  <Col xs={{ span: 8, offset: 2 }}>
                    <select>
                      <option>quantity</option>
                    </select>
                  </Col>
                </Row>
                <Row>
                  <Col xs={{ span: 8, offset: 2 }}>
                    <Button> add to cart</Button>
                  </Col>
                </Row>
                <Row>
                  <Col xs={{ span: 8, offset: 2 }}>
                    <Link> seller</Link>
                  </Col>
                </Row>
                <Row>
                  <Col xs={{ span: 8, offset: 2 }}>
                    <Link> your registered address</Link>
                  </Col>
                </Row>
                <Row>
                  <Col xs={{ span: 8, offset: 2 }}>
                    <Button> add to wishlist</Button>
                  </Col>
                </Row>
              </Col>{" "}
            </Row>
            <Row>
              <Col xs={12} md={6} lg={4} style={{ height: "100px" }}>
                <Row style={{ height: "100%" }}>
                  <Col xs={4} lg={3}>
                    pic
                  </Col>
                  <Col xs={8} lg={9}>
                    <Row>
                      <Col>name</Col>
                    </Row>
                    <Row>
                      <Col>review</Col>
                    </Row>
                    <Row>
                      <Col>price</Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} md={6} lg={4} style={{ height: "100px" }}>
                <Row style={{ height: "100%" }}>
                  <Col xs={4} lg={3}>
                    pic2
                  </Col>
                  <Col xs={8} lg={9}>
                    <Row>
                      <Col>name</Col>
                    </Row>
                    <Row>
                      <Col>review</Col>
                    </Row>
                    <Row>
                      <Col>price</Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} md={6} lg={4} style={{ height: "100px" }}>
                <Row style={{ height: "100%" }}>
                  <Col xs={4} lg={3}>
                    pic3
                  </Col>
                  <Col xs={8} lg={9}>
                    <Row>
                      <Col>name</Col>
                    </Row>
                    <Row>
                      <Col>review</Col>
                    </Row>
                    <Row>
                      <Col>price</Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{ height: "100%" }}
              >
                <Row style={{ height: "100px" }}>
                  <Col>prodPic1</Col>+<Col>prodPic2</Col>+<Col>prodPic3</Col>
                </Row>
                <Row style={{ height: "100px" }}>
                  <Col>
                    <Row>name1</Row>
                    <Row>price1</Row>
                  </Col>
                  +
                  <Col>
                    <Row>name2</Row>
                    <Row>price2</Row>
                  </Col>
                  +
                  <Col>
                    <Row>name3</Row>
                    <Row>price3</Row>
                  </Col>
                </Row>
                <Row style={{ height: "100px" }}>
                  <Col xs={{ span: 8, offset: 2 }}>
                    <Row>
                      <Col>総額</Col>
                    </Row>
                    <Row>
                      <Col>ポイントの合計</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button>全点カートに入れる</Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{ height: "100%" }}
              >
                <Row>
                  <Col xs={8} lg={9}>
                    kanrennsurusyouhinn
                  </Col>
                  <Col xs={4} lg={3}>
                    ページ　n / n
                  </Col>
                </Row>
                <Row style={{ height: "100%" }}>
                  <Col xs={1}>p</Col>
                  <Col xs={10}>
                    <Row>
                      <Col xs={6} md={3} lg={2} style={{ height: "100%" }}>
                        <Row>
                          <Col style={{ height: "200px" }}>prodImage</Col>
                        </Row>
                        <Row>
                          <Col>text</Col>
                        </Row>
                        <Row>
                          <Col>star</Col>
                          <Col>review</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                          <Col>icon</Col>
                        </Row>
                      </Col>
                      <Col xs={6} md={3} lg={2} style={{ height: "100%" }}>
                        <Row>
                          <Col style={{ height: "200px" }}>prodImage</Col>
                        </Row>
                        <Row>
                          <Col>text</Col>
                        </Row>
                        <Row>
                          <Col>star</Col>
                          <Col>review</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                          <Col>icon</Col>
                        </Row>
                      </Col>
                      <Col xs={6} md={3} lg={2} style={{ height: "100%" }}>
                        <Row>
                          <Col style={{ height: "200px" }}>prodImage</Col>
                        </Row>
                        <Row>
                          <Col>text</Col>
                        </Row>
                        <Row>
                          <Col>star</Col>
                          <Col>review</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                          <Col>icon</Col>
                        </Row>
                      </Col>
                      <Col xs={6} md={3} lg={2} style={{ height: "100%" }}>
                        <Row>
                          <Col style={{ height: "200px" }}>prodImage</Col>
                        </Row>
                        <Row>
                          <Col>text</Col>
                        </Row>
                        <Row>
                          <Col>star</Col>
                          <Col>review</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                          <Col>icon</Col>
                        </Row>
                      </Col>
                      <Col xs={6} md={3} lg={2} style={{ height: "100%" }}>
                        <Row>
                          <Col style={{ height: "200px" }}>prodImage</Col>
                        </Row>
                        <Row>
                          <Col>text</Col>
                        </Row>
                        <Row>
                          <Col>star</Col>
                          <Col>review</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                          <Col>icon</Col>
                        </Row>
                      </Col>
                      <Col xs={6} md={3} lg={2} style={{ height: "100%" }}>
                        <Row>
                          <Col style={{ height: "200px" }}>prodImage</Col>
                        </Row>
                        <Row>
                          <Col>text</Col>
                        </Row>
                        <Row>
                          <Col>star</Col>
                          <Col>review</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                          <Col>icon</Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={1}>n</Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{ height: "100%" }}
              >
                <Row>
                  <Col xs={8} lg={9}>
                    hoshi4tuizyou
                  </Col>
                  <Col xs={4} lg={3}>
                    ページ n / n
                  </Col>
                </Row>
                <Row>
                  <Col xs={1}>p</Col>
                  <Col xs={10}>
                    <Row>
                      <Col xs={6} md={3} lg={2} style={{ height: "100%" }}>
                        <Row>
                          <Col style={{ height: "200px" }}>prodImage</Col>
                        </Row>
                        <Row>
                          <Col>text</Col>
                        </Row>
                        <Row>
                          <Col>star</Col>
                          <Col>review</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                          <Col>icon</Col>
                        </Row>
                      </Col>
                      <Col xs={6} md={3} lg={2} style={{ height: "100%" }}>
                        <Row>
                          <Col style={{ height: "200px" }}>prodImage</Col>
                        </Row>
                        <Row>
                          <Col>text</Col>
                        </Row>
                        <Row>
                          <Col>star</Col>
                          <Col>review</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                          <Col>icon</Col>
                        </Row>
                      </Col>
                      <Col xs={6} md={3} lg={2} style={{ height: "100%" }}>
                        <Row>
                          <Col style={{ height: "200px" }}>prodImage</Col>
                        </Row>
                        <Row>
                          <Col>text</Col>
                        </Row>
                        <Row>
                          <Col>star</Col>
                          <Col>review</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                          <Col>icon</Col>
                        </Row>
                      </Col>
                      <Col xs={6} md={3} lg={2} style={{ height: "100%" }}>
                        <Row>
                          <Col style={{ height: "200px" }}>prodImage</Col>
                        </Row>
                        <Row>
                          <Col>text</Col>
                        </Row>
                        <Row>
                          <Col>star</Col>
                          <Col>review</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                          <Col>icon</Col>
                        </Row>
                      </Col>
                      <Col xs={6} md={3} lg={2} style={{ height: "100%" }}>
                        <Row>
                          <Col style={{ height: "200px" }}>prodImage</Col>
                        </Row>
                        <Row>
                          <Col>text</Col>
                        </Row>
                        <Row>
                          <Col>star</Col>
                          <Col>review</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                          <Col>icon</Col>
                        </Row>
                      </Col>
                      <Col xs={6} md={3} lg={2} style={{ height: "100%" }}>
                        <Row>
                          <Col style={{ height: "200px" }}>prodImage</Col>
                        </Row>
                        <Row>
                          <Col>text</Col>
                        </Row>
                        <Row>
                          <Col>star</Col>
                          <Col>review</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                          <Col>icon</Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={1}>n</Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{ height: "100%" }}
              >
                syouhinnnosetumei
                <Row>
                  <Col xs={12}>title</Col>{" "}
                </Row>
                <Row>
                  <Col xs={12}>weight info</Col>{" "}
                </Row>
                <Row>
                  <Col xs={12} sm={6} md={6} style={{ height: "300px" }}>
                    info1
                  </Col>
                  <Col xs={12} sm={6} md={6} style={{ height: "300px" }}>
                    info2
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{ height: "570px" }}
              >
                product detail information
              </Col>
            </Row>

            <Row>
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{ height: "100%" }}
              >
                <Row>
                  <Col xs={8} lg={9}>
                    people buy this too
                  </Col>{" "}
                  <Col xs={4} lg={3}>
                    ページ n / n
                  </Col>
                </Row>
                <Row>
                  <Col xs={1}>p</Col>
                  <Col xs={10}>
                    <Row>
                      <Col xs={6} md={3} lg={2} style={{ height: "100%" }}>
                        <Row>
                          <Col style={{ height: "200px" }}>prodImage</Col>
                        </Row>
                        <Row>
                          <Col>text</Col>
                        </Row>
                        <Row>
                          <Col>star</Col>
                          <Col>review</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                          <Col>icon</Col>
                        </Row>
                      </Col>
                      <Col xs={6} md={3} lg={2} style={{ height: "100%" }}>
                        <Row>
                          <Col style={{ height: "200px" }}>prodImage</Col>
                        </Row>
                        <Row>
                          <Col>text</Col>
                        </Row>
                        <Row>
                          <Col>star</Col>
                          <Col>review</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                          <Col>icon</Col>
                        </Row>
                      </Col>
                      <Col xs={6} md={3} lg={2} style={{ height: "100%" }}>
                        <Row>
                          <Col style={{ height: "200px" }}>prodImage</Col>
                        </Row>
                        <Row>
                          <Col>text</Col>
                        </Row>
                        <Row>
                          <Col>star</Col>
                          <Col>review</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                          <Col>icon</Col>
                        </Row>
                      </Col>
                      <Col xs={6} md={3} lg={2} style={{ height: "100%" }}>
                        <Row>
                          <Col style={{ height: "200px" }}>prodImage</Col>
                        </Row>
                        <Row>
                          <Col>text</Col>
                        </Row>
                        <Row>
                          <Col>star</Col>
                          <Col>review</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                          <Col>icon</Col>
                        </Row>
                      </Col>
                      <Col xs={6} md={3} lg={2} style={{ height: "100%" }}>
                        <Row>
                          <Col style={{ height: "200px" }}>prodImage</Col>
                        </Row>
                        <Row>
                          <Col>text</Col>
                        </Row>
                        <Row>
                          <Col>star</Col>
                          <Col>review</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                          <Col>icon</Col>
                        </Row>
                      </Col>
                      <Col xs={6} md={3} lg={2} style={{ height: "100%" }}>
                        <Row>
                          <Col style={{ height: "200px" }}>prodImage</Col>
                        </Row>
                        <Row>
                          <Col>text</Col>
                        </Row>
                        <Row>
                          <Col>star</Col>
                          <Col>review</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                          <Col>icon</Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={1}>n</Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{ height: "363px" }}
              >
                recomendation
              </Col>
            </Row>
            <Row>
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{ height: "160px" }}
              >
                fumeinatenn
              </Col>
            </Row>
            <Row>
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{ height: "317px" }}
              >
                campaine
              </Col>
            </Row>
            <Row>
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{ height: "740px" }}
              >
                oshirase
              </Col>
            </Row>
          </Col>
          <Col md={2} lg={2} xl={2}>
            cart side bar
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SpecificProduct;
