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
            <Col>
              {" "}
              <CardCategory
                category="Cars"
                categoryUrl="cars.png"
              />
            </Col>
            <Col>
              {" "}
              <CardCategory
                category="Bikes"
                categoryUrl="bmw-57e3d44049_1280.jpg"
              />
            </Col>
            <Col>
              {" "}
              <CardCategory
                category="Furniture"
                categoryUrl="furniture.jpg"
              />
            </Col>
            <Col>
              {" "}
              <CardCategory
                category="Jobs"
                categoryUrl="job.jpg"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              {" "}
              <CardCategory
                category="Electronics&Appliances"
                categoryUrl="television.jpg"
              />
            </Col>
            <Col>
              {" "}
              <CardCategory
                category="Fashion"
                categoryUrl="fashion.jpg"
              />
            </Col>
            <Col>
              {" "}
              <CardCategory
                category="Mobiles"
                categoryUrl="mobile.jpg"
              />
            </Col>
            <Col>
              {" "}
              <CardCategory
                category="Services"
                categoryUrl="service.jpg"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              {" "}
              <CardCategory
                category="Properties&Rent"
                categoryUrl="house.jpg"
              />
            </Col>
            <Col>
              {" "}
              <CardCategory
                category="Pets"
                categoryUrl="pets.jpg"
              />
            </Col>
            <Col>
              {" "}
              <CardCategory
                category="Books,Sports&Hobbies"
                categoryUrl="hobbies.jpg"
              />
            </Col>
            <Col>
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