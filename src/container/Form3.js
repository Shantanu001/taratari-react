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
        <Row>
          <Header />
        </Row>
        <Row className="content">
          <h3 className="heading">Set a Price</h3>
          <hr/>
          <Row className="price-container">
          <Form>
            <Form.Control size="lg" type="text" placeholder="Large text" />
          </Form>
          <Button
            onClick={() => {
              history.push("/form3");
            }}
          >
            Save&Continue
          </Button>
        </Row>
        </Row>
      </Container>
    </div>
  );
};

export default Form3;
