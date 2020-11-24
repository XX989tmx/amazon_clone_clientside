import React from 'react';
import reactBootstrap,{Container,Row,Col,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CategoryHeadingSection from './CategoryHeadingSection';
import HighRatedProducts from './HighRatedProducts';
import PopularProductsInWishlistedProducts from './PopularProductsInWishlistedProducts';
import PriceRangeBasedRecommendation from './PriceRangeBasedRecommendation';
import RecommendationFromPurchaseHistory from './RecommendationFromPurchaseHistory';

const ProductIndexSection = (props) => {
    return (
        <Col xs={12} md={10} lg={10} style={{ height: "100%" }}>
                main section
                <CategoryHeadingSection />
                <PopularProductsInWishlistedProducts />
                <HighRatedProducts />
                <RecommendationFromPurchaseHistory />
                <PriceRangeBasedRecommendation />
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
    );
}

export default ProductIndexSection;
