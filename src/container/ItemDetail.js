import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Button, Dropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Header from "../component/header";
import "./ItemDetail.scss";
const ItemDetail = () => {
  let history = useHistory();
  return (
    <div className="container">
      <Container fluid>
        <Row>
          <Header />
        </Row>
        <Row className="content-layout">
          <Col sm={8} lg={true}>
            <Row className="Image">
              <Image
                className="content"
                src={require("../assets/ecommerce2-1.png")}
              />
            </Row>
            <Row className="Description">
              <h3>Description</h3>
              <p>
                Sample description about the item.Sample description about the
                item.Sample description about the item.
              </p>
            </Row>
          </Col>
          {/* <Col md="auto"></Col> */}
          <Col sm={4}  className="detail-container" >
            <Row className="Item-detail">
              <p className="upload-date">3 days ago</p>
              <p className="price">Rs.45000</p>
              <div className="model-details">
                <p>Model Name</p>
                <p>Brand</p>
                <p>Used fro 2 years</p>
              </div>
            </Row>
            <Row className="Seller">
              <Image
                className="seller-image"
                src={require("../assets/Screen Shot 2020-05-28 at 5.50.34 PM.png")}
              ></Image>
              <p>+91 **********</p>
              <Button>Contact Seller</Button>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ItemDetail;
