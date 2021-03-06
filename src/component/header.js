import React from "react";
import { Container, Row, Col, Image, Button, Dropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./header.scss";

const header = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const history = useHistory();
  return (
    <Container >
      <Row className={"header"}>
        <a href="/home"><Col className={"logo header-col-logo"} >IdharDekho</Col></a>
        {/* <Col className>
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
        </Col>
        <Col className>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Select Location
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col>
          <Image
            className={"search-icon"}
            alt=""
            src={require("../assets/search.png")}
          />
        </Col> */}
        <Col className={"header-col-button"}>
          <Button
            onClick={() => {
              history.push("/Category");
            }}
            className={"sell-button"}
          >
            SELL
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default header;
