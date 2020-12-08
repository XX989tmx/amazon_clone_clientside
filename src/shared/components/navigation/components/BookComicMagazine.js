import React from 'react';
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
const BookComicMagazine = (props) => {
    return (
       <Row>
          <Col>
            <Row>
              <Col>本、コミック、雑誌 click</Col>
            </Row>
            <Row>
              <Col>
                show close
                <Row>
                  <Col>
                    <Row>
                      <Col>本、コミック、雑誌</Col>
                    </Row>
                    <Row>
                      <Col>each child category map</Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Row>
                      <Col>Kindleストア</Col>
                    </Row>
                    <Row>
                      <Col>each child category map</Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Row>
                      <Col>Audibleオーディオブック</Col>
                    </Row>
                    <Row>
                      <Col>each child category map</Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Row>
                      <Col>本、コミック、雑誌＆Audible</Col>
                    </Row>
                    <Row>
                      <Col>each child category map</Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
    );
}

export default BookComicMagazine;
