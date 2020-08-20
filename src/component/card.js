import React from 'react';
import {Card,ListGroup,ListGroupItem,Button} from 'react-bootstrap';
import './header.scss';
import {useHistory}  from "react-router-dom";

const cardComponent = (props)=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let history = useHistory();
    return (
        <Card >
            <Card.Img style={{height:"18rem" }} variant="top" src={props.image} />
            <Card.Body>
            <Card.Title>Rs.{props.price}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
            <ListGroupItem>{props.title}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Button onClick = {()=>{history.push(`/ItemDetail/${props.id}`)}} >EXPLORE</Button>
            </Card.Body>    
        </Card>
    );
}
export default cardComponent;