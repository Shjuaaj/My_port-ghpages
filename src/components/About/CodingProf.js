import React from "react";
import { Col, Row } from "react-bootstrap";


import {

    SiCodechef,
    SiGeeksforgeeks,
    SiLeetcode,
    SiCodingninjas,
} from "react-icons/si";


function CodingProf() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiCodechef />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGeeksforgeeks />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLeetcode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCodingninjas />
      </Col>
     
     
    </Row>
  );
}

export default CodingProf;