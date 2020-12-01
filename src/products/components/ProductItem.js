import React from "react";
import reactBootstrap, { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";
import BestSellerTag from "./BestSellerTag";
import ProductImage from "./ProductImage";
import ProductNameAndBrand from "./ProductNameAndBrand";
import ProductPriceRelatedSection from "./ProductPriceRelatedSection";
import ProductReviewsRelatedSection from "./ProductReviewsRelatedSection";

const ProductItem = (props) => {
  return (
    <Col
      xs={6}
      md={4}
      lg={3}
      style={{ height: "100%", padding: "15px 30px 15px 30px" }}
    >
      <Link to={`/product/${props.id}`}>
        <BestSellerTag />
        <ProductImage image={props.images[0] ? props.images[0] : ''}/>
        <ProductNameAndBrand name={props.name} brand={props.brand} />
        <ProductPriceRelatedSection price={props.price} />
      </Link>
      <AddToCartButton changeCartHandler={props.changeCartHandler} id={props.id} />
      <ProductReviewsRelatedSection />
    </Col>

    //   <Col
    //     xs={6}
    //     md={4}
    //     lg={3}
    //     style={{ height: "100%", padding: "15px 30px 15px 30px" }}
    //   >
    //     <Row>
    //       <Col>best seller tag</Col>
    //     </Row>
    //     <Row>
    //       <Col style={{ height: "230px" }}>image</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>name</Col>
    //         </Row>
    //         <Row>
    //           <Col>brand</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>price</Col>
    //         </Row>
    //         <Row>
    //           <Col>acquirable points</Col>
    //         </Row>
    //         <Row>
    //           <Col>stock status</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>delivery date</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Button>カートに入れる</Button>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col xs={5}>reviews</Col>
    //       <Col xs={7}>count</Col>
    //     </Row>
    //   </Col>
    //   <Col
    //     xs={6}
    //     md={4}
    //     lg={3}
    //     style={{ height: "100%", padding: "15px 30px 15px 30px" }}
    //   >
    //     <Row>
    //       <Col>best seller tag</Col>
    //     </Row>
    //     <Row>
    //       <Col style={{ height: "230px" }}>image</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>name</Col>
    //         </Row>
    //         <Row>
    //           <Col>brand</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>price</Col>
    //         </Row>
    //         <Row>
    //           <Col>acquirable points</Col>
    //         </Row>
    //         <Row>
    //           <Col>stock status</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>delivery date</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Button>カートに入れる</Button>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col xs={5}>reviews</Col>
    //       <Col xs={7}>count</Col>
    //     </Row>
    //   </Col>
    //   <Col
    //     xs={6}
    //     md={4}
    //     lg={3}
    //     style={{ height: "100%", padding: "15px 30px 15px 30px" }}
    //   >
    //     <Row>
    //       <Col>best seller tag</Col>
    //     </Row>
    //     <Row>
    //       <Col style={{ height: "230px" }}>image</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>name</Col>
    //         </Row>
    //         <Row>
    //           <Col>brand</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>price</Col>
    //         </Row>
    //         <Row>
    //           <Col>acquirable points</Col>
    //         </Row>
    //         <Row>
    //           <Col>stock status</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>delivery date</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Button>カートに入れる</Button>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col xs={5}>reviews</Col>
    //       <Col xs={7}>count</Col>
    //     </Row>
    //   </Col>
    //   <Col
    //     xs={6}
    //     md={4}
    //     lg={3}
    //     style={{ height: "100%", padding: "15px 30px 15px 30px" }}
    //   >
    //     <Row>
    //       <Col>best seller tag</Col>
    //     </Row>
    //     <Row>
    //       <Col style={{ height: "230px" }}>image</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>name</Col>
    //         </Row>
    //         <Row>
    //           <Col>brand</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>price</Col>
    //         </Row>
    //         <Row>
    //           <Col>acquirable points</Col>
    //         </Row>
    //         <Row>
    //           <Col>stock status</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>delivery date</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Button>カートに入れる</Button>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col xs={5}>reviews</Col>
    //       <Col xs={7}>count</Col>
    //     </Row>
    //   </Col>
    //   <Col
    //     xs={6}
    //     md={4}
    //     lg={3}
    //     style={{ height: "100%", padding: "15px 30px 15px 30px" }}
    //   >
    //     <Row>
    //       <Col>best seller tag</Col>
    //     </Row>
    //     <Row>
    //       <Col style={{ height: "230px" }}>image</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>name</Col>
    //         </Row>
    //         <Row>
    //           <Col>brand</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>price</Col>
    //         </Row>
    //         <Row>
    //           <Col>acquirable points</Col>
    //         </Row>
    //         <Row>
    //           <Col>stock status</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>delivery date</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Button>カートに入れる</Button>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col xs={5}>reviews</Col>
    //       <Col xs={7}>count</Col>
    //     </Row>
    //   </Col>
    //   <Col
    //     xs={6}
    //     md={4}
    //     lg={3}
    //     style={{ height: "100%", padding: "15px 30px 15px 30px" }}
    //   >
    //     <Row>
    //       <Col>best seller tag</Col>
    //     </Row>
    //     <Row>
    //       <Col style={{ height: "230px" }}>image</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>name</Col>
    //         </Row>
    //         <Row>
    //           <Col>brand</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>price</Col>
    //         </Row>
    //         <Row>
    //           <Col>acquirable points</Col>
    //         </Row>
    //         <Row>
    //           <Col>stock status</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>delivery date</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Button>カートに入れる</Button>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col xs={5}>reviews</Col>
    //       <Col xs={7}>count</Col>
    //     </Row>
    //   </Col>
    //   <Col
    //     xs={6}
    //     md={4}
    //     lg={3}
    //     style={{ height: "100%", padding: "15px 30px 15px 30px" }}
    //   >
    //     <Row>
    //       <Col>best seller tag</Col>
    //     </Row>
    //     <Row>
    //       <Col style={{ height: "230px" }}>image</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>name</Col>
    //         </Row>
    //         <Row>
    //           <Col>brand</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>price</Col>
    //         </Row>
    //         <Row>
    //           <Col>acquirable points</Col>
    //         </Row>
    //         <Row>
    //           <Col>stock status</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>delivery date</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Button>カートに入れる</Button>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col xs={5}>reviews</Col>
    //       <Col xs={7}>count</Col>
    //     </Row>
    //   </Col>
    //   <Col
    //     xs={6}
    //     md={4}
    //     lg={3}
    //     style={{ height: "100%", padding: "15px 30px 15px 30px" }}
    //   >
    //     <Row>
    //       <Col>best seller tag</Col>
    //     </Row>
    //     <Row>
    //       <Col style={{ height: "230px" }}>image</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>name</Col>
    //         </Row>
    //         <Row>
    //           <Col>brand</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>price</Col>
    //         </Row>
    //         <Row>
    //           <Col>acquirable points</Col>
    //         </Row>
    //         <Row>
    //           <Col>stock status</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>delivery date</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Button>カートに入れる</Button>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col xs={5}>reviews</Col>
    //       <Col xs={7}>count</Col>
    //     </Row>
    //   </Col>
    //   <Col
    //     xs={6}
    //     md={4}
    //     lg={3}
    //     style={{ height: "100%", padding: "15px 30px 15px 30px" }}
    //   >
    //     <Row>
    //       <Col>best seller tag</Col>
    //     </Row>
    //     <Row>
    //       <Col style={{ height: "230px" }}>image</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>name</Col>
    //         </Row>
    //         <Row>
    //           <Col>brand</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>price</Col>
    //         </Row>
    //         <Row>
    //           <Col>acquirable points</Col>
    //         </Row>
    //         <Row>
    //           <Col>stock status</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>delivery date</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Button>カートに入れる</Button>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col xs={5}>reviews</Col>
    //       <Col xs={7}>count</Col>
    //     </Row>
    //   </Col>
    //   <Col
    //     xs={6}
    //     md={4}
    //     lg={3}
    //     style={{ height: "100%", padding: "15px 30px 15px 30px" }}
    //   >
    //     <Row>
    //       <Col>best seller tag</Col>
    //     </Row>
    //     <Row>
    //       <Col style={{ height: "230px" }}>image</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>name</Col>
    //         </Row>
    //         <Row>
    //           <Col>brand</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>price</Col>
    //         </Row>
    //         <Row>
    //           <Col>acquirable points</Col>
    //         </Row>
    //         <Row>
    //           <Col>stock status</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>delivery date</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Button>カートに入れる</Button>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col xs={5}>reviews</Col>
    //       <Col xs={7}>count</Col>
    //     </Row>
    //   </Col>
    //   <Col
    //     xs={6}
    //     md={4}
    //     lg={3}
    //     style={{ height: "100%", padding: "15px 30px 15px 30px" }}
    //   >
    //     <Row>
    //       <Col>best seller tag</Col>
    //     </Row>
    //     <Row>
    //       <Col style={{ height: "230px" }}>image</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>name</Col>
    //         </Row>
    //         <Row>
    //           <Col>brand</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>price</Col>
    //         </Row>
    //         <Row>
    //           <Col>acquirable points</Col>
    //         </Row>
    //         <Row>
    //           <Col>stock status</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>delivery date</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Button>カートに入れる</Button>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col xs={5}>reviews</Col>
    //       <Col xs={7}>count</Col>
    //     </Row>
    //   </Col>
    //   <Col
    //     xs={6}
    //     md={4}
    //     lg={3}
    //     style={{ height: "100%", padding: "15px 30px 15px 30px" }}
    //   >
    //     <Row>
    //       <Col>best seller tag</Col>
    //     </Row>
    //     <Row>
    //       <Col style={{ height: "230px" }}>image</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>name</Col>
    //         </Row>
    //         <Row>
    //           <Col>brand</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>price</Col>
    //         </Row>
    //         <Row>
    //           <Col>acquirable points</Col>
    //         </Row>
    //         <Row>
    //           <Col>stock status</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>delivery date</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Button>カートに入れる</Button>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col xs={5}>reviews</Col>
    //       <Col xs={7}>count</Col>
    //     </Row>
    //   </Col>
    //   <Col
    //     xs={6}
    //     md={4}
    //     lg={3}
    //     style={{ height: "100%", padding: "15px 30px 15px 30px" }}
    //   >
    //     <Row>
    //       <Col>best seller tag</Col>
    //     </Row>
    //     <Row>
    //       <Col style={{ height: "230px" }}>image</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>name</Col>
    //         </Row>
    //         <Row>
    //           <Col>brand</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>price</Col>
    //         </Row>
    //         <Row>
    //           <Col>acquirable points</Col>
    //         </Row>
    //         <Row>
    //           <Col>stock status</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>delivery date</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Button>カートに入れる</Button>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col xs={5}>reviews</Col>
    //       <Col xs={7}>count</Col>
    //     </Row>
    //   </Col>
    //   <Col
    //     xs={6}
    //     md={4}
    //     lg={3}
    //     style={{ height: "100%", padding: "15px 30px 15px 30px" }}
    //   >
    //     <Row>
    //       <Col>best seller tag</Col>
    //     </Row>
    //     <Row>
    //       <Col style={{ height: "230px" }}>image</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>name</Col>
    //         </Row>
    //         <Row>
    //           <Col>brand</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>price</Col>
    //         </Row>
    //         <Row>
    //           <Col>acquirable points</Col>
    //         </Row>
    //         <Row>
    //           <Col>stock status</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>delivery date</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Button>カートに入れる</Button>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col xs={5}>reviews</Col>
    //       <Col xs={7}>count</Col>
    //     </Row>
    //   </Col>
    //   <Col
    //     xs={6}
    //     md={4}
    //     lg={3}
    //     style={{ height: "100%", padding: "15px 30px 15px 30px" }}
    //   >
    //     <Row>
    //       <Col>best seller tag</Col>
    //     </Row>
    //     <Row>
    //       <Col style={{ height: "230px" }}>image</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>name</Col>
    //         </Row>
    //         <Row>
    //           <Col>brand</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>price</Col>
    //         </Row>
    //         <Row>
    //           <Col>acquirable points</Col>
    //         </Row>
    //         <Row>
    //           <Col>stock status</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>delivery date</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Button>カートに入れる</Button>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col xs={5}>reviews</Col>
    //       <Col xs={7}>count</Col>
    //     </Row>
    //   </Col>
    //   <Col
    //     xs={6}
    //     md={4}
    //     lg={3}
    //     style={{ height: "100%", padding: "15px 30px 15px 30px" }}
    //   >
    //     <Row>
    //       <Col>best seller tag</Col>
    //     </Row>
    //     <Row>
    //       <Col style={{ height: "230px" }}>image</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>name</Col>
    //         </Row>
    //         <Row>
    //           <Col>brand</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>price</Col>
    //         </Row>
    //         <Row>
    //           <Col>acquirable points</Col>
    //         </Row>
    //         <Row>
    //           <Col>stock status</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>delivery date</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Button>カートに入れる</Button>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col xs={5}>reviews</Col>
    //       <Col xs={7}>count</Col>
    //     </Row>
    //   </Col>
    //   <Col
    //     xs={6}
    //     md={4}
    //     lg={3}
    //     style={{ height: "100%", padding: "15px 30px 15px 30px" }}
    //   >
    //     <Row>
    //       <Col>best seller tag</Col>
    //     </Row>
    //     <Row>
    //       <Col style={{ height: "230px" }}>image</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>name</Col>
    //         </Row>
    //         <Row>
    //           <Col>brand</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>price</Col>
    //         </Row>
    //         <Row>
    //           <Col>acquirable points</Col>
    //         </Row>
    //         <Row>
    //           <Col>stock status</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>delivery date</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Button>カートに入れる</Button>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col xs={5}>reviews</Col>
    //       <Col xs={7}>count</Col>
    //     </Row>
    //   </Col>
    //   <Col
    //     xs={6}
    //     md={4}
    //     lg={3}
    //     style={{ height: "100%", padding: "15px 30px 15px 30px" }}
    //   >
    //     <Row>
    //       <Col>best seller tag</Col>
    //     </Row>
    //     <Row>
    //       <Col style={{ height: "230px" }}>image</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>name</Col>
    //         </Row>
    //         <Row>
    //           <Col>brand</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>price</Col>
    //         </Row>
    //         <Row>
    //           <Col>acquirable points</Col>
    //         </Row>
    //         <Row>
    //           <Col>stock status</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>delivery date</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Button>カートに入れる</Button>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col xs={5}>reviews</Col>
    //       <Col xs={7}>count</Col>
    //     </Row>
    //   </Col>
    //   <Col
    //     xs={6}
    //     md={4}
    //     lg={3}
    //     style={{ height: "100%", padding: "15px 30px 15px 30px" }}
    //   >
    //     <Row>
    //       <Col>best seller tag</Col>
    //     </Row>
    //     <Row>
    //       <Col style={{ height: "230px" }}>image</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>name</Col>
    //         </Row>
    //         <Row>
    //           <Col>brand</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>price</Col>
    //         </Row>
    //         <Row>
    //           <Col>acquirable points</Col>
    //         </Row>
    //         <Row>
    //           <Col>stock status</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>delivery date</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Button>カートに入れる</Button>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col xs={5}>reviews</Col>
    //       <Col xs={7}>count</Col>
    //     </Row>
    //   </Col>
    //   <Col
    //     xs={6}
    //     md={4}
    //     lg={3}
    //     style={{ height: "100%", padding: "15px 30px 15px 30px" }}
    //   >
    //     <Row>
    //       <Col>best seller tag</Col>
    //     </Row>
    //     <Row>
    //       <Col style={{ height: "230px" }}>image</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>name</Col>
    //         </Row>
    //         <Row>
    //           <Col>brand</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>price</Col>
    //         </Row>
    //         <Row>
    //           <Col>acquirable points</Col>
    //         </Row>
    //         <Row>
    //           <Col>stock status</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>delivery date</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Button>カートに入れる</Button>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col xs={5}>reviews</Col>
    //       <Col xs={7}>count</Col>
    //     </Row>
    //   </Col>
    //   <Col
    //     xs={6}
    //     md={4}
    //     lg={3}
    //     style={{ height: "100%", padding: "15px 30px 15px 30px" }}
    //   >
    //     <Row>
    //       <Col>best seller tag</Col>
    //     </Row>
    //     <Row>
    //       <Col style={{ height: "230px" }}>image</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>name</Col>
    //         </Row>
    //         <Row>
    //           <Col>brand</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>price</Col>
    //         </Row>
    //         <Row>
    //           <Col>acquirable points</Col>
    //         </Row>
    //         <Row>
    //           <Col>stock status</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>delivery date</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Button>カートに入れる</Button>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col xs={5}>reviews</Col>
    //       <Col xs={7}>count</Col>
    //     </Row>
    //   </Col>
    //   <Col
    //     xs={6}
    //     md={4}
    //     lg={3}
    //     style={{ height: "100%", padding: "15px 30px 15px 30px" }}
    //   >
    //     <Row>
    //       <Col>best seller tag</Col>
    //     </Row>
    //     <Row>
    //       <Col style={{ height: "230px" }}>image</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>name</Col>
    //         </Row>
    //         <Row>
    //           <Col>brand</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>price</Col>
    //         </Row>
    //         <Row>
    //           <Col>acquirable points</Col>
    //         </Row>
    //         <Row>
    //           <Col>stock status</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>delivery date</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Button>カートに入れる</Button>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col xs={5}>reviews</Col>
    //       <Col xs={7}>count</Col>
    //     </Row>
    //   </Col>
    //   <Col
    //     xs={6}
    //     md={4}
    //     lg={3}
    //     style={{ height: "100%", padding: "15px 30px 15px 30px" }}
    //   >
    //     <Row>
    //       <Col>best seller tag</Col>
    //     </Row>
    //     <Row>
    //       <Col style={{ height: "230px" }}>image</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>name</Col>
    //         </Row>
    //         <Row>
    //           <Col>brand</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Row>
    //           <Col>price</Col>
    //         </Row>
    //         <Row>
    //           <Col>acquirable points</Col>
    //         </Row>
    //         <Row>
    //           <Col>stock status</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col>delivery date</Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //         <Button>カートに入れる</Button>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col xs={5}>reviews</Col>
    //       <Col xs={7}>count</Col>
    //     </Row>
    //   </Col>
  );
};

export default ProductItem;
