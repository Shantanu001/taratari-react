import React,{useState} from 'react';
import Header from "../component/header";
import Dropdown from "../component/dropdown";
import Card from "../component/card";
import {Container,Row,Col,Image,Button} from 'react-bootstrap';
import './HomePage.scss';
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';

function HomePage (){

    const [title,setTitle] = useState("HomePage");
    const [location,setLocation] = useState("Bangalore");
    const [category,setCategory] = useState("Bikes");

    return (
        <div className="container">
       <Container fluid>
           <Row><Header /></Row>
           <Row >
                <Col xs={2} className='navbar' >
                    <a>Home</a>
                    <p>{category} in {location}</p>
                </Col>
                <Col xs={{ span: 2, offset: 8 }}>
                    <Dropdown/>
                </Col>
            </Row>
           <Row className = "explore"> 
            <Col xs={2} className="filter-bar">
                    <Row className='fiter-tab'>
                        <div style={{fontSize:'x-large'}}>Filters</div>
                        <p>----------------------</p>
                        <strong>Range(Km)</strong>
                        <input type="radio" id="<2km" name="<2km" value="<2km"/>
                        <label for="<2km">&lt;2km</label>
                        <input type="radio" id="<5km" name="<5km" value="<5km"/>
                        <label for="<5km">&lt;5km</label>
                        <input type="radio" id="<10km" name="<10km" value="<10km"/>
                        <label for="<10km">&lt;10km</label>
                        <input type="radio" id="<20km" name="<20km" value="<20km"/>
                        <label for="<20km">&lt;20km</label>
                        <input type="radio" id=">20km" name=">20km" value=">20km"/>
                        <label for=">20km">&gt;20km</label>
                    </Row>
                    <Row className='fiter-tab'>
                    <div  style={{fontSize:'x-large'}}>Price</div>
                    <input type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <span>Min</span>
                        <span>Max</span>
                    </div>
                    </Row>
            </Col>
            <Col xs = {10}className="content-bar">  
                <Row>
                    {[0,1,2,3,4,5,6,7,8,9,10].map(obj=>(
                        <Col xs={4}> <div className="card-item"> </div>  <Card/></Col>
                    ))}
                </Row>            
            </Col>
            </Row>
       </Container>
       </div>

    );
};

export default HomePage;
