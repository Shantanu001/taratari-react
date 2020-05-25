import React,{useState,useEffect} from 'react';
import {Container,Row,Col,Image,Button,Dropdown} from 'react-bootstrap';
import {useHistory}  from "react-router-dom";
import Header from "../component/header";
import './LandingPage.scss';
const ItemDetail = ()=>{
    let history = useHistory();
        return (
            <div className="container">
            <Container fluid>
                <Row><Header /></Row>
            </Container>
            </div>
    );
};

export default ItemDetail;