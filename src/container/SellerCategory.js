import React,{useState} from 'react';
import {Container,Row,Col,Image,Button,Dropdown} from 'react-bootstrap';
import Header from "../component/header";



function SellerCategory (){

    const [title,setTitle] = useState("SellerCategory");

    return (
        <Container fluid>
            <Header />
        </Container>
 
     );
};

export default SellerCategory;
