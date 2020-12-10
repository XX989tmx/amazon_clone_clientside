import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import HeadingOfAccountOverview from "../components/HeadingOfAccountOverview";
import LowerNavigation from "../components/LowerNavigation";
import UpperNavigation from "../components/UpperNavigation";
const Overview = () => {
  return (
    <div>
      <Container fluid="md">
        <Row>
          <Col>
            <Row>
              <Col>
                <HeadingOfAccountOverview />
                <UpperNavigation />
                <LowerNavigation />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Overview;
