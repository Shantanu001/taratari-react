import React from "react";
import {Card} from "react-bootstrap";
import {useHistory}  from "react-router-dom";

const CardCategory = (props) => {
  const history = useHistory();
  return (
    <Card onClick = {()=>{history.push('/form1')}} style={{ width: "16rem",margin:"5%" }}>
      <Card.Img variant="top" src={require("../assets/bmw-57e3d44049_1280.jpg")} />
      <Card.Body>
        <Card.Title>{props.category}</Card.Title>
      </Card.Body>  
    </Card>
  );
};

export default CardCategory;
