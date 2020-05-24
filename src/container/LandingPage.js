import React,{useState,useEffect} from 'react';
import {Container,Row,Col,Image,Button,Dropdown} from 'react-bootstrap';
import {useHistory}  from "react-router-dom";
import Header from "../component/header";
import './LandingPage.scss';
const LandingPage = ()=>{
    let history = useHistory();
        return (
           <Container fluid>
               <Header/>
                <Row>
                    <Col>
                        <Image  src={require("../assets/c8aa7a41b257939d2ee64cc128b297ec.jpg")} fluid/>
                    </Col>
                    <Col  className = {"right-sidebar"}>
                        <Row className = {"heading"} >Why TaraTari?</Row>
                        <Row> <p>INSTANT SELL & BUY ANY ITEM</p></Row>
                        <Row> <p>FREE LISTING</p></Row>
                        <Row> <p>QUICK RESPONSE FROM GENUINE BUYERS AND SELLERS</p></Row>
                        <Row ><Button onClick = {()=>{history.push('/home')}} className={"explore-button"} >EXPLORE</Button></Row>
                    </Col>
                </Row>   
            </Container>

    );
};

export default LandingPage;