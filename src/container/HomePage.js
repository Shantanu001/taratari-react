import React,{useState, useEffect} from 'react';
import Header from "../component/header";
import Dropdown from "../component/dropdown";
import Card from "../component/card";
import {Container,Row,Col,Image,Button} from 'react-bootstrap';
import './HomePage.scss';
import Axios from 'axios';


// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';

function HomePage (){

    const [title,setTitle] = useState("HomePage");
    const [location,setLocation] = useState("");
    const [category,setCategory] = useState("Bikes");
    const [isOpen,setOpen] = useState(false);
    const [categoryList,getCategoryList] = useState();
    const [productList,getProductList] = useState("");


    let setDropdown = (e,val)=>{
        setOpen(val);
        console.log(val);
    }
    let getLocationFunction = ()=>{
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position.coords.latitude, position.coords.longitude);
            let options = {
                params:{
                "lat":position.coords.latitude,
                "lon":position.coords.longitude
                }
            }
            let url = process.env.REACT_APP_BASE_URL+"/getLocation";
            console.log(url);
            Axios.get(url,options)
            .then(function(response){
                console.log(response);
                setLocation(response.data[0].city?response.data[0].city:response.data[0].state);
            }).catch(function(err){
                throw err;
            })
          });

    };
    let getCategory = ()=>{
        let url = process.env.REACT_APP_BASE_URL + "/getCategoryList";
        Axios.get(url)
        .then(function(response){
            console.log("here",response.data.data);
            getCategoryList(response.data.data);

        }).catch(function(err){
                throw err;
        })
    }
    let getProductLists = ()=>{
        let url = process.env.REACT_APP_BASE_URL + "/getProductList";
        Axios.get(url)
        .then(function(response){
            console.log("121",response.data);
            getProductList(response.data);

        }).catch(function(err){
                throw err;
        })
    }

    useEffect(()=>{
        getProductLists();
        getCategory();
        getLocationFunction();       
    },[]);

    return (
        <div className="container">
       <Container fluid>
           <Row><Header /></Row>
           <Row className = "nav">
                {/* <Col xs={2} className='navbar' >
                    <a>Home</a>
                    <p>{category} in {location}</p>
                </Col>
                <Col xs={{ span: 2, offset: 8 }}>
                    <Dropdown/>
                </Col> */}
                  <Col sm={true} className='navbar' >
                    <a>Home</a>
                    <p><strong>{category} in {location}</strong></p>
                </Col>
                <Col sm={true}>
                    <Dropdown 
                    onMouseEnter = { (e)=>setOpen(true) }
                    onMouseLeave = { (e)=>setOpen(false)}
                    show={isOpen}
                    list = {categoryList}
                    title="Select Category"/>
                </Col>
                {/* <Col>
                    <Dropdown title="Select location Range"/>
                </Col> */}
                {/* <Col>
                    <Dropdown title="Select Minimum Price Range"/>
                </Col>
                <Col>
                    <Dropdown title="Select Maximum Price Range"/>
                </Col> */}
                <Col sm={true}>
                    <Dropdown 
                    title="SortBy"
                    list = {["High to Low","Low to High"]}
                    />
                </Col>
                
            </Row>
           <Row className = "explore"> 
            {/* <Col xs={2} className="filter-bar">
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
            </Col> */}
            <Col sm={true} className="content-bar">  
                <Row>
                    {productList&&productList.map(obj=>(
                        <Col sm={4}> <div className="card-item"> </div>  <Card title={obj.Name} price={obj.Price} image={obj.Image} id={obj._id}/></Col>
                    ))}
                </Row>            
            </Col>
            </Row>
       </Container>
       </div>

    );
};

export default HomePage;
