import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Header from "../component/header";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Swal from "sweetalert2";
import axios from "axios";
import { useHistory } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';



const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Enter Product Details", "Upload Images", "Enter Price"];
}

export default function HorizontalLabelPositionBelowStepper(props) {
  console.log(props);
  var history = useHistory();
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const [FormData, setFormData] = React.useState({});
  const [showNextButton, setNextButtonStatus] = useState(false);
  const [showLoader,setLoaderActive] = useState(false);


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <Form1 onChange={HandleChange} />;
      case 1:
        return (
          <Form2 onChange={HandleChange} showNextButton={setNextButtonStatus} />
        );
      case 2:
        return <Form3 onChange={HandleChange} />;
      default:
        return "Unknown stepIndex";
    }
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const HandleChange = (event) => {
    console.log("event", event.target.value);
    //event.persist();
    setFormData({ ...FormData, [event.target.name]: event.target.value });
    console.log(FormData);
  };
  const onSubmit = () => {
    console.log("onsubmit", FormData);
    //setLoaderActive(true);
    FormData['Category'] = props.match.params.Category;
    let url = process.env.REACT_APP_BASE_URL + "/addProductToSell";
    axios
      .post(url, FormData)
      .then(function (response) {
        //setLoaderActive(false);
        Swal.fire("Your post has been successfully created").then((result) => {
          history.push("/home");
        });
      })
      .catch(function (err) {
        throw err;
      });
  };

  return (
    <div className={classes.root}>
      <Header />
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          onSubmit()
        ) : (
          <div>
            {/* {showLoader?( <CircularProgress/>):null} */}
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                disabled={showNextButton}
              >
                {activeStep === steps.length - 1 ? "Submit Form" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
