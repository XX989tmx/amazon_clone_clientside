import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { AuthContext } from "../../shared/context/auth-context";
import GrandGrandChildCategoryIndexList from "../components/GrandGrandChildCategoryIndexList";
import CartSectionOfSpecificProduct from "../components/CartSectionOfSpecificProduct";

const GrandGrandChildCategoryIndex = (props) => {
  const [
    GrandGrandChildCategoryMatchedProducts,
    setGrandGrandChildCategoryMatchedProducts,
  ] = useState({ data: [], isFetching: false });
  const [QueryValue, setQueryValue] = useState();
  const [TotalNumberOdPage, setTotalNumberOdPage] = useState();
  // grandGrandChildCategory("categories":grandGrandChildCategory)に一致するproduct documentを配列の形で受け取る。pagination16 grandGrandChildCategoryIdをクエリにして、ドキュメントを検索。

  //pagination16。list,itemコンポーネントにし、個々のProductをspecificProductpageへのLinkで囲む。
  const grandGrandChildCategory = useParams().grandGrandChildCategory;
  console.log(grandGrandChildCategory);
  const location = useLocation();
  useEffect(() => {
    async function getGrandGrandChildCategoryMatchedProducts(params) {
      const search = window.location.search;
      console.log(search);
      const queryValue = new URLSearchParams(search).get("page");
      //   setQueryValue(queryValue);
      console.log(queryValue);
      let response;
      try {
        setGrandGrandChildCategoryMatchedProducts({
          data: [],
          isFetching: true,
        });
        response = await Axios.get(
          process.env.REACT_APP_BACKEND_URL +
            `/products/productIndex/${grandGrandChildCategory}?page=${queryValue}`
        );
        console.log(response);
        const data = response.data;
        const products = data.products;
        const perPage = data.perPage;
        const totalNumberOfItems = data.totalItems; // paginationしない場合の、response array documentの総数。paginationで、total number of itemsとして使う。
        setGrandGrandChildCategoryMatchedProducts({
          data: products,
          isFetching: false,
        });
      } catch (error) {
        console.log(error);
      }
    }
    getGrandGrandChildCategoryMatchedProducts();
  }, [location]);
  return (
    <div>
      grand grand child category index
      {/* <GrandGrandChildCategoryIndexList
        GrandGrandChildCategoryMatchedProducts={
          GrandGrandChildCategoryMatchedProducts
        }
      /> */}
      {/* <section>
        <Link
          to={`/product/index/grandGrandChildCategory/${grandGrandChildCategory}?page=1`}
        >
          1
        </Link>
        <Link
          to={`/product/index/grandGrandChildCategory/${grandGrandChildCategory}?page=2`}
        >
          2
        </Link>
        <Link
          to={`/product/index/grandGrandChildCategory/${grandGrandChildCategory}?page=3`}
        >
          3
        </Link>
        <Link
          to={`/product/index/grandGrandChildCategory/${grandGrandChildCategory}?page=4`}
        >
          4
        </Link>
      </section> */}
      <Container fluid>
        <Row>
          <Col md={10} lg={10} xl={10}>
            <Row>
              <Col xs={12} md={2} lg={2} style={{ height: "100%" }}>
                category section
              </Col>
              <Col xs={12} md={10} lg={10} style={{ height: "100%" }}>
                main section
                <Row>
                  <Col xs={12}>
                    <Row>category name mineral water</Row>
                    <Row>category paragraph </Row>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <Row>
                      <Col lg={5}>
                        <h2>欲しいものリストの人気商品</h2>
                      </Col>
                      <Col lg={7}>
                        <Link>もっと見る</Link>
                      </Col>{" "}
                    </Row>
                    <Row>
                      <Col
                        xs={6}
                        md={4}
                        lg={2}
                        style={{
                          height: "100%",
                          padding: "10px 25px 10px 25px",
                        }}
                      >
                        <Row style={{ height: "250px" }}>
                          <Col>image</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>review</Col>
                        </Row>
                      </Col>
                      <Col
                        xs={6}
                        md={4}
                        lg={2}
                        style={{
                          height: "100%",
                          padding: "10px 25px 10px 25px",
                        }}
                      >
                        <Row style={{ height: "250px" }}>
                          <Col>image</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>review</Col>
                        </Row>
                      </Col>
                      <Col
                        xs={6}
                        md={4}
                        lg={2}
                        style={{
                          height: "100%",
                          padding: "10px 25px 10px 25px",
                        }}
                      >
                        <Row style={{ height: "250px" }}>
                          <Col>image</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>review</Col>
                        </Row>
                      </Col>
                      <Col
                        xs={6}
                        md={4}
                        lg={2}
                        style={{
                          height: "100%",
                          padding: "10px 25px 10px 25px",
                        }}
                      >
                        <Row style={{ height: "250px" }}>
                          <Col>image</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>review</Col>
                        </Row>
                      </Col>
                      <Col
                        xs={6}
                        md={4}
                        lg={2}
                        style={{
                          height: "100%",
                          padding: "10px 25px 10px 25px",
                        }}
                      >
                        <Row style={{ height: "250px" }}>
                          <Col>image</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>review</Col>
                        </Row>
                      </Col>
                      <Col
                        xs={6}
                        md={4}
                        lg={2}
                        style={{
                          height: "100%",
                          padding: "10px 25px 10px 25px",
                        }}
                      >
                        <Row style={{ height: "250px" }}>
                          <Col>image</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>review</Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <Row>
                      <Col lg={5}>
                        <h2>レビュー高評価商品</h2>{" "}
                      </Col>
                      <Col lg={7}>
                        <Link>もっと見る</Link>
                      </Col>{" "}
                    </Row>
                    <Row>
                      <Col
                        xs={6}
                        md={4}
                        lg={2}
                        style={{
                          height: "100%",
                          padding: "10px 25px 10px 25px",
                        }}
                      >
                        <Row style={{ height: "250px" }}>
                          <Col>image</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>review</Col>
                        </Row>
                      </Col>
                      <Col
                        xs={6}
                        md={4}
                        lg={2}
                        style={{
                          height: "100%",
                          padding: "10px 25px 10px 25px",
                        }}
                      >
                        <Row style={{ height: "250px" }}>
                          <Col>image</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>review</Col>
                        </Row>
                      </Col>
                      <Col
                        xs={6}
                        md={4}
                        lg={2}
                        style={{
                          height: "100%",
                          padding: "10px 25px 10px 25px",
                        }}
                      >
                        <Row style={{ height: "250px" }}>
                          <Col>image</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>review</Col>
                        </Row>
                      </Col>
                      <Col
                        xs={6}
                        md={4}
                        lg={2}
                        style={{
                          height: "100%",
                          padding: "10px 25px 10px 25px",
                        }}
                      >
                        <Row style={{ height: "250px" }}>
                          <Col>image</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>review</Col>
                        </Row>
                      </Col>
                      <Col
                        xs={6}
                        md={4}
                        lg={2}
                        style={{
                          height: "100%",
                          padding: "10px 25px 10px 25px",
                        }}
                      >
                        <Row style={{ height: "250px" }}>
                          <Col>image</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>review</Col>
                        </Row>
                      </Col>
                      <Col
                        xs={6}
                        md={4}
                        lg={2}
                        style={{
                          height: "100%",
                          padding: "10px 25px 10px 25px",
                        }}
                      >
                        <Row style={{ height: "250px" }}>
                          <Col>image</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>review</Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <Row>
                      <Col lg={5}>
                        <h2>あなたのお買い物傾向から</h2>
                      </Col>
                      <Col lg={7}>
                        <Link>もっと見る</Link>
                      </Col>{" "}
                    </Row>
                    <Row>
                      <Col
                        xs={6}
                        md={4}
                        lg={2}
                        style={{
                          height: "100%",
                          padding: "10px 25px 10px 25px",
                        }}
                      >
                        <Row style={{ height: "250px" }}>
                          <Col>image</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>review</Col>
                        </Row>
                      </Col>
                      <Col
                        xs={6}
                        md={4}
                        lg={2}
                        style={{
                          height: "100%",
                          padding: "10px 25px 10px 25px",
                        }}
                      >
                        <Row style={{ height: "250px" }}>
                          <Col>image</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>review</Col>
                        </Row>
                      </Col>
                      <Col
                        xs={6}
                        md={4}
                        lg={2}
                        style={{
                          height: "100%",
                          padding: "10px 25px 10px 25px",
                        }}
                      >
                        <Row style={{ height: "250px" }}>
                          <Col>image</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>review</Col>
                        </Row>
                      </Col>
                      <Col
                        xs={6}
                        md={4}
                        lg={2}
                        style={{
                          height: "100%",
                          padding: "10px 25px 10px 25px",
                        }}
                      >
                        <Row style={{ height: "250px" }}>
                          <Col>image</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>review</Col>
                        </Row>
                      </Col>
                      <Col
                        xs={6}
                        md={4}
                        lg={2}
                        style={{
                          height: "100%",
                          padding: "10px 25px 10px 25px",
                        }}
                      >
                        <Row style={{ height: "250px" }}>
                          <Col>image</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>review</Col>
                        </Row>
                      </Col>
                      <Col
                        xs={6}
                        md={4}
                        lg={2}
                        style={{
                          height: "100%",
                          padding: "10px 25px 10px 25px",
                        }}
                      >
                        <Row style={{ height: "250px" }}>
                          <Col>image</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>review</Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <Row>
                      <Col lg={5}>
                        <h2>0-500円</h2>
                      </Col>
                      <Col lg={7}>
                        <Link>もっと見る</Link>
                      </Col>{" "}
                    </Row>
                    <Row>
                      <Col
                        xs={6}
                        md={4}
                        lg={2}
                        style={{
                          height: "100%",
                          padding: "10px 25px 10px 25px",
                        }}
                      >
                        <Row style={{ height: "250px" }}>
                          <Col>image</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>review</Col>
                        </Row>
                      </Col>
                      <Col
                        xs={6}
                        md={4}
                        lg={2}
                        style={{
                          height: "100%",
                          padding: "10px 25px 10px 25px",
                        }}
                      >
                        <Row style={{ height: "250px" }}>
                          <Col>image</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>review</Col>
                        </Row>
                      </Col>
                      <Col
                        xs={6}
                        md={4}
                        lg={2}
                        style={{
                          height: "100%",
                          padding: "10px 25px 10px 25px",
                        }}
                      >
                        <Row style={{ height: "250px" }}>
                          <Col>image</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>review</Col>
                        </Row>
                      </Col>
                      <Col
                        xs={6}
                        md={4}
                        lg={2}
                        style={{
                          height: "100%",
                          padding: "10px 25px 10px 25px",
                        }}
                      >
                        <Row style={{ height: "250px" }}>
                          <Col>image</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>review</Col>
                        </Row>
                      </Col>
                      <Col
                        xs={6}
                        md={4}
                        lg={2}
                        style={{
                          height: "100%",
                          padding: "10px 25px 10px 25px",
                        }}
                      >
                        <Row style={{ height: "250px" }}>
                          <Col>image</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>review</Col>
                        </Row>
                      </Col>
                      <Col
                        xs={6}
                        md={4}
                        lg={2}
                        style={{
                          height: "100%",
                          padding: "10px 25px 10px 25px",
                        }}
                      >
                        <Row style={{ height: "250px" }}>
                          <Col>image</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>review</Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <Row>
                      <Col lg={5}>
                        <h2> 売れ筋ランキング</h2>
                      </Col>
                      <Col lg={7}>
                        <Link> もっと見る</Link>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        xs={6}
                        md={4}
                        lg={2}
                        style={{
                          height: "100%",
                          padding: "10px 25px 10px 25px",
                        }}
                      >
                        <Row style={{ height: "250px" }}>
                          <Col>image</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>review</Col>
                        </Row>
                      </Col>
                      <Col
                        xs={6}
                        md={4}
                        lg={2}
                        style={{
                          height: "100%",
                          padding: "10px 25px 10px 25px",
                        }}
                      >
                        <Row style={{ height: "250px" }}>
                          <Col>image</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>review</Col>
                        </Row>
                      </Col>
                      <Col
                        xs={6}
                        md={4}
                        lg={2}
                        style={{
                          height: "100%",
                          padding: "10px 25px 10px 25px",
                        }}
                      >
                        <Row style={{ height: "250px" }}>
                          <Col>image</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>review</Col>
                        </Row>
                      </Col>
                      <Col
                        xs={6}
                        md={4}
                        lg={2}
                        style={{
                          height: "100%",
                          padding: "10px 25px 10px 25px",
                        }}
                      >
                        <Row style={{ height: "250px" }}>
                          <Col>image</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>review</Col>
                        </Row>
                      </Col>
                      <Col
                        xs={6}
                        md={4}
                        lg={2}
                        style={{
                          height: "100%",
                          padding: "10px 25px 10px 25px",
                        }}
                      >
                        <Row style={{ height: "250px" }}>
                          <Col>image</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>review</Col>
                        </Row>
                      </Col>
                      <Col
                        xs={6}
                        md={4}
                        lg={2}
                        style={{
                          height: "100%",
                          padding: "10px 25px 10px 25px",
                        }}
                      >
                        <Row style={{ height: "250px" }}>
                          <Col>image</Col>
                        </Row>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>review</Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={8} lg={7}>
                    検索結果 total item countのうち、1-last page件。bread crums
                  </Col>
                  <Col xs={12} md={4} lg={5}>
                    narabekae
                  </Col>
                </Row>
                {/* product index col を２４書くか、一個だけ書いて可変にし、数はPagination　
                で制御するか、は、要検討 おそらくダイナミック。list & item map の形。RowをListのところで使い、そこで配列をMap、子要素のItemに、Colを置き、という形。*/}
                <Row>
                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    style={{ height: "100%", padding: "15px 30px 15px 30px" }}
                  >
                    <Row>
                      <Col>best seller tag</Col>
                    </Row>
                    <Row>
                      <Col style={{ height: "230px" }}>image</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>brand</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>acquirable points</Col>
                        </Row>
                        <Row>
                          <Col>stock status</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>delivery date</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button>カートに入れる</Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={5}>reviews</Col>
                      <Col xs={7}>count</Col>
                    </Row>
                  </Col>
                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    style={{ height: "100%", padding: "15px 30px 15px 30px" }}
                  >
                    <Row>
                      <Col>best seller tag</Col>
                    </Row>
                    <Row>
                      <Col style={{ height: "230px" }}>image</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>brand</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>acquirable points</Col>
                        </Row>
                        <Row>
                          <Col>stock status</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>delivery date</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button>カートに入れる</Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={5}>reviews</Col>
                      <Col xs={7}>count</Col>
                    </Row>
                  </Col>
                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    style={{ height: "100%", padding: "15px 30px 15px 30px" }}
                  >
                    <Row>
                      <Col>best seller tag</Col>
                    </Row>
                    <Row>
                      <Col style={{ height: "230px" }}>image</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>brand</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>acquirable points</Col>
                        </Row>
                        <Row>
                          <Col>stock status</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>delivery date</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button>カートに入れる</Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={5}>reviews</Col>
                      <Col xs={7}>count</Col>
                    </Row>
                  </Col>
                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    style={{ height: "100%", padding: "15px 30px 15px 30px" }}
                  >
                    <Row>
                      <Col>best seller tag</Col>
                    </Row>
                    <Row>
                      <Col style={{ height: "230px" }}>image</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>brand</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>acquirable points</Col>
                        </Row>
                        <Row>
                          <Col>stock status</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>delivery date</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button>カートに入れる</Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={5}>reviews</Col>
                      <Col xs={7}>count</Col>
                    </Row>
                  </Col>
                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    style={{ height: "100%", padding: "15px 30px 15px 30px" }}
                  >
                    <Row>
                      <Col>best seller tag</Col>
                    </Row>
                    <Row>
                      <Col style={{ height: "230px" }}>image</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>brand</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>acquirable points</Col>
                        </Row>
                        <Row>
                          <Col>stock status</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>delivery date</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button>カートに入れる</Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={5}>reviews</Col>
                      <Col xs={7}>count</Col>
                    </Row>
                  </Col>
                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    style={{ height: "100%", padding: "15px 30px 15px 30px" }}
                  >
                    <Row>
                      <Col>best seller tag</Col>
                    </Row>
                    <Row>
                      <Col style={{ height: "230px" }}>image</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>brand</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>acquirable points</Col>
                        </Row>
                        <Row>
                          <Col>stock status</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>delivery date</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button>カートに入れる</Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={5}>reviews</Col>
                      <Col xs={7}>count</Col>
                    </Row>
                  </Col>
                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    style={{ height: "100%", padding: "15px 30px 15px 30px" }}
                  >
                    <Row>
                      <Col>best seller tag</Col>
                    </Row>
                    <Row>
                      <Col style={{ height: "230px" }}>image</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>brand</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>acquirable points</Col>
                        </Row>
                        <Row>
                          <Col>stock status</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>delivery date</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button>カートに入れる</Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={5}>reviews</Col>
                      <Col xs={7}>count</Col>
                    </Row>
                  </Col>
                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    style={{ height: "100%", padding: "15px 30px 15px 30px" }}
                  >
                    <Row>
                      <Col>best seller tag</Col>
                    </Row>
                    <Row>
                      <Col style={{ height: "230px" }}>image</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>brand</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>acquirable points</Col>
                        </Row>
                        <Row>
                          <Col>stock status</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>delivery date</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button>カートに入れる</Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={5}>reviews</Col>
                      <Col xs={7}>count</Col>
                    </Row>
                  </Col>
                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    style={{ height: "100%", padding: "15px 30px 15px 30px" }}
                  >
                    <Row>
                      <Col>best seller tag</Col>
                    </Row>
                    <Row>
                      <Col style={{ height: "230px" }}>image</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>brand</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>acquirable points</Col>
                        </Row>
                        <Row>
                          <Col>stock status</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>delivery date</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button>カートに入れる</Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={5}>reviews</Col>
                      <Col xs={7}>count</Col>
                    </Row>
                  </Col>
                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    style={{ height: "100%", padding: "15px 30px 15px 30px" }}
                  >
                    <Row>
                      <Col>best seller tag</Col>
                    </Row>
                    <Row>
                      <Col style={{ height: "230px" }}>image</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>brand</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>acquirable points</Col>
                        </Row>
                        <Row>
                          <Col>stock status</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>delivery date</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button>カートに入れる</Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={5}>reviews</Col>
                      <Col xs={7}>count</Col>
                    </Row>
                  </Col>
                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    style={{ height: "100%", padding: "15px 30px 15px 30px" }}
                  >
                    <Row>
                      <Col>best seller tag</Col>
                    </Row>
                    <Row>
                      <Col style={{ height: "230px" }}>image</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>brand</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>acquirable points</Col>
                        </Row>
                        <Row>
                          <Col>stock status</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>delivery date</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button>カートに入れる</Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={5}>reviews</Col>
                      <Col xs={7}>count</Col>
                    </Row>
                  </Col>
                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    style={{ height: "100%", padding: "15px 30px 15px 30px" }}
                  >
                    <Row>
                      <Col>best seller tag</Col>
                    </Row>
                    <Row>
                      <Col style={{ height: "230px" }}>image</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>brand</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>acquirable points</Col>
                        </Row>
                        <Row>
                          <Col>stock status</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>delivery date</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button>カートに入れる</Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={5}>reviews</Col>
                      <Col xs={7}>count</Col>
                    </Row>
                  </Col>
                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    style={{ height: "100%", padding: "15px 30px 15px 30px" }}
                  >
                    <Row>
                      <Col>best seller tag</Col>
                    </Row>
                    <Row>
                      <Col style={{ height: "230px" }}>image</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>brand</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>acquirable points</Col>
                        </Row>
                        <Row>
                          <Col>stock status</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>delivery date</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button>カートに入れる</Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={5}>reviews</Col>
                      <Col xs={7}>count</Col>
                    </Row>
                  </Col>
                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    style={{ height: "100%", padding: "15px 30px 15px 30px" }}
                  >
                    <Row>
                      <Col>best seller tag</Col>
                    </Row>
                    <Row>
                      <Col style={{ height: "230px" }}>image</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>brand</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>acquirable points</Col>
                        </Row>
                        <Row>
                          <Col>stock status</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>delivery date</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button>カートに入れる</Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={5}>reviews</Col>
                      <Col xs={7}>count</Col>
                    </Row>
                  </Col>
                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    style={{ height: "100%", padding: "15px 30px 15px 30px" }}
                  >
                    <Row>
                      <Col>best seller tag</Col>
                    </Row>
                    <Row>
                      <Col style={{ height: "230px" }}>image</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>brand</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>acquirable points</Col>
                        </Row>
                        <Row>
                          <Col>stock status</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>delivery date</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button>カートに入れる</Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={5}>reviews</Col>
                      <Col xs={7}>count</Col>
                    </Row>
                  </Col>
                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    style={{ height: "100%", padding: "15px 30px 15px 30px" }}
                  >
                    <Row>
                      <Col>best seller tag</Col>
                    </Row>
                    <Row>
                      <Col style={{ height: "230px" }}>image</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>brand</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>acquirable points</Col>
                        </Row>
                        <Row>
                          <Col>stock status</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>delivery date</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button>カートに入れる</Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={5}>reviews</Col>
                      <Col xs={7}>count</Col>
                    </Row>
                  </Col>
                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    style={{ height: "100%", padding: "15px 30px 15px 30px" }}
                  >
                    <Row>
                      <Col>best seller tag</Col>
                    </Row>
                    <Row>
                      <Col style={{ height: "230px" }}>image</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>brand</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>acquirable points</Col>
                        </Row>
                        <Row>
                          <Col>stock status</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>delivery date</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button>カートに入れる</Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={5}>reviews</Col>
                      <Col xs={7}>count</Col>
                    </Row>
                  </Col>
                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    style={{ height: "100%", padding: "15px 30px 15px 30px" }}
                  >
                    <Row>
                      <Col>best seller tag</Col>
                    </Row>
                    <Row>
                      <Col style={{ height: "230px" }}>image</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>brand</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>acquirable points</Col>
                        </Row>
                        <Row>
                          <Col>stock status</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>delivery date</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button>カートに入れる</Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={5}>reviews</Col>
                      <Col xs={7}>count</Col>
                    </Row>
                  </Col>
                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    style={{ height: "100%", padding: "15px 30px 15px 30px" }}
                  >
                    <Row>
                      <Col>best seller tag</Col>
                    </Row>
                    <Row>
                      <Col style={{ height: "230px" }}>image</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>brand</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>acquirable points</Col>
                        </Row>
                        <Row>
                          <Col>stock status</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>delivery date</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button>カートに入れる</Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={5}>reviews</Col>
                      <Col xs={7}>count</Col>
                    </Row>
                  </Col>
                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    style={{ height: "100%", padding: "15px 30px 15px 30px" }}
                  >
                    <Row>
                      <Col>best seller tag</Col>
                    </Row>
                    <Row>
                      <Col style={{ height: "230px" }}>image</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>brand</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>acquirable points</Col>
                        </Row>
                        <Row>
                          <Col>stock status</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>delivery date</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button>カートに入れる</Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={5}>reviews</Col>
                      <Col xs={7}>count</Col>
                    </Row>
                  </Col>
                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    style={{ height: "100%", padding: "15px 30px 15px 30px" }}
                  >
                    <Row>
                      <Col>best seller tag</Col>
                    </Row>
                    <Row>
                      <Col style={{ height: "230px" }}>image</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>brand</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>acquirable points</Col>
                        </Row>
                        <Row>
                          <Col>stock status</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>delivery date</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button>カートに入れる</Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={5}>reviews</Col>
                      <Col xs={7}>count</Col>
                    </Row>
                  </Col>
                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    style={{ height: "100%", padding: "15px 30px 15px 30px" }}
                  >
                    <Row>
                      <Col>best seller tag</Col>
                    </Row>
                    <Row>
                      <Col style={{ height: "230px" }}>image</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>brand</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>acquirable points</Col>
                        </Row>
                        <Row>
                          <Col>stock status</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>delivery date</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button>カートに入れる</Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={5}>reviews</Col>
                      <Col xs={7}>count</Col>
                    </Row>
                  </Col>
                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    style={{ height: "100%", padding: "15px 30px 15px 30px" }}
                  >
                    <Row>
                      <Col>best seller tag</Col>
                    </Row>
                    <Row>
                      <Col style={{ height: "230px" }}>image</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>brand</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>acquirable points</Col>
                        </Row>
                        <Row>
                          <Col>stock status</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>delivery date</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button>カートに入れる</Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={5}>reviews</Col>
                      <Col xs={7}>count</Col>
                    </Row>
                  </Col>
                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    style={{ height: "100%", padding: "15px 30px 15px 30px" }}
                  >
                    <Row>
                      <Col>best seller tag</Col>
                    </Row>
                    <Row>
                      <Col style={{ height: "230px" }}>image</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>name</Col>
                        </Row>
                        <Row>
                          <Col>brand</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>price</Col>
                        </Row>
                        <Row>
                          <Col>acquirable points</Col>
                        </Row>
                        <Row>
                          <Col>stock status</Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>delivery date</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button>カートに入れる</Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={5}>reviews</Col>
                      <Col xs={7}>count</Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col
                    xs={{ offset: 2, span: 8 }}
                    md={{ offset: 2, span: 8 }}
                    lg={{ offset: 3, span: 6 }}
                  >
                    pagination
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <CartSectionOfSpecificProduct />
        </Row>
      </Container>
    </div>
  );
};

export default GrandGrandChildCategoryIndex;
