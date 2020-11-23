import React from "react";
import reactBootstrap, { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import Campaign from "./Campaign";
import FumeinatenSection from "./FumeinatenSection";
import MoreThan4StaredProducts from "./MoreThan4StaredProducts";
import Oshirase from "./Oshirase";
import PeopleBoughtTheseProductsTooSection from "./PeopleBoughtTheseProductsTooSection";
import PeopleBuyThis from "./PeopleBuyThis";
import ProductDetailInformation from "./ProductDetailInformation";
import ProductExplanation from "./ProductExplanation";
import ProductInformationSection from "./ProductInformationSection";
import RecommendationSection from "./RecommendationSection";
import RelatedProducts from "./RelatedProducts";
import ReviewSection from "./ReviewSection";
import SameCategoriesOtherProducts from "./SameCategoriesOtherProducts";

const MainSectionOfSpecificProduct = (props) => {
  return (
    <Col
      md={10}
      lg={10}
      xl={10}
      style={{
        paddingRight: "6%",
        paddingLeft: "6%",
      }}
    >
      <Breadcrumbs />
      <ProductInformationSection />
      <SameCategoriesOtherProducts />
      <PeopleBoughtTheseProductsTooSection />
      <RelatedProducts />
      <MoreThan4StaredProducts />
      <ProductExplanation />
      <ProductDetailInformation />
      <PeopleBuyThis />
      <RecommendationSection />
      <FumeinatenSection />
      <Campaign />
      <Oshirase />
      <ReviewSection />
    </Col>
  );
};

export default MainSectionOfSpecificProduct;