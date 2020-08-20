import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Button, Dropdown } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import Header from "../component/header";
import "./ItemDetail.scss";
import Axios from 'axios';

const ItemDetail = () => {
  let history = useHistory();
  let {_id} = useParams();
  console.log("here",useParams());
  const [product,getProduct] = useState("");

  let getProductListById = ()=>{
    let url = process.env.REACT_APP_BASE_URL + `/getProductListById?_id=${_id}`;
    Axios.get(url)
    .then(function(response){
        console.log("121",response.data);
        getProduct(response.data);

    }).catch(function(err){
            throw err;
    })
};

useEffect(()=>{
  getProductListById();       
},[]);


  return (
    <div className="container">
      <Container fluid>
        <Row>
          <Header />
        </Row>
        <Row className="content-layout">
          <Col sm={8} lg={true}>
            <Row className="Image">
              <Image
                className="content"
                src={product.Image}
              />
            </Row>
            <Row className="Description">
              <h3>{product.Name}</h3>
              <p>
               {product.Description}
              </p>
            </Row>
          </Col>
          {/* <Col md="auto"></Col> */}
          <Col sm={4}  className="detail-container" >
            <Row className="Item-detail">
              <p className="upload-date">{product.how_old} old</p>
              <p className="price">Rs.{product.Price}</p>
              <div className="model-details">
                <p>{product.Name}</p>
                <p>{product.Brand}</p>
              </div>
            </Row>
            <Row className="Seller">
              <Image
                className="seller-image"
                src={require("../assets/Screen Shot 2020-05-28 at 5.50.34 PM.png")}
              ></Image>
              <p>+91 **********</p>
              <Button>Contact Seller</Button>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ItemDetail;
