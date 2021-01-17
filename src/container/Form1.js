import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Header from "../component/header";
import "./Form1.scss";
import CardCategory from "../component/CardCategory";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
const Form1 = (props) => {
  let history = useHistory();
  console.log(props);
  return (
    <div className="form1">
      <Container fluid>
        {/* <Row>
          <Header />
        </Row> */}
        <Row className="content">
          {/* <h3>Enter Product Detail</h3>
          <hr/> */}
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                {/* <Form.Label>Product Name</Form.Label> */}
                <Form.Control
                  type="input"
                  name="Name"
                  onChange={(e) => props.onChange(e)}
                  placeholder="Enter the product name here"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                {/* <Form.Label>Brand</Form.Label> */}
                <Form.Control
                  type="input"
                  name="Brand"
                  onChange={(e) => props.onChange(e)}
                  placeholder="Enter the brand name here"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                {/* <Form.Label>How old?</Form.Label> */}
                <Form.Control
                  type="input"
                  name="how_old"
                  onChange={(e) => props.onChange(e)}
                  placeholder="How old the product is?"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                {/* <Form.Label>Description</Form.Label> */}
                <Form.Control
                  type="input"
                  placeholder="Write the description about the product"
                  name="Description"
                  onChange={(e) => props.onChange(e)}
                />
              </Form.Group>
            </Form>
            {/* <Button onClick = {()=>{history.push('/sellerForm/2')}} >Save&Continue</Button> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Form1;
