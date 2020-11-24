import React from "react";
import reactBootstrap, { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CategoryHeadingSection from "./CategoryHeadingSection";
import HighRatedProducts from "./HighRatedProducts";
import MostSoldRanking from "./MostSoldRanking";
import NavigationAndBreadcrumbs from "./NavigationAndBreadcrumbs";
import PaginationSection from "./PaginationSection";
import PopularProductsInWishlistedProducts from "./PopularProductsInWishlistedProducts";
import PriceRangeBasedRecommendation from "./PriceRangeBasedRecommendation";
import ProductIndex from "./ProductIndex";
import RecommendationFromPurchaseHistory from "./RecommendationFromPurchaseHistory";

const ProductIndexSection = (props) => {
  return (
    <Col xs={12} md={10} lg={10} style={{ height: "100%" }}>
      main section
      <CategoryHeadingSection />
      <PopularProductsInWishlistedProducts />
      <HighRatedProducts />
      <RecommendationFromPurchaseHistory />
      <PriceRangeBasedRecommendation />
      <MostSoldRanking />
      <NavigationAndBreadcrumbs />
      {/* product index col を２４書くか、一個だけ書いて可変にし、数はPagination　
                で制御するか、は、要検討 おそらくダイナミック。list & item map の形。RowをListのところで使い、そこで配列をMap、子要素のItemに、Colを置き、という形。*/}
      <ProductIndex
        GrandGrandChildCategoryMatchedProducts={
          props.GrandGrandChildCategoryMatchedProducts
        }
      />
      <PaginationSection />
    </Col>
  );
};

export default ProductIndexSection;
