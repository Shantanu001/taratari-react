import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form,Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import StepCountForm from '../component/StepCountForm';
import Header from "../component/header";
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';

const SellerForm = () => {
    let history = useHistory();
    let {form} = useParams();
    const [currentStep,setStep] = useState();
   useEffect(()=>{
    setStep(form);
    console.log(form,currentStep);
   }); 

  return (
    <div className="container">
      <Container fluid>
        <Header/>
        <StepCountForm/>
     
        {currentStep==1?<Form1/>:(currentStep==2?<Form2/>:<Form3/>)}
      </Container>
    </div>
  );
};

export default SellerForm;
