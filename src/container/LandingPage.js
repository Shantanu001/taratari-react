import React,{useState,useEffect} from 'react';
import NodeGeocoder from 'node-geocoder';
import {Container,Row,Col,Image,Button,Dropdown} from 'react-bootstrap';
import {useHistory}  from "react-router-dom";
import Header from "../component/header";
import './LandingPage.scss';

const LandingPage = ()=>{
    let options = {
        provider: 'openstreetmap'
      };
      let geoCoder = NodeGeocoder(options);
      // Reverse Geocode
        geoCoder.reverse({lat:38.66, lon:-78.43})
        .then((res)=> {
          console.log(res);
        })
        .catch((err)=> {
          console.log(err);
        });
    // const options = {
    //     provider: 'openstreetmap',
    //     fetch:'POST'
    //   };
    //const geoCoder = NodeGeocoder(options);
    let history = useHistory();
    // geoCoder.reverse({ lat: 45.767, lon: 4.833 },function(err,result){
    //     alert(err,result);
        
    //       });

        //   (async () => {
        //     const location = await geoCoder.reverse({ lat: 45.767, lon: 4.833 });
            
        //     /** A list of matching locations is returned */
        //     console.log(JSON.stringify(location));

        //   })();
        
    // navigator.geolocation.getCurrentPosition(async function(position) {
    //     console.log(position.coords.latitude);
    //     // NodeGeocoder.reverseGeocode(position.coords.latitude,position.coords.longitude, function ( err, data ) {
    //     //     console.log(data);
    //     //   });
    //       console.log(await geocoder.reverse({ lat: position.coords.latitude, lon: position.coords.longitude }))    ;

    //   });
        return (
           <Container fluid>
               <Header/>
                <Row>
                    <Col lg={true} >
                        <Image className={"left-sidebar"}  src={require("../assets/online-store-57e6d24743_1280.png")} fluid/>
                    </Col>
                    <Col  lg={true} className = {"right-sidebar"}>
                        <Row className = {"heading"} >Why TaraTari?</Row>
                        <Row><p>INSTANT SELL & BUY ANY ITEM</p></Row>
                        <Row> <p>FREE LISTING</p></Row>
                        <Row> <p>QUICK RESPONSE FROM GENUINE BUYERS AND SELLERS</p></Row>
                        <Row ><Button onClick = {()=>{history.push('/home')}} className={"explore-button"} >EXPLORE</Button></Row>
                    </Col>
                </Row>   
            </Container>

    );
};

export default LandingPage;