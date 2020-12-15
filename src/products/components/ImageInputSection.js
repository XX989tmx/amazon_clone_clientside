import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
const ImageInputSection = (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>
            <Row>
              <Col>商品画像1</Col>
            </Row>
            <Row>
              <Col>
                <img
                  src={props.previewUrl1}
                  alt=""
                  style={{ width: "150px", height: "150px" }}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <input
                  type="file"
                  id="image1"
                  accept=".jpg, .jpeg,.png"
                  onChange={props.image1ChangeHandler}
                />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>商品画像2</Col>
            </Row>
            <Row>
              <Col>
                <img
                  src={props.PreviewUrl2}
                  alt=""
                  style={{ width: "150px", height: "150px" }}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <input
                  type="file"
                  id="image2"
                  accept=".jpg, .jpeg,.png"
                  onChange={props.image2ChangeHandler}
                />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>title</Col>
            </Row>
            <Row>
              <Col>image</Col>
            </Row>
            <Row>
              <Col>action</Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>title</Col>
            </Row>
            <Row>
              <Col>image</Col>
            </Row>
            <Row>
              <Col>action</Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>title</Col>
            </Row>
            <Row>
              <Col>image</Col>
            </Row>
            <Row>
              <Col>action</Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ImageInputSection;
