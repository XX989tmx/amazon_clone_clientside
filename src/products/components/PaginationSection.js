import React from "react";
import reactBootstrap, {
  Container,
  Row,
  Col,
  Button,
  Pagination,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const PaginationSection = (props) => {
  return (
    <Row>
      <Col
        xs={{ offset: 2, span: 8 }}
        md={{ offset: 2, span: 8 }}
        lg={{ offset: 3, span: 6 }}
      >
        <Pagination>
          <Link
            to={`/product/index/grandGrandChildCategory/${props.GrandGrandChildCategory}?page=1`}
          >
            {" "}
            <Pagination.First />
          </Link>
          <Link
            to={`/product/index/grandGrandChildCategory/${
              props.GrandGrandChildCategory
            }?page=${
              props.PaginationData.currentPage - 1 < 1
                ? 1
                : props.PaginationData.currentPage - 1
            }`}
          >
            {" "}
            <Pagination.Prev />
          </Link>
          <Pagination.Item>
            <Link
              to={`/product/index/grandGrandChildCategory/${props.GrandGrandChildCategory}?page=1`}
            >
              {1}
            </Link>
          </Pagination.Item>
          <Pagination.Ellipsis />
          {!(props.PaginationData.currentPage - 2 < 1) && (
            <Pagination.Item>
              <Link
                to={`/product/index/grandGrandChildCategory/${
                  props.GrandGrandChildCategory
                }?page=${props.PaginationData.currentPage - 2}`}
              >
                {props.PaginationData.currentPage - 2}
              </Link>
            </Pagination.Item>
          )}
          {!(props.PaginationData.currentPage - 1 < 1) && (
            <Pagination.Item>
              <Link
                to={`/product/index/grandGrandChildCategory/${
                  props.GrandGrandChildCategory
                }?page=${props.PaginationData.currentPage - 1}`}
              >
                {" "}
                {props.PaginationData.currentPage - 1}
              </Link>
            </Pagination.Item>
          )}
          <Pagination.Item active>
            {props.PaginationData.currentPage}
          </Pagination.Item>
          {!(
            props.PaginationData.currentPage + 1 >
            props.PaginationData.lastPage
          ) && (
            <Pagination.Item>
              <Link
                to={`/product/index/grandGrandChildCategory/${
                  props.GrandGrandChildCategory
                }?page=${props.PaginationData.currentPage + 1}`}
              >
                {" "}
                {props.PaginationData.currentPage + 1}
              </Link>
            </Pagination.Item>
          )}
          {!(
            props.PaginationData.currentPage + 2 >
            props.PaginationData.lastPage
          ) && (
            <Pagination.Item>
              <Link
                to={`/product/index/grandGrandChildCategory/${
                  props.GrandGrandChildCategory
                }?page=${props.PaginationData.currentPage + 2}`}
              >
                {" "}
                {props.PaginationData.currentPage + 2}
              </Link>
            </Pagination.Item>
          )}
          <Pagination.Ellipsis />
          <Pagination.Item>
            <Link
              to={`/product/index/grandGrandChildCategory/${props.GrandGrandChildCategory}?page=${props.PaginationData.lastPage}`}
            >
              {props.PaginationData.lastPage}
            </Link>
          </Pagination.Item>{" "}
          <Link
            to={`/product/index/grandGrandChildCategory/${
              props.GrandGrandChildCategory
            }?page=${props.PaginationData.currentPage + 1}`}
          >
            <Pagination.Next />
          </Link>
          <Pagination.Last />
        </Pagination>
      </Col>
    </Row>
  );
};

export default PaginationSection;
