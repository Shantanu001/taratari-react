import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Header from "../component/header";
import "./Form3.scss";
import dropdown from "../component/dropdown";
const Form3 = () => {
  let history = useHistory();
  return (
    <div className="container">
      <Container fluid>
        {/* <Row>
          <Header />
        </Row> */}
        <Row className="content">
          {/* <h3 className="heading">Set a Price</h3> */}
          <hr/>
          <Row className="price-container">
          <Col md={{ span: 4, offset: 4 }}>
          <Form className = "setPriceForm">
            <Form.Control size="lg" type="input" placeholder="Enter Price" />
          </Form>
        {/*   <Button
            onClick={() => {
              history.push("/sellerForm");
            }}
          >
            Save&Continue
          </Button> */}
          </Col>
        </Row>
        </Row>
      </Container>
    </div>
  );
};

export default Form3;
