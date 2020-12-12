import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Header from "../component/header";
import ImageUploader from 'react-images-upload';
import "./Form1.scss";
import dropdown from "../component/dropdown";
const Form2 = () => {
  let history = useHistory();
  const [pictures,setPicture] = useState([]); 
  let onDrop = (picture) =>{
    // this.setState({
    //     pictures: this.state.pictures.concat(picture),
    // });
    setPicture(picture);
}
  return (
    <div>
    <ImageUploader  
        withIcon={true}
        buttonText='Choose images'
        onChange={onDrop}
        imgExtension={['.jpeg','.jpg', '.gif', '.png', '.gif']}
        maxFileSize={5242880}
    />
    {/* <Button onClick = {()=>{history.push('/sellerForm/3')}} >Save&Continue</Button> */}
    </div>
);
};

export default Form2;
