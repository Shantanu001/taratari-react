import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Button, Dropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Header from "../component/header";
import "./Category.scss";
import CardCategory from "../component/CardCategory";
const Category = () => {
  return (
    <div className="container">
      <Container fluid>
        <Row>
          <Header />
        </Row>
        <Row className="category-container">
          <Row>
            <Col sm={true}>
              {" "}
              <CardCategory
                category="Cars"
                categoryUrl="cars.png"
              />
            </Col>
            <Col sm={true}>
              {" "}
              <CardCategory
                category="Bikes"
                categoryUrl="bmw-57e3d44049_1280.jpg"
              />
            </Col>
            <Col sm={true}>
              {" "}
              <CardCategory
                category="Furniture"
                categoryUrl="furniture.jpg"
              />
            </Col>
            <Col sm={true}>
              {" "}
              <CardCategory
                category="Jobs"
                categoryUrl="job.jpg"
              />
            </Col>
          </Row>
          <Row>
            <Col sm={true}>
              {" "}
              <CardCategory
                category="Electronics&Appliances"
                categoryUrl="television.jpg"
              />
            </Col>
            <Col sm={true}>
              {" "}
              <CardCategory
                category="Fashion"
                categoryUrl="fashion.jpg"
              />
            </Col>
            <Col sm={true}>
              {" "}
              <CardCategory
                category="Mobiles"
                categoryUrl="mobile.jpg"
              />
            </Col>
            <Col sm={true}>
              {" "}
              <CardCategory
                category="Services"
                categoryUrl="service.jpg"
              />
            </Col>
          </Row>
          <Row>
            <Col sm={true}>
              {" "}
              <CardCategory
                category="Properties&Rent"
                categoryUrl="house.jpg"
              />
            </Col>
            <Col sm={true}>
              {" "}
              <CardCategory
                category="Pets"
                categoryUrl="pets.jpg"
              />
            </Col>
            <Col sm={true}>
              {" "}
              <CardCategory
                category="Books,Sports&Hobbies"
                categoryUrl="hobbies.jpg"
              />
            </Col>
            <Col sm={true}>
              {" "}
              <CardCategory
                category="Others"
                categoryUrl="others.jpg"
              />
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default Category;