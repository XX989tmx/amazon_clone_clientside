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
              <Col>商品画像3</Col>
            </Row>
            <Row>
              <Col>
                {" "}
                <img
                  src={props.PreviewUrl3}
                  alt=""
                  style={{ width: "150px", height: "150px" }}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <input
                  type="file"
                  accept=".jpg, .jpeg,.png"
                  id="image3"
                  onChange={props.image3ChangeHandler}
                />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>商品画像4</Col>
            </Row>
            <Row>
              <Col>
                <img
                  src={props.PreviewUrl4}
                  alt=""
                  style={{ width: "150px", height: "150px" }}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <input
                  type="file"
                  accept=".jpg, .jpeg,.png"
                  id="image4"
                  onChange={props.image4ChangeHandler}
                />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>商品画像5</Col>
            </Row>
            <Row>
              <Col>
                <img
                  src={props.PreviewUrl5}
                  alt=""
                  style={{ width: "150px", height: "150px" }}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <input
                  type="file"
                  accept=".jpg, .jpeg,.png"
                  id="image5"
                  onChange={props.image5ChangeHandler}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ImageInputSection;
