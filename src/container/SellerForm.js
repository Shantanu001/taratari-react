import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import StepCountForm from "../component/StepCountForm";
import Header from "../component/header";
import StepperForm from "./StepperForm";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";

const SellerForm = () => {
  let history = useHistory();
  let { form } = useParams();
  const [currentStep, setStep] = useState();
  useEffect(() => {
    setStep(form);
    console.log(form, currentStep);
  });

  return (
    <div className="container">
      <Row>
        <Header />
      </Row>
      <Row>
        {" "}
        <StepperForm />
      </Row>
    </div>
  );
};

export default SellerForm;
