import React from "react";
import { Container, Row, Col, Image, Button, Dropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./StepCountForm.scss";

const StepCountForm = () => {
  const history = useHistory();
  return (
    <Container >
        <Row className='box-container'>
            <Col>1.Product Details</Col>
            <Col>2.Upload Image</Col>
            <Col>3.Set Price</Col>
        </Row>
    </Container>
  );
};

export default StepCountForm;
