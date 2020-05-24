import React from 'react';
import {Dropdown} from 'react-bootstrap';
//import {useHistory}  from "react-router-dom";
import './header.scss';

const dropdown = ()=>{
        return (
        
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Select Items
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
    );
};

export default dropdown;