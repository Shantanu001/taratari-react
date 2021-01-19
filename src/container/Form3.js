import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Header from "../component/header";
import "./Form3.scss";
import dropdown from "../component/dropdown";
const Form3 = (props) => {
  let history = useHistory();
  const[Price,setPrice] = useState();
  const onHandleChange = (e)=>{
    // if(e.target.value.includes(",")){
    //   e.target.value =  e.target.value.split(',').join();
    // }else{
    //   e.target.value =  e.target.value.split(',').join();
    // }
    props.onChange(e);
    setPrice(e.target.value);
  };
  return (
    <div className="container">
      <Container fluid>
        {/* <Row>
          <Header />
        </Row> */}
        <Row className="content">
          {/* <h3 className="heading">Set a Price</h3> */}
          <hr />
          <Row className="price-container">
            <Col md={{ span: 4, offset: 4 }}>
              <Form className="setPriceForm">
                <Form.Control
                  size="lg"
                  type="input"
                  placeholder="Enter Price"
                  name="Price"
                  value = {Price}
                  onChange={(e) => onHandleChange(e)}
                />
              </Form>
              {/* <Button
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
