import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Header from "../component/header";
import "./Form1.scss";
import dropdown from "../component/dropdown";
const Form2 = () => {
  let history = useHistory();
  return (
    <div className="container">
      <Container fluid>
        <Row>
          <Header />
        </Row>
        <Row className="content">
          <h3>Confirm Location</h3>
          <hr />
          <Form>
          <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>State</Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>City</Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
          </Form>
          <Button
            onClick={() => {
              history.push("/form3");
            }}
          >
            Save&Continue
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default Form2;
