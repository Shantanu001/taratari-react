import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form,Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Header from "../component/header";
import './Form1.scss';
import CardCategory from "../component/CardCategory";
const Form1 = () => {
    let history = useHistory();
  return (
    <div className="container">
      <Container fluid>
        <Row>
          <Header />
        </Row>
        <Row className="content">
          <h3>Enter Product Detail</h3>
          <hr/>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="input"
                placeholder="Enter the product name here"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type="input"
                placeholder="Enter the brand name here"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>How old?</Form.Label>
              <Form.Control
                type="input"
                placeholder="How old the product is?"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="input"
                placeholder="Write the description about the product"
              />
            </Form.Group>
          </Form>
          <Button onClick = {()=>{history.push('/form2')}} >Save&Continue</Button>
        </Row>
      </Container>
    </div>
  );
};

export default Form1;
