import React from 'react';
import {Card,ListGroup,ListGroupItem,Button} from 'react-bootstrap';
import './header.scss';
import {useHistory}  from "react-router-dom";

const cardComponent = ()=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let history = useHistory();
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
                <Button onClick = {()=>{history.push('/ItemDetail')}} >EXPLORE</Button>
            </Card.Body>    
        </Card>
    );
}
export default cardComponent;