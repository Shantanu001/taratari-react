import React,{useState, useEffect} from 'react';
import {Dropdown} from 'react-bootstrap';
//import {useHistory}  from "react-router-dom";
import './header.scss';

 function Dropdowns(props){
     const onSelectCategory = (val)=>{
         console.log("2323",val);
     }
    const [isOpen,setOpen] = useState(false);
    console.log("here",props);

        return (
        
                        <Dropdown onMouseEnter = { (e)=>setOpen(true) }
                        onMouseLeave = { (e)=>setOpen(false)}
                        show={isOpen}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic" onClick={e=>{onSelectCategory(e)}}>
                                {props.title}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {props.list&&props.list.map(obj=>(
                                    <Dropdown.Item href="#/action-1">{obj}</Dropdown.Item>
                                ))}
                                
                                {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                            </Dropdown.Menu>
                        </Dropdown>
    );
};

export default Dropdowns;