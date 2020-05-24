import React from 'react';
import {Card,ListGroup,ListGroupItem} from 'react-bootstrap';
import './header.scss';

const cardComponent = ()=>{
    return (
        <Card >
            <Card.Img variant="top" src={require("../assets/ecommerce2-1.png")} />
            <Card.Body>
                <Card.Title>Rs.4500</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>2BHK FLAT FOR RENT</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">VIEW</Card.Link>
            </Card.Body>    
        </Card>
    );
}
export default cardComponent;