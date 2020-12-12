import React, { useState, useEffect, Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Header from "../component/header";
import "./Form1.scss";
import TextField from "@material-ui/core/TextField";

const Form1 = () => {
  return (
      <Container fluid>
        <Row className="d-flex  justify-content-center" >
            <form label="Standard" className="d-flex flex-column justify-content-center w-50">
              <TextField
                id="outlined-basic"
                label="PRODUCT NAME"
                variant="outlined"
                className="mb-3"
              />
              <TextField
                id="outlined-basic"
                label="BRAND NAME"
                variant="outlined"
                className="mb-3"
              />
              <TextField
                id="outlined-basic"
                label="PRODUCT AGE"
                variant="outlined"
                className="mb-3"
              />
              <TextField
                id="outlined-basic"
                label="DESCRIPTION"
                variant="outlined"
                className="mb-3"
              />
            </form>
          </Row>
      </Container>
  );
};

export default Form1;
